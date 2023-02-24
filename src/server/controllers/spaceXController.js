const fetch = require('node-fetch');
const models = require('../models/launchModel');
const spaceXController = {};

// MIDDLEWARE TO GET FIRST 25 SPACEX LAUNCHES HERE
spaceXController.getLaunches = (req, res, next) => {
  // MAKE A FETCH REQUEST TO THE API
  fetch(
    `https://fdo.rocketlaunch.live/json/launches?key=${process.env.SPACEX_API_KEY}&provider_id=1`,
    { headers: { Authentication: 'Bearer {token}' } }
  )
    // PARSE RESPONSE BODY TEXT AS JSON
    .then((data) => data.json())
    // ALGORITHM TO PARSE DATA INTO CORRECT FORM
    .then((data) => {
      // DECLARE EMPTY LAUNCHES ARRAY TO POPULATE WITH LAUNCH OBJECTS
      const launches = [];

      // ITERATE THROUGH AND ASSIGN CORRECT SYNTAX TO DATA
      for (let i = 0; i < 25; i++) {
        // DECLARE EMPTY RESULT STATUS STRING TO STORE STATUS ONCE CONVERTED
        let resultStatus = '';

        // CONVERT NUMBER RESULTS TO CORRESPONDING STRINGS
        data.result[i].result === -1
          ? (resultStatus = 'Not Set')
          : data.result[i].result === 0
          ? (resultStatus = 'Failure')
          : data.result[i].result === 1
          ? (resultStatus = 'Success')
          : data.result[i].result === 2
          ? (resultStatus = 'Partial Failure')
          : (resultStatus = 'In-Flight Abort (Crewed)');

        // CONVERT DATE_STR TO NUMBER
        let date = data.result[i].date_str; // JUN 25 or Q2 2022
        let date_month;
        let date_day;

        // COVERT THE DAY
        function convertDateDay(date) {
          // DECLARE AN EMPTY STRIG TO HOLD THE DAY PORTION OF THE DAYE
          let date_day = '';

          // CONDITIONAL TO CHECK IF THE YEAR IS INCLUDED. THIS IS TYPICAL
          // WHEN A LAUNCH DATE HAS NOT BEEN SELECTED YET.
          if (date.includes('2023')) {
            date_day = "23'";
          }

          // CONDITIONAL TO CHECK IF A FULL DATE IS PROVIDED EX: 07032023
          else if (date.length === 7) {
            // ITTERATE THROUGH THE LAST TWO NUMBERS AND CONCAT THE YEAR
            // EX: 2023 --> 23
            for (let i = 5; i < date.length; i++) {
              date_day = date_day.concat(date[i]);
            }
            // ADD APOSTROPHE TO END OF DATE --> 23' FOR THE YEAR
            date_day = date_day.concat("'");
          }
          // WHEN FULL DAYE ISN'T PROVIDED  
          else {
            // BUILD OUT THE DATE
            for (let i = 4; i < date.length; i++) {
              date_day = date_day.concat(date[i]);
            }
          }
          // RETURN THE FINAL DATE IN CORRECT FORM 
          return date_day;
        }

        // INVOKE FUNCTION TO GET THE DATE_DAY
        date_day = convertDateDay(date);

        // CONVERT THE MONTH
        date.includes('Jan')
          ? (date_month = '01')
          : date.includes('Feb')
          ? (date_month = '02')
          : date.includes('Mar')
          ? (date_month = '03')
          : date.includes('Apr')
          ? (date_month = '04')
          : date.includes('May')
          ? (date_month = '05')
          : date.includes('Jun')
          ? (date_month = '06')
          : date.includes('Jul')
          ? (date_month = '07')
          : date.includes('Aug')
          ? (date_month = '08')
          : date.includes('Sep')
          ? (date_month = '09')
          : date.includes('Oct')
          ? (date_month = '10')
          : date.includes('Nov')
          ? (date_month = '11')
          : date.includes('Dec')
          ? (date_month = '12')
          : date.includes('Q1')
          ? (date_month = 'Q1')
          : date.includes('Q2')
          ? (date_month = 'Q2')
          : date.includes('Q3')
          ? (date_month = 'Q3')
          : date.includes('Q4')
          ? (date_month = 'Q4')
          : (date_month = 'TBD');

        // PUSH LAUNCH OBJECT INTO LAUNCH ARRAY
        launches.push({
          id: data.result[i].id,
          launchViewDateMonth: date_month,
          launchViewDateDay: date_day,
          launchViewName: data.result[i].name,
          launchViewDate: data.result[i].date_str,
          launchViewProvider: data.result[i].provider.name,
          launchViewVehicle: data.result[i].vehicle.name,
          launchViewPad: data.result[i].pad.location.name,
          launchViewResult: resultStatus,
          launchViewT0: data.result[i].weather_icon,
        });

        // ADD NEW LAUNCH OBJECT TO THE DATABASE
        const newLaunch = new models.Launch({
          id: data.result[i].id,
          launchViewDateMonth: date_month,
          launchViewDateDay: date_day,
          launchViewName: launches[i].launchViewName,
          launchViewDate: launches[i].launchViewDate,
          launchViewProvider: launches[i].launchViewProvider,
          launchViewVehicle: launches[i].launchViewVehicle,
          launchViewPad: launches[i].launchViewPad,
          launchViewResult: resultStatus,
          launchViewT0: launches[i].launchViewT0,
        });
        newLaunch.save();
      }

      // SAVE LAUNCH ARRAY ON RES.LOCALS TO BE ACCESSED IN ROUTER.
      res.locals.launches = launches;

      // RETURN NEXT
      return next();
    })
    // HANDLE ERRORS
    .catch((err) => {
      return next({
        log: `spaceXController.getLaunches ERROR: ${
          typeof err === 'object' ? JSON.stringify(err) : err
        }`,
        message: {
          err: 'Error occured in spaceXController.getLaunches. Check server logs for more details',
        },
      });
    });
};

// EXPORT THE CONTROLLER HERE
module.exports = spaceXController;
