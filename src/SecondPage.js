import {Lorem} from "./Lorem";
import {useState, useEffect} from "react";
const SecondPage = ()=>{
	
	const [offsetY, setOffsetY] = useState(0);
	const fullHeight = document.documentElement.scrollHeight;
	const fullWidth = window.innerWidth;
	const img_size = fullWidth/10;
	const screenHeight = window.innerHeight;
	const difference = fullHeight-screenHeight;
	
	
	let animation = "none";
	if(offsetY>difference-img_size+20){
		animation = "flip 2s ease-in-out";
	}
	
	useEffect(()=>{
		window.addEventListener("scroll", ()=>{
			setOffsetY(window.pageYOffset);
		});
	},[]);
	return (
		<div className="second_page">
			<h2>Druga stranica</h2>
			<div className="nature_container">
				<div className="three_images">
					<p>{Lorem}</p>
					<div className="images" >
						<img alt="nature" src="images/nature1.jpg" style={{animation:`${animation}`}}/>
						<img alt="nature" src="images/nature2.jpg" style={{animation:`${animation}`}}/>
						<img alt="nature" src="images/nature3.jpg" style={{animation:`${animation}`}}/>
					</div>
				</div>
				<div className="one_image">
					<img alt="img" src="images/nature1.jpg"/>
					<p>{Lorem.slice(0,30)}</p>
					<p>{Lorem.slice(0,100)}</p>
					<p>{Lorem.slice(0,30)}</p>
					<p>{Lorem.slice(0,130)}</p>
				</div>
			</div>
		</div>
		
		
	);
}

export default SecondPage;