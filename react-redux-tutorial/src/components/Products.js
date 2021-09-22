import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../shop/products/actionCreators";
const Products = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((products) => dispatch(fetchProducts(products)));
    }, [dispatch]);
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">Our Shop Page</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {products.length > 0 &&
                    products.map((product) => (
                        <div className="col" key={product.id}>
                            <div
                                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                                style={{
                                    backgroundImage: `url(${product.image})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "black",
                                }}
                            >
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                        {product.title}
                                    </h2>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <button>+</button>
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <svg
                                                className="bi me-2"
                                                width="1em"
                                                height="1em"
                                            ></svg>
                                            <small>Earth</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <svg
                                                className="bi me-2"
                                                width="1em"
                                                height="1em"
                                            ></svg>
                                            <small></small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Products;
