import React, { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLeaf } from "@fortawesome/free-solid-svg-icons";
export function Navbar() {
  let [open, setOpen] = useState(false);
  const MenuLinks = [
    {
      id: 1,
      link: "/",
      title: "Home",
    },
    {
      id: 2,
      link: "#",
      title: "Product",
    },
    {
      id: 3,
      link: "#",
      title: "About",
    },
    {
      id: 4,
      link: "#",
      title: "Shop",
    },
    {
      id: 5,
      link: "#",
      title: "Contacts",
    },
  ];
  return (
    <div>
      <div className="max-w-[1100px] p-6  mx-auto flex justify-between items-center ">
        {/**Logo Section */}
        <div className="flex gap-1 items-center justify-center">
          <p className="uppercase text-pink-400 font-bold text-lg">fruit</p>
          <p className="uppercase text-orange-400 font-bold text-lg">Store</p>
          <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
        </div>

        {/** Menu Section */}
        <div className="hidden md:block ">
          <ul className="flex gap-10 items-center justify-center">
            {MenuLinks.map((data, i) => {
              return (
                <li className="text-md">
                  <a
                    className="inline-block hover:text-[#ef4444] text-gray-600
                    hover:shadow-[0px_3px_0px_-1px_#ef4444] font-[500]
                    "
                    href={data.link}
                  >
                    {data.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/** */}
        <div className="md:hidden ">
          <span className="text-3xl" onClick={() => setOpen(!open)}>
            &times;
          </span>
          <ResponsiveMenu open={open} />
        </div>
      </div>
    </div>
  );
}
