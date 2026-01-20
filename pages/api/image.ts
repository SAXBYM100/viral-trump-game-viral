import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const topic = String(req.query.topic || "news");

  // deterministic seed so same topic tends to show same-ish image
  const seed = encodeURIComponent(topic.toLowerCase().trim());

  // Picsum is simple + reliable (no API key). This returns an actual image.
  const url = `https://picsum.photos/seed/${seed}/900/500`;

  // Redirect the browser to the image so <img src="/api/image?..."> works.
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
  res.writeHead(302, { Location: url });
  res.end();
}
