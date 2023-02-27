import { useEffect, useState } from "react";
import "./Header.css";
export default function Header(props) {
  let [cur, setCur] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)
      .then((res) => res.json())
      .then((res) => {
        setCur(res);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand a2" href="#">
            Crypto Tracker
          </a>

          <select
            onChange={(e) => {
              props.setSelect(e.target.value);
            }}
          >
            {cur.map((i) => {
              return <option>{i}</option>;
            })}
          </select>
        </div>
      </nav>
    </div>
  );
}
