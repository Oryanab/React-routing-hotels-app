import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function HotelCard({ hotelJson }) {
  return (
    <div
      style={{
        display: "block",
        backgroundColor: "white",
        width: "300px",
        height: "500px",

        borderRadius: "10px",
        padding: "2px",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <h1>{hotelJson.שם}</h1>
      <br />
      <p>{hotelJson.בית}</p>
      <br />
      <p>{hotelJson.רחוב}</p>
      <br />
      <p>{hotelJson.טלפון}</p>
      <br />
      <button>
        <Link to={`/calling${encodeURIComponent(hotelJson.שם)}`}>call</Link>
      </button>
      <button>
        <Link to={"/"}>Back Home</Link>
      </button>
    </div>
  );
}
