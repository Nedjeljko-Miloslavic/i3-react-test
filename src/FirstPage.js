import {useEffect, useState} from "react";
import {SliderData} from "./SliderData";
import CarsDesktop from "./CarsDesktop";
import CarsMobile from "./CarsMobile";

const FirstPage = ()=>{
	const [cars, setCars] = useState(null);
	
	useEffect(()=>{
		fetch("http://localhost:8000/cars")
		.then(res=>{
			return res.json();
		})
		.then((data)=>{
			if(data.length){
				setCars(data);
			}else{
				document.querySelector(".cars_container_mobile").style.display = "block";
			}
		})
		.catch(err=>{
			console.log(err);
		});
	},[]);
	
	
	return (
		<>
			<h2 className="cars_h2">Prva stranica</h2>
			<CarsDesktop cars={cars}/>
			<CarsMobile cars={SliderData}/>
		</>
	);
}

export default FirstPage;