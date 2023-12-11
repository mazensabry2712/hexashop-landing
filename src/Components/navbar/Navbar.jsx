//"use client"

import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"
// import {Links} from "./datanav.js";

import { Lobster_Two } from "next/font/google";
const LogoFont = Lobster_Two({ 
   
   subsets: ["latin"],
   weight:["700"]

});

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo}   ${LogoFont.className}`}>
        HEXASHOP
      </Link>

      
      <div className={styles.links}>
        {/* {Links.map(link => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))} */}

        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
        <Link href={"/ContactUs"}>Contact us</Link>
      </div>
      {/* <DarkModeToggle/> */}
      <Button />
    </div>
  );
};

export default Navbar;
