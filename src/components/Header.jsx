import React, { useState } from "react";
import kotta from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import nt500 from "../images/50foiz.png";
import minus from "../images/icon-minus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import plus from "../images/icon-plus.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataSelect,
  decrementFunc,
  incrementFunc,
} from "../redux/dataSlice";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Header = () => {
  const { total, selectData } = useSelector((state) => state.dataSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header flex gap-[125px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-0 max-container">
        {/* ///////////////////////////////////////////////////////////////Rasmlar */}
        <div className="rasmlar">
          <div className="fotos">
            <label htmlFor="my_modal_7" className="">
              <img
                src={kotta}
                alt=""
                className="max-w-md lg:rounded-2xl cursor-pointer mt-10 mb-10 max-sm:w-full max-sm:hidden"
              />
              <Splide
                aria-label="My Favorite Images"
                className="sm:hidden max-sm:block"
              >
                <SplideSlide className="max-sm:w-[350px]">
                  <img
                    src={kotta}
                    alt=""
                    className="max-w-md lg:rounded-2xl cursor-pointer mt-10 mb-10 max-sm:w-full"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src={img2}
                    alt=""
                    className="max-w-md lg:rounded-2xl cursor-pointer mt-10 mb-10 max-sm:w-full"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src={img3}
                    alt=""
                    className="max-w-md lg:rounded-2xl cursor-pointer mt-10 mb-10 max-sm:w-full"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src={img4}
                    alt=""
                    className="max-w-md lg:rounded-2xl cursor-pointer mt-10 mb-10 max-sm:w-full"
                  />
                </SplideSlide>
              </Splide>
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal max-sm:hidden" role="dialog">
              <div className="modal-box">
                <Splide aria-label="My Favorite Images" className="splide">
                  <SplideSlide className="flex justify-center items-center">
                    <img
                      src={kotta}
                      alt=""
                      className="max-w-md lg:rounded-2xl cursor-pointer mb-10"
                    />
                  </SplideSlide>
                  <SplideSlide className="flex justify-center items-center">
                    <img
                      src={img2}
                      alt=""
                      className="max-w-md lg:rounded-2xl cursor-pointer mb-10"
                    />
                  </SplideSlide>
                  <SplideSlide className="flex justify-center items-center">
                    <img
                      src={img3}
                      alt=""
                      className="max-w-md lg:rounded-2xl cursor-pointer mb-10"
                    />
                  </SplideSlide>
                  <SplideSlide className="flex justify-center items-center">
                    <img
                      src={img4}
                      alt=""
                      className="max-w-md lg:rounded-2xl cursor-pointer mb-10"
                    />
                  </SplideSlide>
                </Splide>
                {/* <img
                  src={kotta}
                  alt=""
                  className="max-w-md lg:rounded-2xl cursor-pointer mb-10"
                /> */}
                <div className="flex justify-between">
                  <img
                    src={kotta}
                    alt=""
                    className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
                  />
                  <img
                    src={img2}
                    alt=""
                    className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
                  />
                  <img
                    src={img3}
                    alt=""
                    className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
                  />
                  <img
                    src={img4}
                    alt=""
                    className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
                  />
                </div>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>

          <div className="fotolar max-sm:hidden flex gap-6">
            <img
              src={kotta}
              alt=""
              className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
            />

            <img
              src={img2}
              alt=""
              className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
            />

            <img
              src={img3}
              alt=""
              className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
            />
            <img
              src={img4}
              alt=""
              className="hover:opacity-40 w-24 cursor-pointer rounded-2xl"
            />
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////// Yozuvlar */}
        <div className="titles max-sm:justify-center">
          <h3 className="mt-32 max-sm:mt-0 text-[#FF7E1B] ">Sneaker Company</h3>
          <h1 className=" mt-7 text-5xl text-[#1D2026] font-bold ">
            Fall Limit Edition <br /> Sneakers
          </h1>
          <h5 className="mt-8 text-[#69707D]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, theyll withstand everything
            the weather can offer.
          </h5>
          <div className="suma flex gap-10 mt-5">
            <h2 className=" text-2xl text-[#1D2026] font-bold">$125.00</h2>
            <img className="bg-[#FFEEE2] w-14 h-6 mt-1" src={nt500} alt="" />
          </div>
          <h4 className="mt-4 text-[#B6BCC8]">$250.00</h4>

          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between py-3  bg-slate-100 py-2 px-6 rounded shadow lg:flex-1">
              <button onClick={() => dispatch(decrementFunc())}>
                <li className="cursor-pointer">
                  <img src={minus} alt="" />
                </li>
              </button>
              <h1 className="font-bold">{total}</h1>
              <button onClick={() => dispatch(incrementFunc())}>
                <li className=" cursor-pointer">
                  <img src={plus} alt="" />
                </li>
              </button>
            </ul>

            <div className="lg:flex-1">
              <button
                onClick={() => {
                  if (total > 0) {
                    dispatch(
                      addDataSelect({
                        amount: total,
                        allPrice: 125.0 * total,
                      })
                    );
                  }
                }}
                className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-6 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200"
              >
                <AiOutlineShoppingCart /> Add cart
              </button>
            </div>
          </div>
        </div>
        .
      </div>
    </div>
  );
};

export default Header;
