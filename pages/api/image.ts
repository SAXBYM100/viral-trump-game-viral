export default async function handler(req, res) {
  const topic = req.query.topic || "news";

  const url = `https://picsum.photos/800/600`;

  const response = await fetch(url);
  const buffer = await response.arrayBuffer();

  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader("Cache-Control", "no-cache");
  res.send(Buffer.from(buffer));
}
