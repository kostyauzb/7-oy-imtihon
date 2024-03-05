import { NavLink } from "react-router-dom";
import avatar from "../images/image-avatar.png";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";
import hamburger from "../images/hamburger.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteAll } from "../redux/dataSlice";

function Navbar() {
  const { selectData } = useSelector((state) => state.dataSlice);
  const dispatch = useDispatch();
  const text = "Autumn Limited Edition Sneakers";
  return (
    <>
      <div className="navbar bg-base-100 mb-0 pb-0 w-full max-container">
        <div className="flex-1">
          <div className="dropdown mb-5 hidden max-sm:block">
            <div tabIndex={0} role="button" className="w-14">
              <img src={hamburger} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="hover:border-orange-600  hover:border-b-2 transition-[2s] cursor-pointer font-bold mb-3">
                Collections
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer font-bold mb-3">
                Men
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer font-bold mb-3">
                Women
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer font-bold mb-3">
                About
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer font-bold mb-3">
                Contact
              </li>
            </ul>
          </div>
          <img
            className="cursor-pointer mb-6 hover:opacity-50 transition"
            src="/sneakersLogo.svg"
            alt=""
          />
          <nav className="ml-14 max-sm:hidden">
            <ul className="flex gap-x-8 h-12">
              <li className="hover:border-orange-600  hover:border-b-2 transition-[2s] cursor-pointer">
                Collections
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer">
                Men
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer">
                Women
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer">
                About
              </li>
              <li className="hover:border-orange-600 hover:border-b-2 transition-[2s] cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-none mb-6">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item ">
                  {selectData ? selectData.amount : 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow max-sm:w-[350px]"
            >
              <article
                className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-20 left-8 lg:w-96 lg:left-auto lg:top-20 max-sm:right-0 max-sm:top-0 max-sm:left-20"
                style={{ zIndex: 1000 }}
              >
                <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">
                  Cart
                </h2>
                {selectData ? (
                  <>
                    <h3>Card no added</h3>
                    <div className="flex items-center justify-between">
                      <img src={thumbnail} alt="" className="rounded-lg w-14" />
                      <ul>
                        <li className="text-slate-600 text-sm"></li>
                        <li className="text-slate-600 text-sm">
                          $125.00 x {selectData.amount}
                          <span className="font-bold text-slate-900">
                            $ {selectData.allPrice}
                          </span>
                        </li>
                      </ul>

                      <button onClick={() => dispatch(deleteAll())}>
                        <img src={iconDelete} alt="Delete" />
                      </button>
                    </div>

                    <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
                      Checkout
                    </button>
                  </>
                ) : (
                  <h1>Card no added</h1>
                )}
              </article>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={avatar} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="relative bottom-3" />
    </>
  );
}

export default Navbar;
