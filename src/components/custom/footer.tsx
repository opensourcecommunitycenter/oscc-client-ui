import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid place-items-center px-36 py-40 gap-10 border-t border-[#bfbdb7]">
      <div className="w-72">
        <Image src={"/oscc.svg"} width={500} height={500} alt="oscc logo" />
      </div>
      <div className="px-4 py-9 border-t border-b">
        <ul className="flex items-center gap-x-14 font-semibold text-xl">
          <li>
            <Link href={"/"}>About&nbsp;OSCC</Link>
          </li>
          <li>
            <Link href={"/"}>Programs</Link>
          </li>
          <li>
            <Link href={"/"}>Privacy&nbsp;Policy</Link>
          </li>
          <li>
            <Link href={"/"}>Terms&nbsp;&&nbsp;Conditions</Link>
          </li>
          <li>
            <Link href={"/"}>Contact&nbsp;Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-3xl text-[#3e3e3e80]">All Rights Reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
