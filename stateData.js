const api = require('novelcovid');
const { response } = require('express');
const fs = require('fs');
//send this file to the tracker file and put data into state route

// get value selected from DD 
// loop through array to see if there is a match
// if there is a match set the var x = to the value of the DD selected value
// if there is no match then display error message
// the value x will be stored in the api call and return the data that is needed.
// send the data to a text file and return it in the ejs file 
// display the data in the appropriate div

async function x () {
    let selectedValue = "";
    let a = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    for(let i = 0; i < a.length; i++){
        if(a[i] === selectedValue){
            let promise = api.states({state: selectedValue})
            let result =  await promise;
            console.log(result)
        }
    }
}

x();


module.exports 



