const api = require('novelcovid');

let dataObj = {  
  totalConfirmedCases: null,
  totalConfirmedDeaths: null,
  totalRecovered: null,
  casesToday: null
};  

async function test(){

  const promise = api.countries({country:"USA"})
  let result = await promise;   

  let tcc = result.cases; 
  let tcd = result.deaths;
  let tr = result.recovered;
  let ct = result.todayCases;

  dataObj.totalConfirmedCases = tcc
  dataObj.totalConfirmedDeaths = tcd;
  dataObj.totalRecovered = tr;
  dataObj.casesToday = ct;
  return dataObj
}

test().then(
  module.exports = {
    dataObj,
    test
  }
);

//api.countries({country: "USA"}).then(console.log) 


// async function totalData(result) {
//   let tcc = result.cases; 
//   let tcd = result.deaths;
//   let tr = result.recovered;
//   let ct = result.todayRecovered;

//   setData(dataObj, tcc, tcd, tr, ct); 

//   return dataObj
// };

// function setData(theObject, tcc, tcd, tr, ct){
//   theObject.totalConfirmedCases = tcc; 
//   theObject.totalConfirmedDeaths = tcd;
//   theObject.totalRecovered = tr;
//   theObject.casesToday = ct;
// }
