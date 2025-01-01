import React, { useState, useEffect } from "react";
import "./styles/openingcrawl.css";
import Crawl from "@liorpo/react-star-wars-crawl";

const OpeningCrawl = () => {
  const [films, setFilms] = useState('');
  const [filmData, setFilmData] = useState(null);

  const [crawlDisplay, setCrawlDisplay] = useState(true);

  const handleFilms = async (selectedFilm) => {
    const response = await fetch(`https://swapi.py4e.com/api/films/${selectedFilm}`);
    const data = await response.json();
    setFilmData(data);
    setCrawlDisplay(true);
  };

  const handleMovieChange = (e) => {
    const selectedFilm = e.target.value;
    setFilms(selectedFilm);

    if (selectedFilm) {
      handleFilms(selectedFilm);
    }
  };

  useEffect(() => {
    const audio = document.getElementById("opening-crawl-audio");

    // Play the audio when filmData changes
    if (filmData) {
      audio.play();
    }
  }, [filmData]);

  return (
    <div className="opening-crawl" style={{ width: '100%' }}>

      <audio id="opening-crawl-audio" preload="auto">
        <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
        <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
      </audio>


      <div className="opening-crawl-container" style={{ width: '100%', display: 'flex',flexDirection:'column', alignItems:'center' }}>
        <div style={{ width: '50%' }}>

          <h3>Opening Crawl</h3>

          <select value={films} onChange={handleMovieChange}>
            <option value="">Select a Film</option>
            <option value="4">Episode 1</option>
            <option value="5">Episode 2</option>
            <option value="6">Episode 3</option>
            <option value="1">Episode 4</option>
            <option value="2">Episode 5</option>
            <option value="3">Episode 6</option>
            <option value="7">Episode 7</option>
          </select>
        </div>
        {/* <br/> */}

        {crawlDisplay && (
          <div className="crawl-display" style={{ height: "300px", width: '100%', justifyItems:'center' }}>
            {filmData ? (
              <Crawl
                subTitle={filmData.title}
                title={"Episode " + filmData.episode_id}
                text={filmData.opening_crawl}
                speed={90}
                textContainerStyles={{
                  perspective: '470px'
                }}
              />
            ) : (
              <p>Select a film to view its opening crawl.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OpeningCrawl;