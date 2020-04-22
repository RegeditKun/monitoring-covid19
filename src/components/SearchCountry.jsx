import React, { useState, useEffect } from "react";
import Axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import CardData from "./CardData";
import ChartData from "./ChartData"

const SearchCountry = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  const [countryFromEvent, setCountryFromEvent] = useState();
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (countryFromEvent) {
      Axios.get(
        `https://corona.lmao.ninja/v2/countries/${countryFromEvent}`
      )
        .then((res) => {
          if (Array.isArray(res.data)) {
            setError("Please input the country");
            setShowData(false);
          } else {
            setData(res.data);
            setShowData(true);
          }
        })
        .catch((err) => {
          setError(err.response.data.message);
          setShowData(false);
        });
    }
  }, [countryFromEvent]);

  const handleEvent = () => {
    setCountryFromEvent(country);
  };

  return (
    <section id="search-country">
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          className="form-control"
          placeholder="Search Country..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEvent();
            }
          }}
        />
        <InputGroup.Append>
          <Button
            variant="outline-light"
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleEvent}
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {showData ? (
        <div className="show-data">
          <h1>{data.country}</h1>
          <img src={data.countryInfo.flag} alt="Country Flag" />
          <CardData data={data} />
          <ChartData data={data} />
        </div>
      ) : (
        <h2>{error}</h2>
      )}
    </section>
  );
};

export default SearchCountry;
