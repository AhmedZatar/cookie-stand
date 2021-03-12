'use strict';
let time=[' ','6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','Daily Location Total'];
let total=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let city=[];
let TotalDailyLocationTotal=0;
function City(cityName,minCust,maxCust,avg){
  this.cityName=cityName;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avg=avg;
  this.randomCoockies=function(){
    let randomCust= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    let avgCoockies = Math.floor(randomCust*this.avg);
    return avgCoockies;
  };
}
let c=5;
let form=document.getElementById('newRowTable');
form.addEventListener('submit',function(event){
  event.preventDefault();
  let cityName=event.target.cityName.value;
  let minCust=parseInt(event.target.minCust.value);
  let maxCust=parseInt(event.target.maxCust.value);
  let avg=parseFloat(event.target.avg.value);
  let main=document.getElementById('aa');
  main.removeChild(main.childNodes[3]);
  console.log(main.childNodes);
  total=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  TotalDailyLocationTotal=0;
  for(let i=c;i<c+1;i++){
    city[c]= new City(cityName,minCust,maxCust,avg);


    loopStart();
  }
  c++;
}
);
loopStart();
function loopStart(){
  city[0]= new City('Seattle',23,65,6.3);
  city[1]= new City('Tokyo',3,24,1.2);
  city[2]= new City('Dubai',11,38,3.7);
  city[3]= new City('Paris',20,38,2.3);
  city[4]= new City('Lima',2,16,4.6);
  let main=document.getElementById('aa');
  let table=document.createElement('table');
  let tr=document.createElement('tr');
  main.appendChild(table);
  table.appendChild(tr);
  for(let i=0;i<time.length;i++){
    let th=document.createElement('th');
    tr.appendChild(th);
    th.innerText=time[i];
  }

  for(let ii=0;ii<city.length;ii++){
    let tr2=document.createElement('tr');
    table.appendChild(tr2);
    let a=ii;
    let DailyLocationTotal=0;
    for(let i=0;i<time.length;i++){
      let td=document.createElement('td');
      tr2.appendChild(td);
      if(i===0){
        td.innerText=city[a].cityName;
      }else if(i>0 && i<time.length-1){
        let randomCoockies=city[a].randomCoockies();
        td.innerText=randomCoockies;
        DailyLocationTotal=DailyLocationTotal+randomCoockies;
        TotalDailyLocationTotal=TotalDailyLocationTotal+randomCoockies;
        total[i]=total[i]+randomCoockies;
      }else{
        td.innerText=DailyLocationTotal;
      }
    }
  }
  let tr3=document.createElement('tr');
  table.appendChild(tr3);
  for(let i=0;i<time.length;i++){
    let th2=document.createElement('th');
    tr3.appendChild(th2);
    if(i===0){
      th2.innerText='Total';
    }else if(i>0 && i<time.length-1){

      th2.innerText=total[i];
    }else{
      th2.innerText=TotalDailyLocationTotal;
    }
  }
}

