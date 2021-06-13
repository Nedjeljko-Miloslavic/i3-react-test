import {Link} from "react-router-dom";
import {useState} from "react";

const Nav = ()=>{
	
	const[newImage, setNewImage] = useState("");
	
	const handleButton = ()=>{
		const pages = document.querySelectorAll("a");
		if(pages[0].style.display==="none"){
			pages[0].style.display = "block";
			pages[1].style.display = "block";
		}else if(window.innerWidth<1000){
			pages[0].style.display = "none";
			pages[1].style.display = "none";
		}
	}
	
	const handleOnclick = (e)=>{
		e.preventDefault();
		console.log(newImage);
		fetch("http://localhost:8000/cars", {
			method:"POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(newImage)
		});
	}
	
	const handleDownloads = ()=>{
		const form = document.querySelector("form");
		if(form.style.visibility==="hidden"){
			form.style.visibility = "visible";
		}else{
			form.style.visibility = "hidden";
		}
	}
	
	window.addEventListener("resize", ()=>{
		const pages = document.querySelectorAll("a");
		if(window.innerWidth>1000){
			pages[0].style.display = "block";
			pages[1].style.display = "block";
		}
	});
	
	return(
		<nav>
			<div className="whole">
				<div className="title">
					<p className="aplikacija">Aplikacija sa slikama</p>
					<div className="button" onClick={handleButton}>ˇ</div>
				</div>
				<Link to="/" className="navigate_to" onClick={handleButton}>Prva stranica</Link>
				<img className="logo" src="images/logo.svg" alt="logo" />
				<Link to="/secondpage" className="navigate_to" onClick={handleButton}>Druga stranica</Link>
				<div className="downloads" onClick={handleDownloads}>Downloads</div>
			</div>
			<form>
				<input placeholder="submit image url" type="text" onChange={(e)=>setNewImage({location:e.target.value})}/>
				<button onClick={handleOnclick}>Add</button>
			</form>
		</nav>
	);
}

export default Nav;