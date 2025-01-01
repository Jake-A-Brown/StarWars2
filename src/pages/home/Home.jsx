import React from "react";
import "./styles/Home.css";
import starWarsLogo from '../../Star_Wars_Logo.svg.png';
import Navbar from "../../components/navbar/navbar";
import OpeningCrawl from "../crawl/openingcrawl";
import Search from '../../components/SearchBar/search';

const Home = () => {

  return (
    <div className="homepage">
      <div className="homepage-container">
        <Navbar />
        <img className="star-wars-logo" src={starWarsLogo} alt="Star Wars Logo" />
        <div className="homepage-items" style={{width:'100%'}}>
          <Search />
          <OpeningCrawl />
        </div>
      </div>
    </div>
  );
};

export default Home;
