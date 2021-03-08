'use strict';
let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let city=[];
city[0]={
  randomCoockiesNumber:[],
  cityName:'Seattle',
  minCust:23,
  maxCust:65,
  avg:6.3,
  total:0,
};
city[1]={
  randomCoockiesNumber:[],
  cityName:'Tokyo',
  minCust:3,
  maxCust:24,
  avg:1.2,
  total:0,
};
city[2]={
  randomCoockiesNumber:[],
  cityName:'Dubai',
  minCust:11,
  maxCust:38,
  avg:3.7,
  total:0,
};
city[3]={
  randomCoockiesNumber:[],
  cityName:'Paris',
  minCust:20,
  maxCust:38,
  avg:2.3,
  total:0,
};
city[4]={
  randomCoockiesNumber:[],
  cityName:'Lima',
  minCust:2,
  maxCust:16,
  avg:4.6,
  total:0,
};
let b=0;
let a=0;
let main=document.getElementById('aa');

function randomCoockies(min,max,element){

  let randomCust= Math.floor(Math.random() * (max - min + 1) + min);
  let avgCoockies = randomCust*city[a].avg;
  let list=document.createElement('li');

  element.appendChild(list);
  list.innerText=time[b]+': '+Math.floor(avgCoockies)+' Coockies';
  city[a].total=city[a].total+Math.floor(avgCoockies);

  return city[a].randomCoockiesNumber.push(Math.floor(avgCoockies));
}

for(let i=0;i<city.length;i++){
  let unOrderlist=document.createElement('ul');

  main.appendChild(unOrderlist);
  unOrderlist.innerText=city[i].cityName;
  a=i;
  // because i want function use the i
  console.log(city[i].cityName);

  for(let ii=0;ii<time.length;ii++){
    b=ii;
    // because i want function use the ii
    randomCoockies(city[i].minCust,city[i].maxCust,unOrderlist);
  }
  let list=document.createElement('li');
  unOrderlist.appendChild(list);
  list.innerText='total: '+city[i].total+' Coockies';


}
