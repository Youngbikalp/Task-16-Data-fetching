import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cityBikes, setCityBikes] = useState([]);
  console.log(cityBikes);
  useEffect(() => {
    fetch("http://api.citybik.es/v2/networks").then((response) => {
      if (!response) {
        throw new Error("Network Error");
      }
      response
        .json()
        .then((data) => {
          setCityBikes(data.networks);
        })
        .catch((error) => {
          console.log("Error while fetching data", error);
        });
    });
  }, []);
  return (
    <div>
      {cityBikes.map((cityBike) => (
        <div key={cityBike.id}>
          <div>{cityBike.company}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
