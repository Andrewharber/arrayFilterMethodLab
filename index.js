const { stringMatching } = require("expect")

// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers,string){
    let matchingDrivers = drivers.filter(element => element === string || element === string.toLowerCase())
    return matchingDrivers
}

function fuzzyMatch(drivers,string){
    let stringCheck = drivers.filter(drivers => drivers.slice(0, string.length) === string)
    return stringCheck
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

 function matchName(driver,string){
     return driver.filter((driver) => driver.name === string)
 }