import NotionService from "@/services/notion-service";
import { cache } from "react";

export const preload = (category: string) => {
  void loadDevs(category);
};

export const loadDevs = cache(async (category: string) => {
  const notionService = new NotionService();
  return await notionService.findPublishedDevPosts(category);
});

export const loadProjects = cache(async () => {
  const notionService = new NotionService();
  return await notionService.findPublishedProjectPosts();
});

export const loadProject = cache(async (slug: string) => {
  const notionService = new NotionService();
  return await notionService.findOneProjectPost(slug);
});

export const loadDev = cache(async (slug: string) => {
  const notionService = new NotionService();
  return await notionService.findOneDevPost(slug);
});

export const loadPersonal = cache(async () => {
  const notionService = new NotionService();
  return await notionService.findPublishedPersonalPosts();
});
