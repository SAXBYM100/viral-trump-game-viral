
import Link from "next/link";

export default function SEOPage() {
  return (
    <div className="card">
      <h1>Trump Quiz – Real or Fake News Game</h1>
      <p>Test your ability to spot real Donald Trump headlines versus satire and AI-generated news.</p>
      <p>This viral quiz updates daily with trending stories, memes, and breaking moments.</p>

      <h2>Why People Love This Game</h2>
      <ul>
        <li>🔥 Live breaking news headlines</li>
        <li>😂 Meme-style reactions</li>
        <li>📱 Mobile-friendly and shareable</li>
      </ul>

      <Link href="/play" className="button">Start Playing</Link>
    </div>
  );
}
