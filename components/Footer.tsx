import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-bse text-gray-700 ">
            Carhub 2023 <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className=" text-gray-500"
                >
                  {" "}
                  {item.title}{" "}
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10" */}
      </div>
      <div className="my-10 m-auto flex flex-col sm:flex-row gap-5 sm:gap-10 justify-evenly">
        <p className="grow max-w-max whitespace-nowrap m-auto">
          @2023 CarHub. All Rights Reserved
        </p>
        <div className="flex  justify-evenly  align-middle">
          <Link href="/" className="  m-auto text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className=" m-auto ps-10 text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
