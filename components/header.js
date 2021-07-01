import React, { useState } from "react";
import Link from 'next/link'

const LogoBlock = ({ toggleMenu, menuIsOpen }) => {
  const onClick = e => {
    e.preventDefault();
    toggleMenu(previous => !previous);
  };

  return (
    <div className="flex items-center w-full text-gray-300 md:w-auto">
      <a href="/">
        <img src={`${ menuIsOpen ? "/logo-white.svg" : "/logo.svg"}`} className="w-56 md:w-64"/>
      </a>
      <div className="visible ml-auto md:invisible">
        <button className={`relative w-11 h-11 focus:outline-none rounded-md ${ menuIsOpen ? "bg-white" : "bg-black"}`} onClick={onClick}>
          <div className="absolute block w-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className={`block absolute h-0.5 w-4 transform transition rounded-tr-full rounded-br-full duration-500 ease-in-out ${ menuIsOpen ? "rotate-45 w-5 bg-black" : "-translate-y-2 bg-white" } `} />
            <span className={`block absolute  h-0.5 w-5 transform transition rounded-tr-full rounded-br-full duration-500 opacity-1 ease-in-out ${ menuIsOpen ? "opacity-0 bg-black" : "bg-white"}`} />
            <span className={`block absolute h-0.5 w-4 transform transition rounded-tr-full rounded-br-full duration-500 ease-in-out ${ menuIsOpen ? "-rotate-45 w-5 bg-black" : "translate-y-2 bg-white"} `}/>
          </div>
        </button>
      </div>
    </div>
  );
};

const MenuBlock = ({ menuIsOpen }) => {
  const links = [
    { href: "/", label: "エピソード" },
    { href: "/posts", label: "ブログ" },
    { href: "/members", label: "メンバー" },
    { href: "/storytellers", label: "ストリーテラー" },
  ].map(link => ({
    ...link,
    key: `nav-link-${link.href}-${link.label}`
  }));

  return (
    <nav className="flex-auto">
      <div className={`flex flex-wrap w-full md:ml-auto md:w-10/12 ${ menuIsOpen ? "absolute pt-10" : "h-0 overflow-hidden md:overflow-auto md:h-auto"}`}>
        <ul
          className="flex flex-wrap items-center justify-around flex-grow w-full px-8 my-4 font-bold bg-darkgray-800 box-border md:bg-transparent md:mx-0 md:pl-0 md:pr-5 md:my-0 md:w-auto">
          {links.map(({ key, href, label }) => (
            <li key={key} className={`w-full text-white md:w-auto md:py-auto ${ menuIsOpen ? "text-xl py-4" : "nav-underline py-2"}`} >
              <Link href={href}>
                <a className="text-current">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://forms.gle/QtJQ4iXsFish9BiD7"
          target="_blank"
          className={`font-bold text-white rounded-md ${ menuIsOpen ? "px-8 pt-8 text-gray4" : "px-5 bg-black py-4 "}`}>
          お便り・お問い合わせ
        </a>
      </div>
    </nav>
  );
};

// const MenuFull = {}

const Header = () => {
  const [menuIsOpen, toggleMenu] = useState(false);

  return (
    <>
      <div className={`${ menuIsOpen ? "absolute top-0 bottom-0 left-0 right-0 z-40 bg-black opacity-90" : ""}`}></div>
      <header className="container relative z-50 flex flex-wrap py-6 mb-10 border-b-2 border-white border-opacity-50">
        <LogoBlock toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
        <MenuBlock menuIsOpen={menuIsOpen} />
      </header>
    </>
  );
};

export default Header
