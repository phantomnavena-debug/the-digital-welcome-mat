import { createServerFn } from "@tanstack/react-start";

export const getChannelVideos = createServerFn({ method: "GET" }).handler(async () => {
  const { fetchChannelVideos } = await import("./youtube.server");
  return fetchChannelVideos();
});
