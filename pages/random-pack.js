import { useState, useEffect } from "react";
import setList from "../data/set-list.json";
import Image from "next/image";

const rares = setList.filter((card) => card.rarity === "R"); // 113
const uncommons = setList.filter((card) => card.rarity === "U"); // 94
const commons = setList.filter((card) => card.rarity === "C"); // 83

console.log("rares", rares);
console.log("uncommons", uncommons);
console.log("commons", commons);

const RandomPack = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const commonsOpened = Array.from({ length: 11 }, () =>
      Math.floor(Math.random() * 83)
    ).map((index) => commons[index]);
    const uncommonsOpened = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 94)
    ).map((index) => uncommons[index]);
    const rareOpened = Array.from({ length: 1 }, () =>
      Math.floor(Math.random() * 113)
    ).map((index) => rares[index]);
    console.log("rareOpened", rareOpened);

    const packContents = []
      .concat(commonsOpened)
      .concat(uncommonsOpened)
      .concat(rareOpened);

    setContents(packContents);
    console.log("packContents", packContents);
  }, []);

  return (
    <div>
      <h1>Random Pack</h1>
      <div
        style={{
          width: "1140px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {contents.map((card) => {
          return (
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
              {card?.image && (
                <Image src={card.image} height={285} width={200} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RandomPack;
