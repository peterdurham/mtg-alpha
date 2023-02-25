import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import setList from "../data/set-list.json";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>MTG ALPHA</h1>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Link href="/random-pack">Open Random Pack</Link>
        </div>

        <div
          style={{
            width: "700px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {setList.map((card, index) => (
            <Link href={`/${card.number}`} key={index}>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "8px",
                  background: "black",
                  padding: "10px",
                  borderRadius: "10px",
                  height: "305px",
                }}
              >
                <Image
                  src={card.image}
                  height={285}
                  width={200}
                  alt={card.name}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
