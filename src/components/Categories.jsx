import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/categories.css";

const Categories = ({ fetchMovies }) => {
  // array of categories
  const listofMovies = ["popular", "top_rated", "now_playing", "upcoming"];
  return (
    <Tabs>
      {/* TabList to contain the list of categories */}
      <TabList>
        {/* Map through the list of movies to create tabs */}
        {listofMovies.map((listofMovie) => {
          // to remove _ from names and format them into uppercase
          const formattedName = listofMovie.replace(/_/g, " ").toUpperCase();
          return (
            // Create a tab for each category
            <Tab
              key={listofMovie}
              onClick={() => fetchMovies(listofMovie)} // Call the fetchMovies function with the selected category when tab is clicked
            >
              {formattedName} {/* Display the formatted category name */}
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
};

export default Categories;
