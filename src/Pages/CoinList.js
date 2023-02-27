import { useEffect, useState } from "react";
import "./Coinlist.css";

export default function CoinList(props) {
  let [coin, setCoin] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.select}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
      .then((res) => res.json())
      .then((res) => {
        setCoin(res);
      });
  }, []);
  console.log(search);
  return (
    <div className="con">
      <form className="d-flex mb-3" role="search">
        <input
          onInput={(e) => {
            if (e.target.value == "") setSearch("*");
            else setSearch(e.target.value);
          }}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">24 Hr Change</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coin
            .filter((b) => {
              if (search == "undefines" || search == "*") return b;
              else if (b.symbol.toLowerCase().includes(search.toLowerCase()))
                return b;
            })
            .map((i) => {
              return (
                <tr>
                  <th scope="row">
                    <a href={"/single/" + i.id}>
                      <img src={i.image} />
                    </a>
                    {i.symbol}
                  </th>
                  <td>{i.current_price}</td>
                  <td>{i.price_change_24h}</td>
                  <td>{i.market_cap}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
