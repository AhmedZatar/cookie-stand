'use strict';
let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let city=[];
city[0]={
  arr:[],
  cityName:'Seattle',
  minCust:23,
  maxCust:65,
  avg:6.3,
  total:0,
};
city[1]={
  arr:[],
  cityName:'Tokyo',
  minCust:3,
  maxCust:24,
  avg:1.2,
  total:0,
};
city[2]={
  arr:[],
  cityName:'Dubai',
  minCust:11,
  maxCust:38,
  avg:3.7,
  total:0,
};
city[3]={
  arr:[],
  cityName:'Paris',
  minCust:20,
  maxCust:38,
  avg:2.3,
  total:0,
};
city[4]={
  arr:[],
  cityName:'Lima',
  minCust:2,
  maxCust:16,
  avg:4.6,
  total:0,
};
let b=0;
let a=-1;
let main=document.getElementById('aa');

function avgCockies(min,max,unOrderlist){

  let avgCust= Math.floor(Math.random() * (max - min + 1) + min);
  let avgCockies = avgCust*city[a].avg;
  let list=document.createElement('li');

  unOrderlist.appendChild(list);
  list.innerText=time[b]+': '+Math.floor(avgCockies);
  city[a].total=city[a].total+Math.floor(avgCockies);

  return city[a].arr.push(Math.floor(avgCockies));
}

for(let i=0;i<city.length;i++){
  let unOrderlist=document.createElement('ul');

  main.appendChild(unOrderlist);
  unOrderlist.innerText=city[i].cityName;
  a=i;
  console.log(city[i].cityName);

  for(let ii=0;ii<time.length;ii++){
    b=ii;

    avgCockies(city[i].minCust,city[i].maxCust,unOrderlist);
  }
  let list=document.createElement('li');
  unOrderlist.appendChild(list);
  list.innerText='total: '+city[i].total;


}




