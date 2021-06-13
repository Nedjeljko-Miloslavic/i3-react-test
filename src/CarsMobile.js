import {useState} from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

const CarsMobile = ({cars})=>{
	const [current, setCurrent] = useState(0);
	
	const previous = ()=>{
		setCurrent(current===0?cars.length-1:current-1);
	}
	const next = ()=>{
		setCurrent(current===cars.length-1?0:current+1);
	}
	
	return(
		<div className="cars_container_mobile">
			<FaArrowAltCircleLeft className="arrow_left" onClick={previous}/>
			<FaArrowAltCircleRight className="arrow_right" onClick={next}/>
			<div className="car">
				<img className="car_img" alt="car" src={cars[current].location}/>
				
			</div>
			
		</div>
	);
}

export default CarsMobile;