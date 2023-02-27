import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleCoin.css";
export default function SingleCoin() {
  let [singlecoin, setSingleCoin] = useState();
  let [chart, setChart] = useState();

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleCoin(res);
      });
  }, []);

  return (
    <div className="e">
      {singlecoin && <img className="im" src={singlecoin.image.thumb}></img>}
      <div> {singlecoin && singlecoin.symbol}</div>
      <p> {singlecoin && singlecoin.description.en.slice(0, 200)}</p>
      <div>Rank={singlecoin && singlecoin.coingecko_rank}</div>
    </div>
  );
}
