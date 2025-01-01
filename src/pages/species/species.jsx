import React, { useCallback, useState } from 'react';

import Navbar from '../../components/navbar/navbar';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/common/card';

import './styles/species.css';

import AllData from '../../data/alldata';

const Species = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [species, setSpecies] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(
    "https://swapi.py4e.com/api/species/"
  );
  const [previousPageUrl, setPreviousPageUrl] = useState(
    "https://swapi.py4e.com/api/species/"
  );

  const [nextBtn, setNextBtn] = useState(false);
  const [prevBtn, setPrevBtn] = useState(false);
  const [isFetch, setIsFetch] = useState(true);
  const [loading, setLoading] = useState(false);

  const [pageDisplay, setPageDisplay] = useState(false);
  const [speciesDisplay, setSpeciesDisplay] = useState(false);

  const handleSpecies = useCallback(async (url) => {
    try {
      setLoading(true);
      setIsFetch(false);
      setSpeciesDisplay(false);
      setPageDisplay(false);
      setNextBtn(false);
      setPrevBtn(false);

      const response = await fetch(url);
      const data = await response.json();

      setNextBtn(!!data.next);
      setPrevBtn(!!data.previous);
      setSpeciesDisplay(true);
      setPageDisplay(true);

      setSpecies(data.results);
      setNextPageUrl(data.next);
      setPreviousPageUrl(data.previous);
      setLoading(false);
    } catch (error) { }
  }, []);

  const nextPageHandler = () => {
    if (nextPageUrl) {
      handleSpecies(nextPageUrl);
      setCurrentPage(currentPage + 1);
    }
  };

  const backPageHandler = () => {
    if (previousPageUrl) {
      handleSpecies(previousPageUrl);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
<div className='species'>
      <Navbar />

      <div className="species-container">

        {loading && <div className="loading-bar"><Loader /> </div>}

        {pageDisplay && (<div>Page {currentPage} </div>)}

        <div>
          {isFetch && (
            <button  className='species-button' onClick={nextPageHandler}>Species of StarWars</button>
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

        {speciesDisplay && (
          <div className="species-results">

            {species.map((result) => {

              const speciesInfo = AllData.SpeciesData.find(
                (species) => species.name === result.name
              );

              return (
                <div key={result.name} className="species-result-container">
                  <div className="species-items">
                    <Card
                    title={result.name}
                    image={speciesInfo?.speciesImageLink}
                    description={speciesInfo?.description}
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

export default Species