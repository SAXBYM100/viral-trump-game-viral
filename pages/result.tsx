
import Link from "next/link";

export default function Result({ score = 0 }) {
  return (
    <div className="card">
      <h1>Your Score: {score} 🔥</h1>
      <p>Think you can beat that? Challenge a friend.</p>

      <Link href="/play" className="button">Play Again</Link>
    </div>
  );
}
