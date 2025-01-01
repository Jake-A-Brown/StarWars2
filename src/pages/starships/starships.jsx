import React, { useCallback, useState } from 'react';

import Navbar from '../../components/navbar/navbar';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/common/card';

import './styles/starships.css';

import AllData from '../../data/alldata';

const Starships = () => {
  const [currentPage, setCurrentPage] = useState(null);
    const [starships, setStarships] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(
      `https://swapi.py4e.com/api/starships/`
    );
    const [previousPageUrl, setPreviousPageUrl] = useState(
      `https://swapi.py4e.com/api/starships/`
    );
  
    const [nextBtn, setNextBtn] = useState(false);
    const [prevBtn, setPrevBtn] = useState(false);
    const [isFetch, setIsFetch] = useState(true);
    const [loading, setLoading] = useState(false);
  
    const [starshipDisplay, setStarshipDisplay] = useState(false);
    const [pageDisplay, setPageDisplay] = useState(false);
  
    const handleStarships = useCallback(async (url) => {
      try {
  
        setLoading(true);
        setPageDisplay(false);
        setIsFetch(false);
        setStarshipDisplay(false);
        setNextBtn(false);
        setPrevBtn(false);
  
        const response = await fetch(url);
        const data = await response.json();
  
        setPrevBtn(!!data.previous);
        setNextBtn(!!data.next);
        setStarships(data.results);
  
        setStarshipDisplay(true);
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
        handleStarships(nextPageUrl);
      }
    };
  
    const backPageHandler = () => {
      if (previousPageUrl) {
        setCurrentPage(currentPage - 1);
        handleStarships(previousPageUrl);
      }
    };

  return (
      <div className='starships'>
      <Navbar />

      <div className="starships-container">

        {loading && <div className="loading-bar"><Loader /> </div>}

        {pageDisplay && (<div>Page {currentPage} </div>)}

        <div>
          {isFetch && (
            <button className='starship-button' onClick={nextPageHandler}>Starships of StarWars</button>
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

        {starshipDisplay && (
          <div className="starship-results">

            {starships.map((result, index) => {

              const starshipInfo = AllData.StarshipData.find(
                (starships) => starships.name === result.name
              );

              return (
                <div key={result.name} className="starship-result-container">
                  <div className="starship-items">
                    <Card
                    title={result.name}
                    image={starshipInfo?.starshipImageLink}
                    description={starshipInfo?.description}
                     />

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

export default Starships;