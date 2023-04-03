import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhi List | Home</title>
        <meta name="keywords" content="Abhi tutorial" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsam
          ipsum, earum quam dicta dolorum iure explicabo delectus a odit eius
          quo minus eum, repellat porro? Neque perferendis quo delectus.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsam
          ipsum, earum quam dicta dolorum iure explicabo delectus a odit eius
          quo minus eum, repellat porro? Neque perferendis quo delectus.
        </p>
        <Link className={styles.btn} href="/abhis">
          See Abhi Listing
        </Link>
      </div>
    </>
  );
}
