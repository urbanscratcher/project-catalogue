import {
  DevPost,
  DevPostPage,
  PersonalPost,
  PersonalPostPage,
} from "@/types/schema";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { MdBlock } from "notion-to-md/build/types";
import { DevDb, PersonalDb } from "./constants";

export default class NotionService {
  private client: Client;
  private n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async findPublishedDevPosts(category: string): Promise<DevPost[]> {
    // list blog posts
    const response = await this.client.databases.query({
      database_id: DevDb,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Category",
            select: {
              equals: category,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });

    return response.results.map((res) => {
      return NotionService.convertToDevPost(res);
    });
  }

  async findOneDevPost(slug: string): Promise<DevPostPage> {
    // fetch list of blog posts
    const response = await this.client.databases.query({
      database_id: DevDb,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    // handle error: 404
    const result = response.results[0];
    const throwError = () => {
      throw "No results available";
    };
    const page = result ?? throwError();

    // convert notion to Markdown
    const mdBlocks: MdBlock[] = await this.n2m.pageToMarkdown(page.id);
    const mdString = this.n2m.toMarkdownString(mdBlocks);
    const convertedData = NotionService.convertToDevPost(page);

    return {
      post: convertedData,
      markdown: mdString.parent,
    };
  }

  async findPublishedPersonalPosts(): Promise<PersonalPostPage[]> {
    // list blog posts
    const response = await this.client.databases.query({
      database_id: PersonalDb,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Created",
          direction: "ascending",
        },
      ],
    });

    // handle error: 404
    const throwError = () => {
      throw "No results available";
    };
    const pages = response.results.length > 0 ? response.results : throwError();

    let results: PersonalPostPage[] = [];
    for (const p of pages) {
      const mdBlocks: MdBlock[] = await this.n2m.pageToMarkdown(p.id);
      const mdString = this.n2m.toMarkdownString(mdBlocks);
      const convertedData = NotionService.convertToPersonalPost(p);
      results.push({ post: convertedData, markdown: mdString.parent });
    }

    return results;
  }

  private static convertToPersonalPost(page: any): PersonalPost {
    let cover = page.cover;
    cover =
      cover?.type == "file"
        ? cover.file
        : cover?.type == "external"
        ? cover.external.url
        : "";

    return {
      id: page.id,
      cover: cover,
      title: page.properties.Title.title[0].plain_text,
      description: page.properties.Description.rich_text[0]?.text.content ?? "",
      date: page.properties.Updated.last_edited_time,
    };
  }

  private static convertToDevPost(page: any): DevPost {
    let cover = page.cover;
    cover =
      cover?.type == "file"
        ? cover.file
        : cover?.type == "external"
        ? cover.external.url
        : "";

    return {
      id: page.id,
      cover: cover,
      category: page.properties.Category.select,
      title: page.properties.Title.title[0].plain_text,
      description: page.properties.Description.rich_text[0]?.text.content ?? "",
      slug: page.properties.Slug.formula.string,
      tags: page.properties.Tags.multi_select ?? [],
      role: page.properties.Role.multi_select ?? [],
      techStack: page.properties.TechStack.multi_select ?? [],
      date: page.properties.Updated.last_edited_time,
    };
  }
}
