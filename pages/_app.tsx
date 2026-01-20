
import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{maxWidth:"600px", margin:"auto", padding:"10px"}}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
