import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/categories.css";

const Categories = ({ fetchMovies }) => {
  // array of categories
  const listofMovies = ["popular", "top_rated", "now_playing", "upcoming"];
  return (
    <Tabs>
      <TabList>
        <div className="tab-panel-content">
          <Tab>
            {listofMovies.map((listofMovie) => {
              // to remove _ from names and format them into uppercase
              const formattedName = listofMovie
                .replace(/_/g, " ")
                .toUpperCase();
              return (
                <button
                  key={listofMovie}
                  onClick={() => fetchMovies(listofMovie)}
                >
                  {formattedName}
                </button>
              );
            })}
          </Tab>
        </div>
      </TabList>

      <TabPanel></TabPanel>
    </Tabs>

    
  );
};

export default Categories;
