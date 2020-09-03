const api = require('novelcovid');
const express = require('express');
const ejs = require('ejs')
const { json } = require('express');
const helper = require('./helper');
const { test, dataObj } = require('./helper');
const stateData = require('./stateData');
const { gippy } = require('./stateData');

//const { totalData, test, index_data } = require('./helper');

const app = express();

//register view engine
app.set('view engine', 'ejs');

app.listen(3000);

  api.settings({
    baseUrl: 'https://disease.sh'
});

//------------------------------------------------------------------------

//-------------------------------------------------------------------------

let x = "";

console.log("--- server is running ---")
//blog routes
app.get('/', (req, res) => {
    res.redirect('/home');
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index', {
        helperTCC: dataObj.totalConfirmedCases, 
        helperTCD: dataObj.totalConfirmedDeaths,
        helperTR: dataObj.totalRecovered,
        helperCT: dataObj.casesToday
    }  );
})

app.get('/states', (req, res) => {
    res.render('states', {});
})

//command from novel covid for timeline of US cases, deaths, recoveries by day
//api.historical.countries({country: 'USA'}).then(console.log)
app.get('/timeline', (req, res) => {
    res.render('timeline');
})

//404 page
app.use((req, res) => {
    res.status(404).render('404');
});



