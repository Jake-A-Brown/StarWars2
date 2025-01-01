import React, { useState, useCallback } from 'react';

import AllData from '../../data/alldata';

import Navbar from '../../components/navbar/navbar';
import Loader from '../../components/Loader/Loader';

import './styles/people.css';
import Card from '../../components/common/card';


const People = () => {
  // pagination
  const [currentPage, setCurrentPage] = useState(null);
  // for homeworld
  const [nextPageUrl, setNextPageUrl] = useState(
    `https://swapi.py4e.com/api/people/?page=`
  );
  const [previousPageUrl, setPreviousPageUrl] = useState(
    `https://swapi.py4e.com/api/people/?page=`
  );
  const [nextBtn, setNextBtn] = useState(false);
  const [prevBtn, setPrevBtn] = useState(false);

  // display UX
  const [peopleDisplay, setPeopleDisplay] = useState(false);
  const [pageDisplay, setPageDisplay] = useState(false);

  const [people, setPeople] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [loading, setLoading] = useState(false);

  /** api calls and GUI experience */
  const handlePeople = useCallback(async (url) => {
    try {
      setLoading(true);
      setIsFetch(false);
      setPeopleDisplay(false);
      setPageDisplay(false);
      setNextBtn(false);
      setPrevBtn(false);

      const response = await fetch(url);
      const data = await response.json();

      const peopleWithHomeworld = await Promise.all(
        data.results.map(async (person) => {
          const homeworldName = await fetchHomeworld(person.homeworld);

          return { ...person, homeworldName };
        })
      );

      setPrevBtn(!!data.previous);
      setNextBtn(!!data.next);
      setPeople(peopleWithHomeworld);

      setPeopleDisplay(true);
      setPageDisplay(true);

      setNextPageUrl(data.next);
      setPreviousPageUrl(data.previous);
      setLoading(false);


    } catch (error) {
      console.error("Error fetching people:", error);
    }
  }, []);

  /** fetching home world info for characters */
  const fetchHomeworld = async (homeworldUrl) => {
    try {
      const response = await fetch(homeworldUrl);
      const homeworldData = await response.json();
      return homeworldData.name;
    } catch (error) {
      console.error("Error fetching homeworld:", error);
      return "Unknown";
    }
  };

  //pagination 
  const nextPageHandler = () => {
    if (nextPageUrl) {
      handlePeople(nextPageUrl);
      setCurrentPage(currentPage + 1);
    }
  };

  const backPageHandler = () => {
    if (previousPageUrl) {
      handlePeople(previousPageUrl);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='people'>
      <Navbar />

      {loading && (
        <div className="loading-bar">
          {" "}
          <Loader />
        </div>
      )}

      {pageDisplay && (<div>Page {currentPage} </div>)}

      {/** button to fetch */}
      {isFetch && (
        <button className='people-button' onClick={nextPageHandler}>Figures of the Force</button>
      )}

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

      {peopleDisplay && (
        <div className="people-container">
          {people.map((result) => {
            const peopleInfo = AllData.PeopleData.find(
              (people) => people.name === result.name
            );

            return (
              <div key={result.name} className="people-result-container">

                <div className="people-items">
                  <Card
                    title={result.name}
                    homeworld={'HomeWorld: ' + result.homeworldName}
                    image={peopleInfo?.peopleImageLink}
                    description={peopleInfo?.description}
                  />

                </div>
              </div>
            )
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
  )
}

export default People;