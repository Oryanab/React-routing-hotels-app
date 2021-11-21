import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hotelsnip from "./HotelPage";

export default function HotelGallery({ database }) {
  return database.map((hotel) => {
    return <Hotelsnip hotelJson={hotel} />;
  });
}
