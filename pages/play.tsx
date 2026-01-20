
import { useEffect, useState } from "react";
import Link from "next/link";

const reactions = [
  "NO WAY THIS IS REAL 💀",
  "THIS CANNOT BE TRUE 😳",
  "BRO WHAT?! 😂",
  "THE INTERNET IS COOKED 🔥",
  "AIN'T NO WAY 😭"
];

export default function Play() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [reaction, setReaction] = useState("");

  useEffect(() => {
    fetch("/api/headlines")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data.length) return <p>Loading chaos...</p>;

  const current = data[index];

  function guess() {
    setScore(score + 1);
    setReaction(reactions[Math.floor(Math.random() * reactions.length)]);
    setTimeout(() => {
      if (index + 1 >= data.length) {
        window.location.href = `/result?score=${score + 1}`;
      } else {
        setIndex(index + 1);
        setReaction("");
      }
    }, 800);
  }

  return (
    <div className="card">
      <img className="image" src={current.image} />
      <h2>{current.title}</h2>
      {reaction && <h3>{reaction}</h3>}

      <button className="button" onClick={guess}>REAL</button>
      <button className="button" onClick={guess} style={{marginLeft:"10px"}}>FAKE</button>
    </div>
  );
}
