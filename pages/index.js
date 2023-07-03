import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          InstaClicks
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="InstaClicks" />
        <hr />
      </main>
      <Footer />
    </div>
  );
}
