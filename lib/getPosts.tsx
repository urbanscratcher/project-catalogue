import NotionService from "@/services/notion-service";
import { cache } from "react";

export const preload = (category: string) => {
  void loadDevPosts(category);
};

export const loadDevPosts = cache(async (category: string) => {
  const notionService = new NotionService();
  return await notionService.findPublishedDevPosts(category);
});

export const loadPersonalPosts = cache(async () => {
  const notionService = new NotionService();
  return await notionService.findPublishedPersonalPosts();
});
