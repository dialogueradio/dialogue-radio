import React, { useState } from "react"
import Link from 'next/link'
import SnsButton from 'components/sns-button'

const LogoBlock = ({ toggleMenu, menuIsOpen }) => {
  const onClick = e => {
    e.preventDefault();
    toggleMenu(previous => !previous);
  };

  return (
    <div className={`flex items-center text-gray-300 lg:w-auto ${ menuIsOpen ? "fixed top-0 left-0 right-0 py-6 mx-5 w-auto border-b-2 border-white border-opacity-50" : "w-full"}`}>
      <a href="/">
        <img src={`${ menuIsOpen ? "/logo-white.svg" : "/logo.svg"}`} className="w-56 lg:w-64"/>
      </a>
      <div className="visible ml-auto lg:invisible">
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
    { href: "/storytellers", label: "ストーリーテラー" },
  ].map(link => ({
    ...link,
    key: `nav-link-${link.href}-${link.label}`
  }));

  return (
    <nav className={`flex-auto ${ menuIsOpen ? "fixed mt-20" : "h-0 overflow-hidden lg:overflow-auto lg:h-auto"}`}>
      <div className={`flex flex-wrap w-full lg:ml-auto xl:w-9/12 lg:w-11/12 ${ menuIsOpen ? "flex-col" : ""}`}>
        <ul
          className="flex flex-wrap items-center justify-around flex-grow w-full px-8 my-4 font-bold bg-darkgray-800 box-border lg:bg-transparent lg:mx-0 lg:pl-0 lg:pr-5 lg:my-0 lg:w-auto">
          {links.map(({ key, href, label }) => (
            <li key={key} className={`w-full text-white lg:w-auto lg:py-auto ${ menuIsOpen ? "text-xl py-4" : "nav-underline py-2"}`} >
              <Link href={href}>
                <a className="text-current">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://forms.gle/QtJQ4iXsFish9BiD7"
          target="_blank"
          className={`font-bold text-white rounded-md ${ menuIsOpen ? "px-8 pt-4 text-gray4" : "px-5 bg-black py-4 "}`}>
          お便り・お問い合わせ
        </a>
        { menuIsOpen ? (
          <div className="px-8 pt-14">
            <SnsButton variant={"WHITE"} />
          </div>
        ) : ("") }
      </div>
    </nav>
  );
};

const Header = () => {
  const [menuIsOpen, toggleMenu] = useState(false);

  return (
    <>
      { menuIsOpen ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-black opacity-90"></div>
      ) : ""}
      <header className={`container relative z-50 flex flex-wrap py-6 mb-10 ${ menuIsOpen ? "border-none header-keep" : "border-b-2 border-white border-opacity-50 "}`}>
        <LogoBlock toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
        <MenuBlock menuIsOpen={menuIsOpen} />
      </header>
    </>
  );
};

export default Header
