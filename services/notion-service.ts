import {
  DevData,
  DevPage,
  PaginatedProjectData,
  PersonalData,
  PersonalPage,
  ProjectData,
  ProjectPage,
} from "@/@types/schema";
import { Client } from "@notionhq/client";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import { MdBlock } from "notion-to-md/build/types";
import {
  DEV_DB,
  PAGE_LIMIT,
  PERSONAL_DB,
  PROJECT_DB,
  PROXIED_URL,
} from "../lib/constants";

export default class NotionService {
  private client: Client;
  private n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async findPublishedProjectPosts(): Promise<PaginatedProjectData> {
    const query = {
      database_id: PROJECT_DB,
      page_size: PAGE_LIMIT,
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
          direction: "descending",
        },
      ],
    };

    const data = await fetch(`${PROXIED_URL}/databases/${PROJECT_DB}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    try {
      const res = await data.json();
      const result = res.results.map((res: any) =>
        this.convertToProjectPost(res)
      );

      console.log(res);

      return {
        hasMore: res.has_more,
        nextCursor: res.next_cursor ?? "",
        data: result,
      };
    } catch {
      return {
        hasMore: false,
        nextCursor: "",
        data: [],
      };
    }
  }

  async findOneProjectPost(slug: string): Promise<ProjectPage> {
    const response = await this.client.databases.query({
      database_id: PROJECT_DB,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    const page = this.getPage(response);

    return {
      post: this.convertToProjectPost(page),
      markdown: await this.getMd(page.id),
    };
  }

  async findOneDevPost(slug: string): Promise<DevPage> {
    const response = await this.client.databases.query({
      database_id: DEV_DB,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    const page = this.getPage(response);

    return {
      post: this.convertToDevPost(page),
      markdown: await this.getMd(page.id),
    };
  }

  async findPublishedDevPosts(category: string): Promise<DevData[]> {
    const response = await this.client.databases.query({
      database_id: DEV_DB,
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
      return this.convertToDevPost(res);
    });
  }

  async findPublishedPersonalPosts(): Promise<PersonalPage[]> {
    const response = await this.client.databases.query({
      database_id: PERSONAL_DB,
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

    // convert
    let results: PersonalPage[] = [];
    for (const p of pages) {
      const mdBlocks: MdBlock[] = await this.n2m.pageToMarkdown(p.id);
      const mdString = this.n2m.toMarkdownString(mdBlocks);
      const convertedData = NotionService.convertToPersonalPost(p);
      results.push({ post: convertedData, markdown: mdString.parent });
    }

    return results;
  }

  private async getMd(pageId: string): Promise<string> {
    const mdBlocks: MdBlock[] = await this.n2m.pageToMarkdown(pageId);
    const mdString = this.n2m.toMarkdownString(mdBlocks);
    return mdString.parent;
  }

  private getPage(
    response: QueryDatabaseResponse
  ): PageObjectResponse | PartialPageObjectResponse {
    const result = response.results[0];

    const throwError = () => {
      throw "No results available";
    };
    return result ?? throwError();
  }

  private static convertToPersonalPost(page: any): PersonalData {
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

  private convertToDevPost(page: any): DevData {
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

  private convertToProjectPost(page: any): ProjectData {
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
      slug: page.properties.Slug.formula.string,
      role: page.properties.Role.multi_select ?? [],
      techStack: page.properties.TechStack.multi_select ?? [],
      date: page.properties.Updated.last_edited_time,
    };
  }
}
