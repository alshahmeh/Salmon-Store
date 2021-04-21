'use strict';
let workHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
function randomCust(minCustsPerHour, maxCustsPerHour)
{ return Math.floor(Math.random() * (maxCustsPerHour - minCustsPerHour + 1) + (maxCustsPerHour - minCustsPerHour)); }
let Seattle = {
  name: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  calcCookiesPerHour: [],
  calcAllCookies: 0,
  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },
  render: function () {
    const parentElement=document.getElementById('sales');
    const article=document.createElement('article');
    parentElement.appendChild(article);
    const h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);
    const ul=document.createElement('ul');
    article.appendChild(ul);
    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }
    const li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);
  }
};
let Tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  calcCookiesPerHour: [],
  calcAllCookies: 0,
  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },
  render: function () {
    const parentElement=document.getElementById('sales');
    const article=document.createElement('article');
    parentElement.appendChild(article);
    const h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);
    const ul=document.createElement('ul');
    article.appendChild(ul);
    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }
    const li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);
  }
};let Dubai = {
  name: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  calcCookiesPerHour: [],
  calcAllCookies: 0,
  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },
  render: function () {
    const parentElement=document.getElementById('sales');
    const article=document.createElement('article');
    parentElement.appendChild(article);
    const h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);
    const ul=document.createElement('ul');
    article.appendChild(ul);
    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }
    const li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);
  }
};
let Paris = {
  name: 'Paris',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  calcCookiesPerHour: [],
  calcAllCookies: 0,
  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },
  render: function () {
    const parentElement=document.getElementById('sales');
    const article=document.createElement('article');
    parentElement.appendChild(article);
    const h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);
    const ul=document.createElement('ul');
    article.appendChild(ul);
    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }
    const li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);
  }
};
let Lima = {
  name: 'Lima',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  calcCookiesPerHour: [],
  calcAllCookies: 0,
  calcCookiesPurchasePerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      let cookiesPerHour = Math.ceil(this.avgCookiesPerCust * randomCust(this.minCustPerHour, this.maxCustPerHour));
      this.calcCookiesPerHour.push(cookiesPerHour);
      this.calcAllCookies += cookiesPerHour;
      console.log(`${workHours[i]}  :  ${cookiesPerHour}`);
    }
  },
  render: function () {
    const parentElement=document.getElementById('sales');
    const article=document.createElement('article');
    parentElement.appendChild(article);
    const h1=document.createElement('h1');
    h1.textContent=this.name;
    article.appendChild(h1);
    const ul=document.createElement('ul');
    article.appendChild(ul);
    for (let a = 0; a < workHours.length; a++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${workHours[a]}  :  ${this.calcCookiesPerHour[a]} cookies`;
    }
    const li1=document.createElement('li');
    li1.textContent=`total : ${this.calcAllCookies} cookies`;
    ul.appendChild(li1);
  }
};
Seattle.calcCookiesPurchasePerHour();
Seattle.render();
Tokyo.calcCookiesPurchasePerHour();
Tokyo.render();
Dubai.calcCookiesPurchasePerHour();
Dubai.render();
Paris.calcCookiesPurchasePerHour();
Paris.render();
Lima.calcCookiesPurchasePerHour();
Lima.render();
