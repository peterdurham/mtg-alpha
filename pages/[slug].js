import Head from "next/head";
import Image from "next/image";
import setList from "../data/set-list.json";

export default function Page({ card }) {
  return (
    <>
      <h1>Page</h1>
      {/* <Head>
        <title>{card.name}</title>
      </Head>
      <h1>
        {card.name} ({card.rarity})
      </h1>
      <div
        style={{
          margin: "0 auto",
          background: "black",
          padding: "10px",
          borderRadius: "10px",
          height: "305px",
          width: "220px",
        }}
      >
        <Image src={card.image} height={285} width={200} alt={card.name} />
      </div> */}
    </>
  );
}

export async function getStaticPaths() {
  const paths = setList.map((card) => {
    return { params: { slug: card.number } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const card = setList.find((card) => card.number === params.slug);
  return { props: { card } };
}
