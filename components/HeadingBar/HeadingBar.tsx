"use client";

import React from "react";
import { MenuIcon } from "@/utils/MaterialIcons";

type Props = {};

const HeaderBar = (props: Props) => {
  const HeaderBarStyles =
    "rounded-full px-2 py-1 transition-all hover:bg-gray-200 hover:text-[#0D6EFD]";

  return (
    <>
      {/* Desktop */}
      <div className="hidden w-full justify-around border-t-2 border-[#E0E0E0] py-2 shadow-md md:flex">
        <div className="flex w-3/4 items-center justify-around">
          <button className="flex items-center rounded-full px-2 py-1 transition-all hover:bg-gray-200 hover:text-[#0D6EFD]">
            <MenuIcon className="mr-2" />
            All Category
          </button>
          <button className={HeaderBarStyles}>Hot Offers</button>
          <button className={HeaderBarStyles}>Gift Boxes</button>
          <button className={HeaderBarStyles}>Projects</button>
          <button className={HeaderBarStyles}>Menu Item</button>
          <button className={HeaderBarStyles}>Help</button>
        </div>

        <div className="flex w-1/4 items-center justify-around">
          <button className={HeaderBarStyles}>English, USD</button>
          <button className={HeaderBarStyles}>Ship to 🇱🇰</button>
        </div>
      </div>

      {/* Mobile */}
      <div className="m-4 flex justify-around text-[#0D6EFD] md:hidden">
        <button className="rounded-md bg-gray-200 px-2 py-1 transition-all hover:bg-gray-300 hover:text-blue-500">
          All category
        </button>
        <button className="rounded-md bg-gray-200 px-2 py-1 transition-all hover:bg-gray-300 hover:text-blue-500">
          Gadgets
        </button>
        <button className="rounded-md bg-gray-200 px-2 py-1 transition-all hover:bg-gray-300 hover:text-blue-500">
          Clothes
        </button>
        <button className="rounded-md bg-gray-200 px-2 py-1 transition-all hover:bg-gray-300 hover:text-blue-500">
          Accessories
        </button>
      </div>
    </>
  );
};

export default HeaderBar;