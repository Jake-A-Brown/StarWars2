import React, { useCallback, useState } from 'react';

import Navbar from '../../components/navbar/navbar';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/common/card';

import './styles/planets.css';

import AllData from '../../data/alldata';


const Planets = () => {

  const [currentPage, setCurrentPage] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(
    `https://swapi.py4e.com/api/planets/`
  );
  const [previousPageUrl, setPreviousPageUrl] = useState(
    `https://swapi.py4e.com/api/planets/`
  );
  // const [selectedPlanet, setSelectedPlanet] = useState(null);

  const [nextBtn, setNextBtn] = useState(false);
  const [prevBtn, setPrevBtn] = useState(false);
  const [isFetch, setIsFetch] = useState(true);
  const [loading, setLoading] = useState(false);

  const [planetDisplay, setPlanetDisplay] = useState(false);
  const [pageDisplay, setPageDisplay] = useState(false);

  const handlePlanets = useCallback(async (url) => {
    try {

      setLoading(true);
      setPageDisplay(false);
      setIsFetch(false);
      setPlanetDisplay(false);
      setNextBtn(false);
      setPrevBtn(false);

      const response = await fetch(url);
      const data = await response.json();

      setPrevBtn(!!data.previous);
      setNextBtn(!!data.next);
      setPlanets(data.results);

      setPlanetDisplay(true);
      setPageDisplay(true);

      setNextPageUrl(data.next);
      setPreviousPageUrl(data.previous);
      setLoading(false);
    } catch (error) {
      console.error("", error);
    }

  }, []);

  const nextPageHandler = () => {
    if (nextPageUrl) {
      setCurrentPage(currentPage + 1);
      handlePlanets(nextPageUrl);
    }
  };

  const backPageHandler = () => {
    if (previousPageUrl) {
      setCurrentPage(currentPage - 1);
      handlePlanets(previousPageUrl);
    }
  };


  return (
    <div className='planets'>
      <Navbar />

      <div className="planets-container">

        {loading && <div className="loading-bar"><Loader /> </div>}

        {pageDisplay && (<div>Page {currentPage} </div>)}

        <div>
          {isFetch && (
            <button className='planet-button' onClick={nextPageHandler}>Planets of StarWars</button>
          )}
          {prevBtn && (
            <button onClick={backPageHandler} disabled={!previousPageUrl}>
              Back
            </button>
          )}
          {nextBtn && (
            <button onClick={nextPageHandler} disabled={!nextPageUrl}>
              Next
            </button>
          )}

        </div>

        {planetDisplay && (
          <div className="planets-results">

            {planets.map((result, index) => {

              const planetInfo = AllData.PlanetData.find(
                (planet) => planet.name === result.name
              );

              return (
                <div key={result.name} className="planets-result-container">
                  <div className="planet-items">
                    <Card
                    title={result.name}
                    image={planetInfo?.planetImageLink}
                    description={planetInfo?.description}
                     />

                    {/* <p>Rotation Period: {result.rotation_period}</p>
            <p>Orbital Period: {result.orbital_period}</p>
            <p>Diameter: {result.diameter}</p>
            <p>Climate: {result.climate}</p>
            <p>Gravity: {result.gravity}</p>
            <p>Terrain: {result.terrain}</p>
            <p>Surface Water: {result.surface_water}</p>
            <p>Population: {result.population}</p> */}
                    {/* <h5>URL: {result.url}</h5> */}

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {pageDisplay && (<div>Page {currentPage} </div>)}

        <div>
          {prevBtn && (
            <button onClick={backPageHandler} disabled={!previousPageUrl}>
              Back
            </button>
          )}
          {nextBtn && (
            <button onClick={nextPageHandler} disabled={!nextPageUrl}>
              Next
            </button>
          )}

        </div>
      </div>
    </div>
  )
}

export default Planets;