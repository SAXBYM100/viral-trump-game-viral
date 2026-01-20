
export default function handler(req, res) {
  const data = [
    {
      title: "Trump vows to launch the loudest campaign rally in history",
      image: "https://source.unsplash.com/800x600/?donald,trump"
    },
    {
      title: "AI claims Trump challenged a robot to a debate (satire)",
      image: "https://source.unsplash.com/800x600/?robot,politics"
    },
    {
      title: "Trump says social media is 'wilder than ever' at rally",
      image: "https://source.unsplash.com/800x600/?crowd,rally"
    }
  ];
  res.status(200).json(data);
}
