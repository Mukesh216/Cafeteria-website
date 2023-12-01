import React, { useEffect, useState } from "react";
import { saladsItems } from "./MenuList";
import { HeartLike } from "../Favourite";
import { GrCart } from "react-icons/gr";
import HashLoader from "react-spinners/HashLoader";


import "animate.css";

function Salads(props) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        // console.log(`Time to fully render: ${loadTime}ms`);
        setTimeout(() => {
            setLoading(false);
        }, loadTime);

        window.scrollTo(0, 0);
    }, []);


    const { addToCart, cartItems, setCartItems } = props;

    const handleClick = (item) => {
        const itemInCart = cartItems.find((cartItem) => cartItem.name === item.name);
        if (itemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    return (
        <>
            {
                loading ? (
                    <HashLoader className="vh-100 flex justify-center mx-auto" color="#896752" />
                ) :
                    (
                        <div className="mx-auto mt-5 animate__animated animate__fadeIn">
                            <div>
                                <h1
                                    className="fs-1 pt-4 text-center "
                                    style={{
                                        fontFamily: "pacifico",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Salads
                                </h1>
                            </div>

                            <div >
                                {
                                    saladsItems.map((item, index) => (
                                        <div className="row mt-4 justify-content-center" key={index}>
                                            <div className="p-1 col-8">
                                                <div className="d-flex align-items-center mx-2 mx-md-3 mx-lg-4 mx-xl-5">
                                                    <img
                                                        src={item.imageSrc}
                                                        alt={item.alt}
                                                        className="me-lg-4 me-md-4 me-4 rounded-3 custom-image"
                                                    />
                                                    <div className="d-flex flex-column">
                                                        <h3 className="fw-bold" style={{ fontFamily: "Ysabeau Infant" }}>{item.name}</h3>
                                                        <p className="d-none d-lg-block">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-1 col-4 d-flex align-items-center ">
                                                <div className="d-flex justify-content-sm-around  justify-content-between align-items-center w-100">

                                                    <div className="d-flex align-items-center gap-0 gap-sm-5 gap-md-5 gap-lg-5">
                                                        <HeartLike />
                                                        <i className="fa-solid fa-indian-rupee-sign fs-6 fs-sm-4 fs-md-3  ">{item.price}</i>
                                                    </div>

                                                    {/* Button with spacing */}
                                                    <button
                                                        className="p-2 rounded-2 d-flex align-items-center me-3 me-sm-1 px-2 "
                                                        onClick={() => handleClick(item)}
                                                        style={{ fontFamily: "poppins", fontWeight: 600, backgroundColor: "transparent" }}
                                                    >
                                                        <GrCart className="me-2 fs-3 fs-sm-4" />
                                                        <span className="d-none d-lg-block " style={{ fontFamily: "poppins" }}>Add to Order</span>
                                                    </button>

                                                </div>
                                            </div>

                                        </div>
                                    ))

                                }
                            </div>

                        </div>

                    )
            }
        </>
    );
}

export default Salads;
