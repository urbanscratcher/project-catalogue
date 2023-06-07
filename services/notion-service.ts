import { BlogPost, PostPage } from "@/@types/schema";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { MdBlock } from "notion-to-md/build/types";
import slugify from "slugify";

export default class NotionService {
  client: Client;
  notionToMarkdown: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.notionToMarkdown = new NotionToMarkdown({ notionClient: this.client });
  }

  async getPublishedBlogPost(): Promise<BlogPost[]> {
    const db = process.env.NOTION_BLOG_DB_ID ?? "";

    // list blog posts
    const response = await this.client.databases.query({
      database_id: db,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });

    return response.results.map((res) => {
      return NotionService.pageToPostTransformer(res);
    });
  }

  async getSingleBlogPost(slug: string): Promise<PostPage> {
    let post, markdown;
    const db = process.env.NOTION_BLOG_DB_ID ?? "";

    // list of blog posts
    const response = await this.client.databases.query({
      database_id: db,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    if (!response.results[0]) {
      throw "No results available";
    }

    // grab page from notion
    const page = response.results[0];

    const mdBlocks: MdBlock[] = await this.notionToMarkdown.pageToMarkdown(
      page.id
    );
    markdown = this.notionToMarkdown.toMarkdownString(mdBlocks);
    post = NotionService.pageToPostTransformer(page);

    return {
      post,
      markdown,
    };
  }

  private static pageToPostTransformer(page: any): BlogPost {
    let cover = page.cover;
    cover =
      cover?.type == "file"
        ? page.cover.file
        : cover?.type == "external"
        ? page.cover.external.url
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
