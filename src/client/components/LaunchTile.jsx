import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';

const LaunchTile = ({ info }) => {
  const {
    launchViewDateMonth,
    launchViewDateDay,
    launchViewName,
    launchViewDate,
    launchViewProvider,
    launchViewVehicle,
    launchViewPad,
    launchViewResult,
  } = info;

  // HOOK TO DETERMINE WHEN CARD IS FLIPPED
  const [isFlipped, setIsFlipped] = useState(false);

  // HANDLER FUNCTION FOR ONCLICK HANDLER 
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      className="ReactCardFlip"
    >
      <div className="frontOfCard">
        <article className="tile launchTile" onClick={handleClick}>
          <div className="tileHeadContainer">
            <ul className="tileDateHeader">
              <li>{launchViewDateMonth}</li>
              <li>{launchViewDateDay}</li>
            </ul>
          </div>
          {/* CONDITIONAL RENDERING FOR VEHICLE PICTURES */}
          <div>
            <div className="Falcon9">
              {launchViewVehicle === 'Falcon 9' && (
                <img src="http://localhost:1938/assets/vehicles/Falcon9.png"></img>
              )}
            </div>
            <div className="FalconHeavy">
              {launchViewVehicle === 'Falcon Heavy' && (
                <img src="http://localhost:1938/assets/vehicles/FalconHeavy.png"></img>
              )}
            </div>
            <div className="Starship">
              {launchViewVehicle === 'Starship (BFR)' && (
                <img src="http://localhost:1938/assets/vehicles/SuperHeavy.png"></img>
              )}
            </div>
            <div className="SuperHeavy">
              {launchViewVehicle === 'Super Heavy / Starship Prototype' && (
                <img src="http://localhost:1938/assets/vehicles/SuperHeavy.png"></img>
              )}
            </div>
          </div>
        </article>
      </div>

      <div className="backOfCard">
        <article className="tile launchTile" onClick={handleClick}>
          <div className="tileHeadContainer">
            <div>
              <ul className="tileDateHeader">
                <li>{launchViewDateMonth}</li>
                <li>{launchViewDateDay}</li>
              </ul>
            </div>
            <div className="link">
            </div>
          </div>
          <ul className="tileDetailsList">
            <li className="tileDetailHeader">LAUNCH NAME</li>
            <li className="tileDetail">{launchViewName}</li>
            <li className="tileDetailHeader">LAUNCH DATE</li>
            <li className="tileDetail">{launchViewDate}</li>
            <li className="tileDetailHeader">PROVIDER</li>
            <li className="tileDetail">{launchViewProvider}</li>
            <li className="tileDetailHeader">LAUNCH VEHICLE</li>
            <li className="tileDetail">{launchViewVehicle}</li>
            <li className="tileDetailHeader">LAUNCH PAD</li>
            <li className="tileDetail">{launchViewPad}</li>
            <li className="tileDetailHeader">RESULT</li>
            <li className="tileDetail">{launchViewResult}</li>
          </ul>
        </article>
      </div>
    </ReactCardFlip>
  );
};

export default LaunchTile;
