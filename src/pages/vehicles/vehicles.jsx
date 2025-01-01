import React, { useCallback, useState } from 'react';

import Navbar from '../../components/navbar/navbar';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/common/card';

import './styles/vehicles.css';

import AllData from '../../data/alldata';

const Vehicles = () => {
  const [currentPage, setCurrentPage] = useState(null);
    const [vehicles, setVehicles] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(
      `https://swapi.py4e.com/api/vehicles/`
    );
    const [previousPageUrl, setPreviousPageUrl] = useState(
      `https://swapi.py4e.com/api/vehicles/`
    );
  
    const [nextBtn, setNextBtn] = useState(false);
    const [prevBtn, setPrevBtn] = useState(false);
    const [isFetch, setIsFetch] = useState(true);
    const [loading, setLoading] = useState(false);
  
    const [vehicleDisplay, setVehicleDisplay] = useState(false);
    const [pageDisplay, setPageDisplay] = useState(false);
  
    const handleVehicles = useCallback(async (url) => {
      try {
  
        setLoading(true);
        setPageDisplay(false);
        setIsFetch(false);
        setVehicleDisplay(false);
        setNextBtn(false);
        setPrevBtn(false);
  
        const response = await fetch(url);
        const data = await response.json();
  
        setPrevBtn(!!data.previous);
        setNextBtn(!!data.next);
        setVehicles(data.results);
  
        setVehicleDisplay(true);
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
        handleVehicles(nextPageUrl);
      }
    };
  
    const backPageHandler = () => {
      if (previousPageUrl) {
        setCurrentPage(currentPage - 1);
        handleVehicles(previousPageUrl);
      }
    };

  return (
      <div className='vehicles'>
      <Navbar />

      <div className="vehicle-container">

        {loading && <div className="loading-bar"><Loader /> </div>}

        {pageDisplay && (<div>Page {currentPage} </div>)}

        <div>
          {isFetch && (
            <button className='vehicle-button' onClick={nextPageHandler}>Vehicles of StarWars</button>
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

        {vehicleDisplay && (
          <div className="vehicle-results">

            {vehicles.map((result, index) => {

              const vehicleInfo = AllData.VehicleData.find(
                (vehicles) => vehicles.name === result.name
              );

              return (
                <div key={result.name} className="vehicle-results-container">
                  <div className="vehicle-items">
                    <Card
                    title={result.name}
                    image={vehicleInfo?.vehicleImageLink}
                    description={vehicleInfo?.description}
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

export default Vehicles;