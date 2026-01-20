
import Link from "next/link";

export default function Home() {
  return (
    <div className="card">
      <h1>Trump or Not? 🤯</h1>
      <p>The viral game that dares you to guess what's REAL, SATIRE, or AI.</p>
      <p>🔥 Updated daily with breaking headlines.</p>

      <Link href="/play" className="button">Play Now</Link>
    </div>
  );
}
