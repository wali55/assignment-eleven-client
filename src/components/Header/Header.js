import { Button, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt=""
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Organic Life
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <button className="bg-lime-500 py-2 px-4 rounded text-white font-semibold hover:bg-orange-500">Get Started</button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
