import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Hotelsnip({ hotelJson }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        width: "250px",
        height: "50px",
        border: "1px solid black",
        borderRadius: "1px",
        padding: "5px",
        margin: "2px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <button>
        <Link to={`/${encodeURIComponent(hotelJson.שם)}`}>Card</Link>
      </button>
      <button>
        <Link to={`/calling${encodeURIComponent(hotelJson.שם)}`}>call</Link>
      </button>
      <p>{hotelJson.טלפון}</p>
      <br />
      <p>{hotelJson.בית}</p>
      <br />
      <p>{hotelJson.רחוב}</p>
      <br />
      <p>{hotelJson.שם}</p>
      <br />
    </div>
  );
}
