import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import setList from "../data/set-list.json";

const Cards = () => {
  const [pages, setPages] = useState([]);
  const [pageIndexes, setPageIndexes] = useState([-1, 0]);

  console.log("pages", pages);
  useEffect(() => {
    console.log("setList", setList);

    var newArray = [],
      size = 9;
    while (setList.length > 0) newArray.push(setList.splice(0, size));
    console.log("newArray", newArray);
    if (newArray.length) {
      setPages(newArray);
    }
  }, []);

  if (!pages.length) return <div>loading</div>;

  return (
    <div
      style={{
        width: "1500px",
        margin: "0 auto",
        display: "flex",
      }}
    >
      <button
        onClick={() => setPageIndexes([pageIndexes[0] - 2, pageIndexes[1] - 2])}
      >
        back
      </button>
      <div style={{ width: "700px", display: "flex", flexWrap: "wrap" }}>
        {pages?.[pageIndexes[0]]?.map((card, index) => (
          <Link
            href={`/${card.number}`}
            key={index}
            style={{
              borderTop:
                index % 9 === 0 && index !== 0 ? "2px solid red" : "none",
            }}
          >
            <div
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                background: "black",
                padding: "10px",
                borderRadius: "14px",
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
      <div style={{ width: "700px", display: "flex", flexWrap: "wrap" }}>
        {pages?.[pageIndexes[1]]?.map((card, index) => (
          <Link
            href={`/${card.number}`}
            key={index}
            style={{
              borderTop:
                index % 9 === 0 && index !== 0 ? "2px solid red" : "none",
            }}
          >
            <div
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                background: "black",
                padding: "10px",
                borderRadius: "14px",
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
      <button
        onClick={() => setPageIndexes([pageIndexes[0] + 2, pageIndexes[1] + 2])}
      >
        next
      </button>
    </div>
  );
};
export default Cards;
