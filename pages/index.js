import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat&apos;s Portfolio</title>
        <meta name="description" content="Collection of projects Cat made" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
