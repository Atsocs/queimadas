import "./table_styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../constants";
import toTitleCase from "../../utils/TitleCase";

export default function Top10() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/state/top10`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>🔥 Top 10 Estados 🔥</h3>
      <div className="tg-wrap">
        <table className="tg">
          <tbody>
            {data.map(({ estado, num_focos }, index) => {
              return (
                <tr key={estado}>
                  <td className="tg-0lax">{index + 1}°</td>
                  <td className="tg-0lax">{toTitleCase(estado)}</td>
                  <td className="tg-0lax"> {num_focos}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
