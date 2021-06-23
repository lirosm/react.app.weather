import react from "react";
import axios from "axios";
import Loader from "react-loader-spinner";


export default function weather(props) {

    function handleResponse(response) {
alert(`the weather in ${response.data.name} is ${response.data.main.temp}degrees Celcius`)
    }
     let apiKey = "c898564bae75feba5b1af523cf4a1211";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
   
     axios.get(apiUrl).then(handleResponse);
     return (
           <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      />
     );


     return <h2>Hello from weather</h2>

}