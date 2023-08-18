import React, { useState } from 'react';

const QuantityContext = React.createContext({
  quantity: 0,
  setQuantity: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
});

export { QuantityContext };

export const CartSpan = () => {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleCartClick = () => {
    if (!clicked) {
      setQuantity(1);
    }
    setClicked(!clicked);
  };
  

  return (
    <QuantityContext.Provider
      value={{ quantity, setQuantity, incrementQuantity, decrementQuantity }}
    >
      <div style={{ width: 100 }}>
        <span>
          <button
            className={`p-2 btn btn-outline-success border-3 ${
              clicked ? 'd-none' : ''
            }`}
            onClick={handleCartClick}
            style={{ fontWeight: 600 }}
          >
            Add More
          </button>
          {clicked && (
            <div>
              <button className="btn btn-primary me-2" onClick={decrementQuantity}>
                <i className="fa-solid fa-minus" style={{ fontSize: '12px' }}></i>
              </button>
              <span>{quantity}</span>
              <button className="btn btn-primary ms-2" onClick={incrementQuantity}>
                <i className="fa-solid fa-plus" style={{ fontSize: '12px' }}></i>
              </button>
            </div>
          )}
        </span>
      </div>
    </QuantityContext.Provider>
  );
};
