
import Link from "next/link";

export default function Header() {
  return (
    <header style={{padding:"10px", borderBottom:"1px solid #333"}}>
      <Link href="/" style={{fontWeight:"bold", fontSize:"20px"}}>Trump or Not? 🔥</Link>
      <span style={{float:"right"}}>
        <Link href="/daily">Daily</Link>{" | "}
        <Link href="/seo/trump-quiz">SEO</Link>
      </span>
    </header>
  );
}
