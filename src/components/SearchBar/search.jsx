import React, { useState } from "react";
import CategoryDataMap from "./categorydatamap";

import Card from '../common/card';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const searchPromises = Object.keys(CategoryDataMap).map((category) =>
        fetch(`https://swapi.py4e.com/api/${category}/?search=${searchTerm}`).then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch ${category}`);
          }
          return res.json();
        })
      );

      const responses = await Promise.all(searchPromises);

      const aggregatedResults = responses.flatMap((response, index) =>
        response.results.map((item) => ({
          ...item,
          category: Object.keys(CategoryDataMap)[index],
        }))
      );

      setResults(aggregatedResults);
    } catch (err) {
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const getDetailsForResult = (result) => {
    const categoryInfo = CategoryDataMap[result.category];
    if (!categoryInfo) return null;

    // Make the comparison case-insensitive and remove extra spaces
    const matchedItem = categoryInfo.data.find((item) => {
      const itemName = item.name || item.title || '';  // Ensure we get name or title
      const resultName = result.name || result.title || '';

      return itemName.trim().toLowerCase() === resultName.trim().toLowerCase();
    });

    if (matchedItem) {
      return {
        image: matchedItem[categoryInfo.imageKey] || null,
        description: matchedItem.description || 'No description available.',
      };
    }
    return { image: null, description: 'No description available.' };  };

  return (
    <div style={{ padding: "0px", fontFamily: "Arial, sans-serif", width: '50%' }}>
      {/* <h1>Star Wars Search</h1> */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Star Wars..."
          style={{ padding: "10px", width: "100%", marginRight: "10px" }}
        />
        <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {results.map((result, index) => {
          const details = getDetailsForResult(result);
          return (
            <div key={index} style={{ margin: "10px 0", display: "flex", alignItems: "center", flexDirection: 'column' }}>
              <Card
              title={result.name || result.title}
              image={details?.image}
              description={details?.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
