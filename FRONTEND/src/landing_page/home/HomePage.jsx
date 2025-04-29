import React from "react";
import Navbar from "../Navbar";
import Award from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";

import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Hero from "./Hero";
import Eduaction from "./Education";

export default function HomePage() {
  return (
    <>

      <Hero/>
      <Award />
      <Stats />
      <Pricing />
      <Eduaction/>
      <OpenAccount />

      
    </>
  );
}
