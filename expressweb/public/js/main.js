const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById("submitBtn")

const city_name = document.getElementById('city_name');
const temp_real_val= document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer')

const getinfo  = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value;
    // let url =`https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=69b9ad1962ce706e46e2b5f3bf0cc68b`

    if (cityVal == " "){
        city_name.innerText = `Please write the name before the search `
        datahide.classList.add('data_hide')
    }
    else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=69b9ad1962ce706e46e2b5f3bf0cc68b`
            const resp = await fetch(url);
            const data = await resp.json();
            // console.log(data);
            const arrData = [data]

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData.main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny or cloudy 
            if  (tempMood == clear ) {
                temp_status.innerHTML=
                "<i class='fas fa-sun ' style='color #eccc68;'></>"
            }
            else if (tempMood == clouds ) {
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color #f1f2f6;'></>"
            }
            else if (tempMood == rainy ) {
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color #a4b0be;'></>"
            }
            else {
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color #f1f2f6;'></>"
            }  
            datahide.classList.remove('data_hide')   
        
        }catch {
            city_name.innerText = `Please enter city name properly`
            datahide.classList.add('data_hide')
        }



    }

}



submitBtn.addEventListener('click' ,getinfo);