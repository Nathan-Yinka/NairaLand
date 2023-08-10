import React from "react";
import logo2 from "../assest/navbar_images/naira-loading-F0bWYRlO6R.png";
import signIn from '..//assest/navbar_images/sign-in.png'
import { useState } from "react";

const Navbar = () => {
    const [search, setSearch]= useState("")
  return (
    <header className="container">
        <div className="logo-con d-flex align-items-center justify-content-between">

        <div className="d-flex align-items-center h-100">
        <h3 className="logo">
          <span class="double-strikethrough">N</span>AIRALAND
        </h3>
        <div className="roll-con">
        <img src={logo2} alt=""/>
        <div class="spinner"></div>
        </div>
        </div>

        <div className="d-flex align-items-center pe-5">
        <img src={signIn} alt="" className="img-fluid pe-3" />
        <p className="sign-in">Sign in</p>
        </div>

        </div>
            <ul className="navbar ps-5">
                <li><a href="">Home</a></li>
                <li><a href="">New</a></li>
                <li><a href="">Trending Posts</a></li>
                <li><input type="text" placeholder="Search Nairaland" className="form-control" value={search} onChange={(e)=>setSearch(e.target.value)}/></li>
            </ul>
    </header>
  );
};

export default Navbar;
