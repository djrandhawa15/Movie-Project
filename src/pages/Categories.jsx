import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/categories.css';

const Categories= ({ fetchMovies }) =>  {

    const listofMovies = [ "popular", "top_rated", "now_playing", "upcoming"];
    return (
      <Tabs>
                <TabList>
                <div className="tab-panel-content">
                  <Tab>
                    {listofMovies.map((listofMovie) => (
                    <button  key={listofMovie} onClick={() => fetchMovies(listofMovie)}>{listofMovie}</button>
                  ))}
                  </Tab>
                    </div>
                </TabList>

                <TabPanel>
                   
                    
                </TabPanel>
      </Tabs>


      // <nav>
      //   <ul>
      //     {listofMovies.map((listofMovie) => (
      //       <li key={listofMovie}>
      //         <button onClick={() => fetchMovies(listofMovie)}>{listofMovie}</button>
      //         </li>
      //     ))}
      //   </ul>
  
      // </nav>
  
    )
}

export default Categories