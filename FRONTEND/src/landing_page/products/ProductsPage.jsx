import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/assets/kite.png"
        productName="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo "
        learnMore="Learn more "
        playStore=""
        appStore=""
      />
      <RightSection 
       imageURL="/assets/console.png"
       productName="Console"
       productDiscription=" The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       learnMore="Learn more "/>
      <LeftSection
        imageURL="/assets/coin.png"
        productName="Coin"
        productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        
        playStore=""
        appStore=""
      />
      <RightSection 
       imageURL="/assets/kiteconnect.png"
       productName="KiteKite Connect API"
       productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       learnMore="Kite Connect  "/>
      <LeftSection
        imageURL="/assets/varsity.png"
        productName="Varsity mobile"
        productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        playStore=""
        appStore=""
      />
      <Universe />
    </>
  );
}
