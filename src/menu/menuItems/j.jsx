breakFastItems.map((item, index) => (
    <div className="row mt-4 justify-content-center" key={index}>
        <div className="p-1 d-flex col-xl-10 col-lg-12 col-md-10 justify-content-lg-center  justify-content-lg-evenly justify-content-md-between justify-content-evenly " >
            <div className="d-flex align-items-center col-xl-8 col-lg-6 col-md-6 col-sm-8 ms-md-2 justify-content-sm-evenly" >
                <div>
                    <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="me-xl-5 me-lg-4 me-md-4 me-4 rounded-3 d-flex custom-image"
                    />
                </div>
                <div className="col-lg-8 col-4">
                    <h3 >{item.name}</h3>
                    <p className="d-none d-xl-block d-lg-block">
                        {item.description}
                    </p>
                </div>
            </div>

            <div className="col-4 col-sm-4 col-md-4 ms-md-3 d-flex justify-content-evenly  align-items-center">
                <div className="d-flex gap-5 align-items-center me-lg-3 me-xl-3 me-md-3 me-4">
                    <HeartLike />
                    <i className="fa-solid fa-indian-rupee-sign fs-4 me-4 me-sm-4">15</i>
                </div>
                <div>
                    <button
                        className="p-2 rounded-2 d-flex align-items-center me-sm-4"
                        onClick={() => handleClick(item)}
                        style={{ fontFamily: "poppins", fontWeight: 600, backgroundColor: "transparent" }}
                    >
                        <GrCart className="fs-3 me-2" /> {/* Hide the cart icon on md screens */}
                        <span className="d-none d-lg-block me-2">Add to Order</span> {/* Hide "Add to Order" text on md screens */}
                    </button>
                </div>
            </div>
        </div>
    </div>
))}