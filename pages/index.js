import Head from "next/head";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Contact from "../components/sections/contact/contact";
import Hero from "../components/sections/hero/hero";
import Work from "../components/sections/work/work";
import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";
import Skills from "../components/sections/skills/skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakil Ahmed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        {/* Header Section */}
        <Header />
        {/* Hero Section */}
        <Hero />
        {/* Skills Section */}
        <Skills />
        {/* Poerfolio Section */}
        <Work />
        {/* Contact Section */}
        <Contact />
        {/* Footer Section */}
        <Footer />
      </main>
      <Link href="#header" className="btn arrow__btn">
        <span>
          <BsArrowUp />
        </span>
      </Link>
    </>
  );
}
