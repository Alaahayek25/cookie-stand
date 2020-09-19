'use strict';

var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var seattle = {
    location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    averageCookieSales: 6.3,
    AvgCookiesEachHour: [],
    sumDailySeals: 0,

    getAvgCookiesEachHour: function () {
        for (var i = 0; i < workHours.length - 1; i++) {
            this.AvgCookiesEachHour.push(Math.ceil(getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.averageCookieSales))
        }
    },

    showResult: function () {
        var SeattleDiv = document.getElementById('Seattle');
        var paragraph = document.createElement('p');
        SeattleDiv.appendChild(paragraph)

        paragraph.textContent = this.location;

        var ulE1 = document.createElement('ul');
        SeattleDiv.appendChild(ulE1)
        // 6am: 16 cookies
        for (var ii = 0; ii < workHours.length - 1; ii++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1)
            this.sumDailySeals += this.AvgCookiesEachHour[ii]
            liE1.textContent = `${workHours[ii]}: ${this.AvgCookiesEachHour[ii]} cookies`
        }
        var liE1 = document.createElement('li');
        ulE1.appendChild(liE1)
        liE1.textContent = `Total: ${this.sumDailySeals} cookies`
    }

}

seattle.getAvgCookiesEachHour()
console.log(seattle.AvgCookiesEachHour);
seattle.showResult()
console.log(seattle.sumDailySeals);
//////////////////////////////////////////////////////////
var tokyo = {
    location: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    averageCookieSales: 1.2,
    AvgCookiesEachHour: [],
    sumDailySeals: 0,

    getAvgCookiesEachHour: function () {
        for (var i = 0; i < workHours.length - 1; i++) {
            this.AvgCookiesEachHour.push(Math.ceil(getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.averageCookieSales))
        }
    },

    showResult: function () {
        var SeattleDiv = document.getElementById('Tokyo');
        var paragraph = document.createElement('p');
        SeattleDiv.appendChild(paragraph)

        paragraph.textContent = this.location;

        var ulE1 = document.createElement('ul');
        SeattleDiv.appendChild(ulE1)
        // 6am: 16 cookies
        for (var ii = 0; ii < workHours.length - 1; ii++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1)
            this.sumDailySeals += this.AvgCookiesEachHour[ii]
            liE1.textContent = `${workHours[ii]}: ${this.AvgCookiesEachHour[ii]} cookies`
        }
        var liE1 = document.createElement('li');
        ulE1.appendChild(liE1)
        liE1.textContent = `Total: ${this.sumDailySeals} cookies`
    }

}

tokyo.getAvgCookiesEachHour()
console.log(tokyo.AvgCookiesEachHour);
tokyo.showResult()
console.log(tokyo.sumDailySeals);
//////////////////////////////////////////////////////////
var dubai = {
    location: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    averageCookieSales: 3.7,
    AvgCookiesEachHour: [],
    sumDailySeals: 0,

    getAvgCookiesEachHour: function () {
        for (var i = 0; i < workHours.length - 1; i++) {
            this.AvgCookiesEachHour.push(Math.ceil(getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.averageCookieSales))
        }
    },

    showResult: function () {
        var SeattleDiv = document.getElementById('Dubai');
        var paragraph = document.createElement('p');
        SeattleDiv.appendChild(paragraph)

        paragraph.textContent = this.location;

        var ulE1 = document.createElement('ul');
        SeattleDiv.appendChild(ulE1)
        // 6am: 16 cookies
        for (var ii = 0; ii < workHours.length - 1; ii++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1)
            this.sumDailySeals += this.AvgCookiesEachHour[ii]
            liE1.textContent = `${workHours[ii]}: ${this.AvgCookiesEachHour[ii]} cookies`
        }
        var liE1 = document.createElement('li');
        ulE1.appendChild(liE1)
        liE1.textContent = `Total: ${this.sumDailySeals} cookies`
    }

}

dubai.getAvgCookiesEachHour()
console.log(dubai.AvgCookiesEachHour);
dubai.showResult()
console.log(dubai.sumDailySeals);
//////////////////////////////////////////////////////////
var paris = {
    location: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    averageCookieSales: 2.3,
    AvgCookiesEachHour: [],
    sumDailySeals: 0,

    getAvgCookiesEachHour: function () {
        for (var i = 0; i < workHours.length - 1; i++) {
            this.AvgCookiesEachHour.push(Math.ceil(getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.averageCookieSales))
        }
    },

    showResult: function () {
        var SeattleDiv = document.getElementById('Paris');
        var paragraph = document.createElement('p');
        SeattleDiv.appendChild(paragraph)

        paragraph.textContent = this.location;

        var ulE1 = document.createElement('ul');
        SeattleDiv.appendChild(ulE1)
        // 6am: 16 cookies
        for (var ii = 0; ii < workHours.length - 1; ii++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1)
            this.sumDailySeals += this.AvgCookiesEachHour[ii]
            liE1.textContent = `${workHours[ii]}: ${this.AvgCookiesEachHour[ii]} cookies`
        }
        var liE1 = document.createElement('li');
        ulE1.appendChild(liE1)
        liE1.textContent = `Total: ${this.sumDailySeals} cookies`
    }

}

paris.getAvgCookiesEachHour()
console.log(paris.AvgCookiesEachHour);
paris.showResult()
console.log(paris.sumDailySeals);
//////////////////////////////////////////////////////////
var lima = {
    location: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    averageCookieSales: 4.6,
    AvgCookiesEachHour: [],
    sumDailySeals: 0,

    getAvgCookiesEachHour: function () {
        for (var i = 0; i < workHours.length - 1; i++) {
            this.AvgCookiesEachHour.push(Math.ceil(getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.averageCookieSales))
        }
    },

    showResult: function () {
        var SeattleDiv = document.getElementById('Lima');
        var paragraph = document.createElement('p');
        SeattleDiv.appendChild(paragraph)

        paragraph.textContent = this.location;

        var ulE1 = document.createElement('ul');
        SeattleDiv.appendChild(ulE1)
        // 6am: 16 cookies
        for (var ii = 0; ii < workHours.length - 1; ii++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1)
            this.sumDailySeals += this.AvgCookiesEachHour[ii]
            liE1.textContent = `${workHours[ii]}: ${this.AvgCookiesEachHour[ii]} cookies`
        }
        var liE1 = document.createElement('li');
        ulE1.appendChild(liE1)
        liE1.textContent = `Total: ${this.sumDailySeals} cookies`
    }

}

lima.getAvgCookiesEachHour()
console.log(lima.AvgCookiesEachHour);
lima.showResult()
console.log(lima.sumDailySeals);

/* helper function */
// this function get a random number between two values (min and max) 
function getRandomIntInclusive(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}
