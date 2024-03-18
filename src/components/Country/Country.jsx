import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, ccn3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Country: {name.common}</h3>
      <img src={flags.png} alt="" />
      <h4>Population: {population}</h4>
      <h4>Area: {area}</h4>
      <h4>Country code: {ccn3}</h4>

      <button onClick={handleVisited}>{visited ? "Visited" : "Interested"}</button>
    </div>
  );
};

export default Country;