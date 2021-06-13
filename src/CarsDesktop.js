import {useState} from "react";

const CarsGalery = ({cars})=>{
	
	const [carClicked, setCarClicked] = useState(null);
	
	const styleNormal = {
			zIndex:"0",
			animation:"none"
	};
	const styleBig = {
			zIndex:"1",
			position:"absolute",
			top:"30vw",
			left:"30vw",
			animation:"grow 2s ease-in-out forwards"
	};
	
	const handleOnclick = (key)=>{
		setCarClicked(key);
		const close = document.querySelectorAll(`.car:nth-child(${key})`)[0].childNodes[1];
		close.style.visibility  = "visible";
	}
	const handleClose = (e)=>{
		setTimeout(()=>{
			setCarClicked(null);
			e.target.style.visibility = "hidden";
		},50);
		
		
	}
	
	
	return(
		<div className="cars_container">
			{cars && cars.map((car)=>{
				return (
					<div className="car" key={car.id} style={car.id===carClicked?styleBig:styleNormal} onClick={()=>handleOnclick(car.id)}>
						<img alt="car" className="car_img" src={car.location}/>
						<div className="close" onClick={handleClose}>Close</div>
					</div>
				);
			})}
		</div>
	);
}

export default CarsGalery;