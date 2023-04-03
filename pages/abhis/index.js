import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Abhis.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { abhis: data },
  };
};

const abhis = ({ abhis }) => {
  return (
    <>
      <Head>
        <title>Abhi List | All Listing</title>
        <meta name="keywords" content="Abhi tutorial" />
      </Head>
      <div className="abhi">
        <h1>All Listing</h1>
        {abhis.map((abhi) => (
          <Link href={"/abhis/" + abhi.id} key={abhi.id}>
            <h3 className={styles.single}>{abhi.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default abhis;
