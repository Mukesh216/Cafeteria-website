import React from 'react'
import { useState } from 'react';
export const HeartLike = () => {
    const [filled, setFilled] = useState(false);

    const handleClick = () => {
        setFilled(!filled);
    };
    return (
        <span>
            <i
                className={`far fa-heart fs-2 text-danger d-none d-sm-block ${filled ? "fas fa-heart " : ""
                    }`}
                onClick={handleClick}
            ></i>
        </span>
    );
};