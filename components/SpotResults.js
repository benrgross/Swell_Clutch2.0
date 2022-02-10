import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import CurrentSwell from "./CurrentSwell";

function SearchSpotResults({ data }) {
  const [swell, setSwell] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("data", data);
  const getSwell = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const body = {
        spotId: e.target.getAttribute("data-spotid"),
      };
      const { data } = await axios.post("/api/getswell/currentswell", body);
      console.log(data);
      setSwell(data);
      console.log(swell);
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <>
      {swell.length < 1 ? (
        <Row>
          <Col></Col>
          <Col sm={12} md={6} className="spot__results-col">
            {" "}
            {data ? (
              data.map((spot) => {
                return (
                  <>
                    <p></p>
                    <p
                      onClick={getSwell}
                      className="spot__result-link"
                      key={spot.name}
                      data-spotid={spot.spotId}
                      data-api={spot.href}
                    >
                      {spot.name}
                    </p>
                  </>
                );
              })
            ) : (
              <p>search a spot to get started </p>
            )}
          </Col>
          <Col></Col>
        </Row>
      ) : (
        <CurrentSwell data={swell} />
      )}
    </>
  );
}

export default SearchSpotResults;
