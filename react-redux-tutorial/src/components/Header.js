import React from "react";

const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            aria-label="Tenth navbar example"
        >
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample08"
                    aria-controls="navbarsExample08"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbarsExample08"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h4 className="nav-link active">
                                Fake Shop
                            </h4>
                        </li>

                        <li className="nav-item dropdown">
                            <button
                                className="btn nav-link dropdown-toggle position-relative"
                                id="dropdown08"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    0
                                    <span className="visually-hidden">
                                        New alerts
                                    </span>
                                </span>
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdown08"
                            >
                                <li>
                                    <table className="table dropdown-item">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">
                                                    Title
                                                </th>
                                                <th scope="col">
                                                    Thumbnail
                                                </th>
                                                <th scope="col">
                                                    Quantity
                                                </th>
                                                <th scope="col">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Product 01</td>
                                                <td>Image</td>
                                                <td>1</td>
                                                <td>$25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
