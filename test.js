fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
    .then(response => response.json())
    .then(newData => {
        console.log("here");
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(newData.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        }
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(newData.list[i].main.temp_max - 273.15).toFixed(2) + "°";
        }
        for(i = 0; i<5; i++){
            document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
            newData.list[i].weather[0].icon+".png";
        }
    })


