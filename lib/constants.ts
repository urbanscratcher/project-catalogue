export const PROXIED_URL: string =
  "https://notion-cors.urbanscratcher.workers.dev";

export const DEV_DB: string = process.env.NOTION_DEV_DB_ID || "";
export const PERSONAL_DB: string = process.env.NOTION_PERSONAL_DB_ID || "";
export const PROJECT_DB: string = process.env.NOTION_PROJECT_DB_ID || "";

export enum MENU {
  ABOUT = "About",
  PROJECTS = "Projects",
  CONTACT = "Contact",
}

export const PAGE_LIMIT = 25;
