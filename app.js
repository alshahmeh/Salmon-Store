'use strict';

// Sourced from MDN Web Docs - Math.random
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function Cities(name, minCust, maxCust, averageCookieSale, openTime, closeTime) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookieSale = averageCookieSale;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.hourlyTotal = [];
  this.dailyTotal = 0;
}

Cities.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
    this.dailyTotal += this.hourlyTotal[i];
    console.log(this.hourlyTotal[i]);
  }
};

Cities.prototype.render = function () {
  this.calcCookiesPerHour();
  let tableEl = document.getElementById('dataTable');

  let trElement = document.createElement('tr');
  tableEl.appendChild(trElement);

  let thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (let j = 0; j < this.hourlyTotal.length; j++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyTotal[j];
    trElement.appendChild(tdElement);
  }
  let tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
  tableEl.appendChild(trElement);
};

let seattle = new Cities('Seattle', 23, 65, 6.3, 6, 20);
let tokyo = new Cities('Tokyo', 3, 24, 1.2, 6, 20);
let dubai = new Cities('Dubai', 11, 38, 3.7, 6, 20);
let paris = new Cities('Paris', 20, 38, 2.3, 6, 20);
let lima = new Cities('Lima', 2, 16, 4.6, 6, 20);

let city = [seattle, tokyo, dubai, paris, lima];

for (let k = 0; k < city.length; k++) {
  city[k].calcCookiesPerHour();
}

let tableBody = document.getElementById('dataTable1');

function renderheader() {
  let headerrow = document.createElement('tr');
  let headerstore = document.createElement('th');
  headerstore.textContent = 'Locations';
  headerrow.appendChild(headerstore);
  tableBody.appendChild(headerrow);
  for (let i = 0; i < hours.length; i++) {
    let headerhour = document.createElement('th');
    headerhour.textContent = hours[i];
    headerstore.appendChild(headerhour);
    headerrow.appendChild(headerhour);
  }
  let headertotal = document.createElement('th');
  headertotal.textContent = 'Store Totals';
  headerrow.appendChild(headertotal);
}

renderheader();
for (let i = 0; i < city.length; i++) {
  city[i].render();
}
renderFooter();

function renderFooter() {
  let headerrow = document.createElement('tr');
  tableBody.appendChild(headerrow);
  let tdElement = document.createElement('td');

  tdElement.textContent = 'Daily Total';
  headerrow.appendChild(tdElement);

  let runningTotal;

  for (let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    let total = 0;
    for (let j = 1; j < city.length-1; j++) {
      total += city[i].custPerHourArray[j];
      runningTotal += city[i].custPerHourArray[j];
    }
    tdElement.textContent = total;
    headerrow.appendChild(tdElement);

  }
  let tdElement1 = document.createElement('td');
  tdElement1.textContent = runningTotal;
  headerrow.appendChild(tdElement);
}
