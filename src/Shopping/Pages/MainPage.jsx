import React, { useState } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Collection from "../Components/Collection";
import Footer from "../Components/Footer";
import { mensCollection, WomensCollection } from "../../Fashion";
import WomanCollection from "../Components/WomanCollection";
import LadiesBanner from "../Components/LadiesBanner";

const MainPage = () => {
  const [menFashion, setMensFashion] = useState(mensCollection);
  const [womenFashion, setWomenFashion] = useState(WomensCollection);

  return (
    <div>
      <Header />
      <Banner />
      <Collection menFashion={menFashion} />
      <LadiesBanner />

      <WomanCollection womenFashion={womenFashion} />
      <Footer />
    </div>
  );
};

export default MainPage;
