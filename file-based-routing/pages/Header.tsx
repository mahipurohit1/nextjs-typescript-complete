import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <ul>
      <li>
        {" "}
        <Link href="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link href="/about">About</Link>
      </li>
      <li>
        {" "}
        <Link href="/client">Client</Link>
      </li>
      <li>
        {" "}
        <Link href="/blog/2022/12">Blog</Link>
      </li>
      <li>
        {" "}
        <Link href="/product">Product</Link>
      </li>
    </ul>
  );
};

export default Header;
