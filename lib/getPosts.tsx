import NotionService from "@/services/notion-service";
import { cache } from "react";

export const preload = () => {
  void loadPosts();
};

export const loadPosts = cache(async () => {
  const notionService = new NotionService();
  return await notionService.getPublishedBlogPost();
});
