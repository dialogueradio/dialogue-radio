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
        <img src="/logo.svg" className="w-56 md:w-64"/>
      </a>
      <div className="visible ml-auto md:invisible">
        <button className="w-11 h-11 relative focus:outline-none bg-black rounded-md" onClick={onClick}>
          <div class="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
            <span className={`block absolute h-0.5 w-4 bg-white transform transition rounded-tr-full rounded-br-full duration-500 ease-in-out ${ menuIsOpen ? "rotate-45 w-5" : "-translate-y-2"} `} />
            <span className={`block absolute  h-0.5 w-5 bg-white transform transition rounded-tr-full rounded-br-full duration-500 opacity-1 ease-in-out ${ menuIsOpen ? "opacity-0" : ""}`} />
            <span className={`block absolute h-0.5 w-4 bg-white transform transition rounded-tr-full rounded-br-full duration-500 ease-in-out ${ menuIsOpen ? "-rotate-45 w-5" : "translate-y-2"} `}/>
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
      <div className={`flex flex-wrap w-full md:ml-auto md:w-10/12 ${ menuIsOpen ? "" : "h-0 overflow-hidden md:overflow-auto md:h-auto"}`}>
        <ul
          className="flex flex-wrap justify-around flex-grow items-center bg-darkgray-800 font-bold box-border md:bg-transparent md:mx-0 px-8 md:pl-0 md:pr-5 my-4 md:my-0 w-full md:w-auto">
          {links.map(({ key, href, label }) => (
            <li key={key} className="w-full py-2 text-white nav-underline md:w-auto md:py-auto">
              <Link href={href}>
                <a className="text-current">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://forms.gle/QtJQ4iXsFish9BiD7"
          target="_blank"
          className="px-5 py-4 bg-black text-white font-bold rounded-md">
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
    <header className="container flex flex-wrap py-6 mb-10 border-b-2 border-white border-opacity-50">
      <LogoBlock toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
      <MenuBlock menuIsOpen={menuIsOpen} />
    </header>
  );
};

export default Header
