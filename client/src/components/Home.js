import React from "react";
import Navbar from "./Layout/Navbar";
import Table from "./Layout/Table";

export default function Home() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div>Hello</div>
      <Table />
    </div>
  );
}
