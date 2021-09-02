var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
    var population = data.filter((ele)=>ele.population<200000);
    console.log(population);
    data.forEach(element => {
        console.log(element.name+" "+element.capital+" "+element.flag);
    });
}