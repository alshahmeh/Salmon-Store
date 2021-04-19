'use strict';


let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function Cities(name, minCustomer, maxCustomer, averageCookieSale, openTime, closeTime) {
  this.name = name;
  this.minCust = minCustomer;
  this.maxCust = maxCustomer;
  this.averageCookieSale = averageCookieSale;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.hourlyTotal = [];
  this.dailyTotal = 0;
}
//the number 14 here is the number of work hours
Cities.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
    this.dailyTotal += this.hourlyTotal[i];
    console.log(this.hourlyTotal[i]);
  }
};

Cities.prototype.render = function () {
  this.calcCookiesPerHour();
  const tableEl = document.getElementById('dataTable');

  const trElement = document.createElement('tr');
  tableEl.appendChild(trElement);

  const thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (let j = 0; j < this.hourlyTotal.length; j++) {
    const tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyTotal[j];
    trElement.appendChild(tdElement);
  }
  const tdElement1 = document.createElement('td');
  tdElement1.textContent = this.dailyTotal;
  trElement.appendChild(tdElement1);
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

const tableBody = document.getElementById('tableBody');

function renderheader() {
  const headerrow = document.createElement('tr');
  const headerstore = document.createElement('th');
  headerstore.textContent = 'Locations';
  headerrow.appendChild(headerstore);
  tableBody.appendChild(headerrow);
  for (let i = 0; i < hours.length; i++) {
    let headerhour = document.createElement('th');
    headerhour.textContent = hours[i];
    headerstore.appendChild(headerhour);
    headerrow.appendChild(headerhour);
  }
  const headertotal = document.createElement('th');
  headertotal.textContent = 'Store Totals';
  headerrow.appendChild(headertotal);
}

renderheader();
for (let i = 0; i < city.length; i++) {
  city[i].render();
}
renderFooter();

function renderFooter() {
  const headerrow1 = document.createElement('tr');

  const tdElement2 = document.createElement('td');

  tdElement2.textContent = 'Daily Total';
  headerrow1.appendChild(tdElement2);
  tableBody.appendChild(headerrow1);
  let runningTotal;

  for (let i = 0; i < hours.length; i++) {
    const tdElement3 = document.createElement('td');
    let total = 0;
    for (let j = 0; j < city.length ; j++) {
      total += city[i].custPerHourArray[j];
      runningTotal += city[i].custPerHourArray[j];
    }
    tdElement3.textContent = total;
    headerrow1.appendChild(tdElement3);

  }
  const tdElement4 = document.createElement('td');
  tdElement4.textContent = runningTotal;
  headerrow1.appendChild(tdElement4);
}
