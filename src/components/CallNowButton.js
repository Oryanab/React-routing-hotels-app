import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function CallNowButton({ hotelJson, url }) {
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
      <h1>Calling - {hotelJson.שם}</h1>
      <br />
      <h2>{hotelJson.טלפון}...</h2>
      <br />
      <button>
        <Link to={"/"}>End Call</Link>
      </button>
      <br />
    </div>
  );
}
