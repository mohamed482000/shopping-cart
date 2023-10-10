import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Store from "../../context/Context";
import "./header.css";
import { FiLogIn } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Swal from "sweetalert2";

//image
import brandImg from "../../assets/logo.png";

function Header({ updateLinks, setUpdateLinks }) {
  const { dataInCart, setRerenderShop } = useContext(Store);
  const shopLink = useRef();
  const homeLink = useRef();
  const navigate = useNavigate();
  const navigate2 = useNavigate();

  //remove class active from home link and shop link
  useEffect(() => {
    shopLink.current.classList.remove("active");
    homeLink.current.classList.remove("active");
  }, [updateLinks]);
  /// add  class active to home link and shop link
  useEffect(() => {
    if (window.location.pathname === "/") {
      homeLink.current.classList.add("active");
    } else if (window.location.pathname === "/shop") {
      shopLink.current.classList.add("active");
    }
  }, []);
  // go to cart page
  const goToProductsInCart = () => {
    if (localStorage.getItem("id")) {
      setUpdateLinks((prev) => !prev);
      navigate("/productsInCart");
    } else {
      Swal.fire({
        title: "you should log in",
        showCancelButton: true,
        timer: 2000,
        timerProgressBar: true,
        confirmButtonText: "login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate2("/login");
        }
      });
    }
  };
  //log out
  const LogOut = () => {
    if (localStorage.getItem("id")) {
      Swal.fire({
        title: "are you sure! want to log out !",
        showCancelButton: true,
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "logout",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("id");
          localStorage.removeItem("image");
          localStorage.removeItem("role");
          setRerenderShop((prev) => !prev);
          navigate("/");
        }
      });
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand to="/" as={Link} className="mb-1">
          <img src={brandImg} alt="brand img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              ref={homeLink}
              as={NavLink}
              to="/"
              href="#features"
              className="text-capitalize home-link "
            >
              home
            </Nav.Link>
            <Nav.Link
              ref={shopLink}
              as={NavLink}
              to="/shop"
              href="#pricing"
              className="text-capitalize shop-link"
            >
              shop
            </Nav.Link>
          </Nav>
          <Nav className="shop-Icon">
            {localStorage.getItem("id") ? (
              <span className="products-sum">{dataInCart.length}</span>
            ) : (
              ""
            )}
            <Nav.Link onClick={goToProductsInCart}>
              <HiOutlineShoppingBag />
            </Nav.Link>
          </Nav>
          <Nav className="drop">
            {localStorage.getItem("id") ? (
              <NavDropdown
                title={<img src={localStorage.getItem("image")} />}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/userpage">
                  profile
                </NavDropdown.Item>
                {localStorage.getItem("role") == "admin" ? (
                  <NavDropdown.Item as={Link} to="/adminpage">
                    {" "}
                    admin page
                  </NavDropdown.Item>
                ) : (
                  ""
                )}
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">
                  <button onClick={LogOut}>logout</button>{" "}
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                title="login"
                to="/login"
                as={Link}
                className="log-in-icon"
              >
                <FiLogIn />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
