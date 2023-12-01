import React, { useEffect, useState } from "react";

import BreakFast from "./menuItems/breakFast";
import Coffee from "./menuItems/Coffee";
import Tea from "./menuItems/Tea";
import Pastry from "./menuItems/Pastry";
import SandWiches from "./menuItems/SandWiches";
import Salads from "./menuItems/Salads";
import Beverages from "./menuItems/Beverages";

import MenuCarousel from "./MenuCarousel";

import HashLoader from "react-spinners/HashLoader";
import 'animate.css';
import "../App.css";

function Menu(props) {

	const { addToCart, cartItems, setCartItems } = props;

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);

		const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
		console.log(`Time to fully render: ${loadTime}ms`);
		setTimeout(() => {
			setLoading(false);
		}, loadTime);
	}, []);

	const division = [
		{ id: 1, content: <BreakFast addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />, },
		{ id: 2, content: <Coffee addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} /> },
		{ id: 3, content: <Tea addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} /> },
		{ id: 4, content: <Pastry addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} ></Pastry> },
		{ id: 5, content: <Salads addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} ></Salads> },
		{ id: 6, content: <Beverages addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} ></Beverages> },
		{ id: 7, content: <SandWiches addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} ></SandWiches> },
	];

	const [showDiv, setshowDiv] = useState(null);

	const toggleDiv = (id) => {
		setshowDiv(id);
	};

	return (

		<>
			{
				loading ? (
					<HashLoader className="vh-100 flex justify-center mx-auto" color="#896752" />
				) : (

					<div className="menuDiv animate__animated animate__fadeIn p-2" style={{ marginTop: "4rem" }}>
						<div className="container-md w-100 menuList mt-1">
							<div className="pt-2 d-flex justify-content-center ">
								<ul
									className={`nav nav-tabs d-inline-flex ${showDiv ? '' : 'sm:w-50 w-100 text-center flex-column py-5'} py-3  px-4 rounded-4 justify-content-center`}
									style={{
										fontFamily: "Archivo Narrow",
										fontWeight: 600,
										cursor: "pointer",
										backgroundColor: "#fff4e0",
									}}
								>
									<h3 className={`mx-auto mb-5 mt-3 fw-bold ${showDiv ? 'd-none' : ''}`} style={{ textDecoration: "underline " }}>MENU</h3>
									<li
										className="nav-item fs-5 mb-2 sm:mb-0  "
										onClick={() => toggleDiv(1)}
									>
										<a className="nav-link">BREAKFAST</a>
									</li>
									<li className="nav-item fs-5 mb-2 sm:mb-0" onClick={() => toggleDiv(2)}>
										<a className="nav-link">COFFEE</a>
									</li>
									<li className="nav-item fs-5 mb-2 sm:mb-0" onClick={() => toggleDiv(3)}>
										<a className="nav-link">TEA</a>
									</li>
									<li className="nav-item fs-5 mb-2 sm:mb-0" onClick={() => toggleDiv(4)}>
										<a className="nav-link">PASTRIES</a>
									</li>
									<li className="nav-item fs-5 mb-2 sm:mb-0" onClick={() => toggleDiv(5)}>
										<a className="nav-link">SALADS</a>
									</li>
									<li className="nav-item fs-5 mb-2 sm:mb-0" onClick={() => toggleDiv(6)}>
										<a className="nav-link">BEVERAGES</a>
									</li>
									<li className="nav-item fs-5 mb-2 sm:mb-0" onClick={() => toggleDiv(7)}>
										<a className="nav-link">SANDWICHES</a>
									</li>
								</ul>
							</div>
						</div>

						<div
							className="container-md menuList rounded-top-5"
							style={{
								backgroundColor: "#fff4e0",
							}}
						>
							{division.map((div) => (
								<div
									key={div.id}
									style={{ display: showDiv === div.id ? "block" : "none" }}
								>
									{div.content}
								</div>
							))}
						</div>

						<div>
							<MenuCarousel></MenuCarousel>
						</div>
					</div>
				)
			}
		</>
	);
}
export default Menu;
