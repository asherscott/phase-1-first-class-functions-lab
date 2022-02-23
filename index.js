// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function() {
        return fare ** 2;
    }
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

function selectDifferentDrivers(drivers, array) {
    return array(drivers);
}