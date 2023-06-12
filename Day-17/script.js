fetch('https://restcountries.com/v3.1/all').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    console.log(completedata);

    // k = completedata.filter((filt)=>
    //     filt.population < 10000);
    //     console.log(k);
    t= '';
    completedata.forEach((a)=>{

        t += ` <div  class="card"  style="width: 18rem" >
            <img  class="img" src='${a.flags.png}'>
          <h5 type = 'text' class="card-title">${a.name.official}</h5>
          <p type = 'text' id='capital' class="card-text"> Capital:${a.capital}</p>
          <p type = 'text' id='region' class="card-text"> Region:${a.region}</p>
          <p type = 'text' id='cc' class="card-text"> Country Code:${a.cca3}</p>
          <a onclick="alert(' Weather API not Working lattitude: ${a.latlng[0]}  longitude: ${a.latlng[1]}')" href="#" class="btn btn-primary">Click For Weather</a>
        </div>`
      


    })
    document.getElementById('content').innerHTML=t;
})

const pop = document.getElementById('cd');
pop.addEventListener('click',(a)=>{
   alert('Hi BUDDY 🤩!!')
   console.log(pop)
},false)
function fun1(){
    alert('hi${a.region}');
}
// function fun2(){
//     alert('hello');
// }