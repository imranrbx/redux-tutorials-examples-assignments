import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	removeFromCart,
	countCart,
	totalCart,
	emptyCart,
	increaseQTY,
	decreaseQTY,
} from "../shop/cart/actionCreators";
const Header = () => {
	const count = useSelector((state) => state.cart.count);
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark"
			aria-label="Tenth navbar example">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarsExample08"
					aria-controls="navbarsExample08"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-md-center"
					id="navbarsExample08">
					<ul className="navbar-nav">
						<li className="nav-item">
							<h4 className="nav-link active">Fake Shop</h4>
						</li>

						<li className="nav-item dropdown">
							<button
								className="btn nav-link dropdown-toggle position-relative"
								id="dropdown08"
								data-bs-toggle="dropdown"
								data-bs-auto-close={false}
								aria-expanded="false">
								Cart
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
									{count}
									<span className="visually-hidden">
										New alerts
									</span>
								</span>
							</button>

							<Product />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
const Product = () => {
	const { products, total } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(countCart());
		dispatch(totalCart());
	}, [dispatch]);
	return (
		<ul className="dropdown-menu" aria-labelledby="dropdown08">
			<li>
				<table className="table dropdown-item">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Title</th>
							<th scope="col">Thumbnail</th>
							<th scope="col">Quantity</th>
							<th scope="col">Price</th>
							<th scope="col">Total</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{products.length > 0 &&
							products.map((product) => (
								<tr key={product.id}>
									<th scope="row">{product.id}</th>
									<td>{product.title}</td>
									<td>
										<img
											className="img-fluid img-thumbnail w-25"
											src={product.image}
											alt={product.title}
										/>
									</td>
									<td>
										<button
											onClick={() => {
												dispatch(
													decreaseQTY(product.id)
												);
												dispatch(countCart());
												dispatch(totalCart());
											}}>
											-
										</button>
										{product.qty}
										<button
											onClick={() => {
												dispatch(
													increaseQTY(product.id)
												);
												dispatch(countCart());
												dispatch(totalCart());
											}}>
											+
										</button>
									</td>
									<td>${product.price}</td>
									<td>${product.total}</td>
									<td>
										<button
											onClick={() => {
												dispatch(
													removeFromCart(
														product.id
													)
												);
												dispatch(countCart());
												dispatch(totalCart());
											}}>
											X
										</button>
									</td>
								</tr>
							))}
						{products.length > 0 ? (
							<tr>
								<td colSpan={5}>
									Total : <strong>${total}</strong>
								</td>
								<td>
									<button
										className="btn btn-link btn-sm"
										onClick={() => {
											dispatch(emptyCart());
										}}>
										Empty Cart
									</button>
								</td>
							</tr>
						) : (
							<tr>
								<td colSpan={6}>
									There is No Item in the Cart...
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</li>
		</ul>
	);
};
