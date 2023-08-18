import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

const CartSpan = ({ item, updateItemQuantity }) => {
  const [clicked, setClicked] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
    updateItemQuantity(item.id, quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1)
      updateItemQuantity(item.id, quantity - 1)
    }
  }

  const handleCartClick = () => {
    if (!clicked) {
      setQuantity(1)
      updateItemQuantity(item.id, 1)
    }
    setClicked(!clicked)
  }

  return (
    <div>
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
            <button
              className='btn btn-primary me-2'
              onClick={decrementQuantity}
            >
              <i className='fa-solid fa-minus' style={{ fontSize: '12px' }}></i>
            </button>
            <span>{quantity}</span>
            <button
              className='btn btn-primary ms-2'
              onClick={incrementQuantity}
            >
              <i className='fa-solid fa-plus' style={{ fontSize: '12px' }}></i>
            </button>
          </div>
        )}
      </span>
    </div>
  )
}

function OrderNow (props) {
  // cart items
  const { cartItems, setCartItems } = props

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(cartItems)
  }, [cartItems])

  const handleEmptyCart = () => {
    setItems([])
    setCartItems([])
  }

  const handleRemoveItem = id => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
    setCartItems(updatedItems)
  }

  // Update quantity for a specific item
  const updateItemQuantity = (itemId, quantity) => {
    setItems(prevItems =>
      prevItems.map(item => (item.id === itemId ? { ...item, quantity } : item))
    )
  }

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalSelectedItems = items.reduce((acc, item) => acc + item.quantity, 0)

  //forms
  const [details, setDetails] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    option: '',
    date: ''
  })

  const [detailsContent, setDetailsContent] = useState(null)

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const content = (
      <div>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Receiving as: {formData.option}</p>
        <p>Date: {formData.date}</p>
      </div>
    )
    setDetailsContent(content)
    setFormData({
      email: '',
      phone: '',
      option: '',
      date: ''
    })
  }

  //conditional
  const [clicked, setClicked] = useState(false)
  const handleContentClick = () => {
    setClicked(!false)
  }

  return (
    <div className='p-4' style={{ marginTop: 50, backgroundColor: '#f6efd4 ' }}>
      <div className='d-flex mt-5 ps-5'>
        <div
          className='shadow-effect p-3 me-3'
          style={{ width: '60%', backgroundColor: '#f6efd6' }}
        >
          <h1
            className='mb-5 ms-3'
            style={{ fontFamily: 'pacifico', textDecoration: 'underline' }}
          >
            Your Order....
          </h1>

          {items.length === 0 ? (
            <div
              className='d-flex justify-content-center align-items-center'
              style={{ height: '300px' }}
            >
              <h3 style={{ fontFamily: 'poppins' }}>
                No items added ,{' '}
                <Link to='/menu' style={{ fontFamily: 'pacifico' }}>
                  go to menu
                </Link>{' '}
                and select your favourite foods
              </h3>
            </div>
          ) : (
            items.map(item => (
              <div
                className='row mt-3 d-flex justify-content-center '
                key={item.id}
              >
                <div className='col-xl-10 d-flex justify-content-between'>
                  <div className=' col-xl-6 d-flex align-items-center '>
                    <img
                      className='rounded-2 me-xl-4'
                      src={item.imageSrc}
                      alt={item.alt}
                      style={{ width: 100 }}
                    />
                    <h3>{item.name}</h3>
                  </div>
                  <div className='col-xl-6 d-flex align-items-center justify-content-around'>
                    <h4>Rs. {item.price}</h4>
                    <div style={{ width: 100 }}>
                      <CartSpan
                        item={item}
                        updateItemQuantity={updateItemQuantity}
                      />
                    </div>
                    <button
                      className='btn btn-outline-danger border-3 remove'
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <button
              className='btn btn-danger ms-5 mb-5'
              style={{ marginTop: '2rem', fontWeight: 600 }}
              onClick={handleEmptyCart}
            >
              <i className='me-2 fa-regular fa-trash-can'></i> EMPTY CART
            </button>
          )}
        </div>

        <div style={{ width: '30%' }} className='ms-4'>
          <div className='bg-white '>
            <div className='d-flex bg-black justify-content-between align-items-center'>
              <h1
                style={{ fontFamily: 'poppins', fontWeight: 600 }}
                className='p-2 ms-1 text-white '
              >
                <span style={{ color: '#b80101' }}>M</span>yOrder{' '}
                <span style={{ color: '#b80101' }}>i</span>nfo
              </h1>
              <button
                type='button'
                className='btn btn-outline-secondary me-3 text-white'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
                onClick={handleContentClick}
              >
                EDIT
              </button>
              <div
                className='modal fade'
                id='staticBackdrop'
                data-bs-backdrop='static'
                data-bs-keyboard='false'
                tabIndex='-1'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-dialog-centered mx-auto'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                        Edit your order info..
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div>
                      <div className='modal-body'>
                        <form>
                          <div className='mb-3'>
                            <label
                              htmlFor='email'
                              className='form-label text-info-emphasis'
                            >
                              Email address
                            </label>
                            <input
                              type='email'
                              className='form-control border-secondary '
                              id='email'
                              name='email'
                              aria-describedby='emailHelp'
                              onChange={handleChange}
                            />
                            <div id='emailHelp' className='form-text'>
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div className='mb-3'>
                            <label
                              htmlFor='phone'
                              className='form-label text-info-emphasis'
                            >
                              Phone number
                            </label>
                            <input
                              type='tel'
                              className='form-control border-secondary'
                              name='phone'
                              id='phone'
                              onChange={handleChange}
                            />
                          </div>
                          <div className='mb-3'>
                            <label
                              htmlFor='option'
                              className='form-label text-info-emphasis'
                            >
                              Select option
                            </label>
                            <div>
                              <div className='form-check form-check-inline'>
                                <input
                                  className='form-check-input  border-success'
                                  type='radio'
                                  name='option'
                                  id='pickup'
                                  value='pickup'
                                  onChange={handleChange}
                                />
                                <label
                                  className='form-check-label text-black'
                                  htmlFor='pickup'
                                >
                                  Pickup
                                </label>
                              </div>
                              <div className='form-check form-check-inline '>
                                <input
                                  className='form-check-input border-success'
                                  type='radio'
                                  name='option'
                                  id='delivery'
                                  value='delivery'
                                  onChange={handleChange}
                                />
                                <label
                                  className='form-check-label text-black'
                                  htmlFor='delivery'
                                >
                                  Delivery
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className='mb-3'>
                            <label
                              htmlFor='date'
                              className='form-label text-info-emphasis'
                            >
                              Receiving Date
                            </label>
                            <input
                              type='date'
                              className='form-control border-secondary'
                              name='date'
                              id='date'
                              onChange={handleChange}
                            />
                          </div>
                        </form>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-warning'
                          data-bs-dismiss='modal'
                        >
                          Close
                        </button>
                        <button
                          type='submit'
                          className='btn btn-success'
                          data-bs-dismiss='modal'
                          onClick={handleSubmit}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='details p-2'>
              <div
                style={{ height: 80, fontFamily: 'serif' }}
                className={`d-block ${clicked ? 'd-none' : ''}`}
              >
                <h1 className='fs-3 p-3'>
                  Click{' '}
                  <span className='border border-2 border-dark p-1'>edit</span>{' '}
                  to update your order info
                </h1>
              </div>
              {detailsContent}
            </div>

            <div className='mt-2' style={{ height: 350 }}>
              <h1
                style={{ fontFamily: 'poppins', fontWeight: 600 }}
                className='p-2 ps-3 text-white bg-black'
              >
                <span style={{ color: '#b80101' }}>M</span>y{' '}
                <span style={{ color: '#b80101' }}>B</span>AG
              </h1>

              <div className='p-3'>
                {/* Display Total Selected Items */}
                <div className='d-flex justify-content-between'>
                  <h4>Total Selected Items:</h4>
                  <h4> {totalSelectedItems}</h4>
                </div>
                <div className='d-flex justify-content-between'>
                  <h4>Subtotal</h4>
                  <h4>Rs. {total}</h4>
                </div>
                <div className='d-flex justify-content-between'>
                  <h4>
                    Tax{' '}
                    <span
                      className='ms-1 text-secondary align-middle'
                      style={{ fontSize: '0.6rem' }}
                    >
                      (CGST - 2%)
                    </span>
                  </h4>
                  <h4>Rs. {total * 0.02 * totalSelectedItems}</h4>
                </div>
                <div className='d-flex justify-content-between'>
                  <h4>Total</h4>
                  <h4>
                    Rs. {Math.floor(total + total * 0.02 * totalSelectedItems)}
                  </h4>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                  <h5>Discount :</h5>
                  <h5>
                    {(
                      total +
                      total * 0.02 * totalSelectedItems -
                      Math.floor(total + total * 0.02 * totalSelectedItems)
                    ).toFixed(1)}
                  </h5>
                </div>

                <div className='d-flex justify-content-center'>
                  <button
                    className='btn btn-success mt-3'
                    style={{ fontWeight: 600 }}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderNow
