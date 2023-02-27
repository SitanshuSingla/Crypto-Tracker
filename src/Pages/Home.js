import Header from "../Components/Header.js/Header";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import CoinList from "./CoinList";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  let [select, setSelect] = useState("dot");
  let [trend, setTrend] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${select}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    )
      .then((res) => res.json())
      .then((res) => {
        setTrend(res);
      });
  }, [select]);

  return (
    <div>
      <Header select={select} setSelect={setSelect} />

      <h1>Crypto Tracker</h1>

      <Carousel responsive={responsive}>
        {trend &&
          trend.map((i) => {
            return (
              <div className="d">
                <img src={i.image}></img>
                <div>{i.symbol}</div>
                {i.current_price}
              </div>
            );
          })}
      </Carousel>

      <CoinList select={select} />
    </div>
  );
}
