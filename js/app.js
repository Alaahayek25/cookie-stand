'use strict';
var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
var allBranch = [];
var totalOfHours = [];
var totalOfTotal = 0;
var table = document.getElementById('table');
var NewBranch = document.getElementById('NewBranch');
function renderHead() {
    var trE1 = document.createElement('tr');
    table.appendChild(trE1);
    var thE1 = document.createElement('th');
    thE1.textContent = '------';
    trE1.appendChild(thE1);
    for (let i = 0; i < workHours.length - 1; i++) {
        totalOfHours.push(0)
        var thE1 = document.createElement('th');
        thE1.textContent = workHours[i];
        trE1.appendChild(thE1);
    }
    var thE1 = document.createElement('th');
    thE1.textContent = 'Daily Total';
    trE1.appendChild(thE1)
}
// this is special function called constructor :
function Branch(location, minCustomer, maxCustomer, averageCookieSales) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.averageCookieSales = averageCookieSales;
    this.AvgCookiesEachHour = [];
    this.sumDailySeals = 0;
    allBranch.push(this)
}
Branch.prototype.getAvgCookiesEachHour = function () {
    for (var i = 0; i < workHours.length - 1; i++) {
        this.AvgCookiesEachHour.push(Math.ceil(getRandomIntInclusive(this.minCustomer, this.maxCustomer) * this.averageCookieSales))
    }
    Branch.prototype.showResult = function () {
        var trE2 = document.createElement('tr');
        table.appendChild(trE2);
        var tdE1 = document.createElement('td');
        tdE1.textContent = this.location;
        trE2.appendChild(tdE1);
        for (let i = 0; i < workHours.length - 1; i++) {
            var tdE1 = document.createElement('td');
            tdE1.textContent = this.AvgCookiesEachHour[i];
            this.sumDailySeals += this.AvgCookiesEachHour[i];
            trE2.appendChild(tdE1);
            totalOfHours[i] += this.AvgCookiesEachHour[i]
        }
        var tdE1 = document.createElement('td');
        tdE1.textContent = this.sumDailySeals;
        trE2.appendChild(tdE1);
        // this is for count total seals in all branches 
        totalOfTotal += this.sumDailySeals
    }
}
//creat a new objects for each branch
var Seattle = new Branch('Seattle', 23, 65, 6.3);
var Tokyo = new Branch('Tokyo', 3, 24, 1.2);
var Dubai = new Branch('Dubai', 11, 38, 3.7);
var Paris = new Branch('Paris', 20, 38, 2.3);
var Lima = new Branch('Lima', 2, 16, 4.6);
function renderMain() {
    for (var i = 0; i < allBranch.length; i++) {
        allBranch[i].getAvgCookiesEachHour();
        allBranch[i].showResult();
        console.log(allBranch[i]);
    }
}
//for render the row of total cookies for each hour && total of total in all branches
function renderFooter() {
    var trTotal = document.createElement('tr');
    trTotal.setAttribute('id','Tfooter')
    table.appendChild(trTotal)
    var tdTotal = document.createElement('td');
    tdTotal.textContent = 'total';
    trTotal.appendChild(tdTotal);
    for (var i = 0; i < workHours.length - 1; i++) {
        var tdE1 = document.createElement('td');
        tdE1.textContent = totalOfHours[i];
        trTotal.appendChild(tdE1);
    }
    var tdE1 = document.createElement('td');
    tdE1.textContent = totalOfTotal;
    trTotal.appendChild(tdE1);
}
NewBranch.addEventListener('submit', function (event) {
    event.preventDefault();
    var LocationValue = event.target.Location.value;
    var MinCstValue = event.target.MinCst.value;
    var MaxCstValue = event.target.MaxCst.value;
    var AvgCustValue = event.target.AvgCust.value;
    var Tfooter = document.getElementById("Tfooter");
    Tfooter.parentNode.removeChild(Tfooter);
    var newshop = new Branch(LocationValue, MinCstValue, MaxCstValue, AvgCustValue);
    newshop.getAvgCookiesEachHour();
    newshop.showResult();
    renderFooter()
})
renderHead()
renderMain()
renderFooter()
/* helper function */
// this function get a random number between two values (min and max) 
function getRandomIntInclusive(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}