export const DEV_DB: string = process.env.NOTION_DEV_DB_ID ?? "";
export const PERSONAL_DB: string = process.env.NOTION_PERSONAL_DB_ID ?? "";
export const PROJECT_DB: string = process.env.NOTION_PROJECT_DB_ID ?? "";

export enum MENU {
  ABOUT = "About",
  PROJECTS = "Projects",
  DEVLOGS = "Devlogs",
  NOTES = "Notes",
  PERSONAL = "Personal",
  CONTACT = "Contact",
}
