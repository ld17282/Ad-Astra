import React, { useEffect, useState } from 'react';
import { ReactDOM, createRoot } from 'react-dom/client';
import LaunchTile from './LaunchTile';
import '../style/Launches.scss';

const Launches = () => {

  // HOOKS FOR SETTING LAUNCHES AND WHETHER LAUNCHES HAVE BEEN FETCHED
  const [launches, setLaunches] = useState([]);
  const [fetchedLaunches, setFetchedLaunches] = useState(false);

  // COMBINES ComponentDidMount + ComponentDidUpdate + ComponentWillMount 
  useEffect(() => {
    fetch('http://localhost:1938/upcoming-launches')
      .then((res) => res.json())
      .then((data) => {
        // SET LAUNCHES ARRAY TO DATA RETURNED FROM FETCH REQUEST
        setLaunches(data);
        // SET FETCHED LAUNCHES TO TRUE 
        setFetchedLaunches(true);
      });
  }, []);
  
  // IF FETCH REQUEST FAILS, I.E LAUNCHES IS EMPTY OR FETCHEDLANCHES IS FALSE
  if (!launches) return null;
  if (!fetchedLaunches) return <div>Sorry, no launches found</div>;

  // MAP OBJECTS IN LAUNCHES ARRAY INTO AN ARRAY OF INDIVIDUAL LAUNCH TILES
  const launchTiles = launches.map((launch, i) => {
    return <LaunchTile key={i} info={launch} />;
  });

  return (
    <div>
      <header className="subHeader">
        <ul>
          <li className="upcomingLaunchesHeader">UPCOMING LAUNCHES</li>
          <li className="upcomingLaunchesUnderline">_________</li>
        </ul>
      </header>

      <div className='outterContainer'>
        <div className="launchContainer">{launchTiles}</div>
      </div>
    </div>
  );
};

export default Launches;
