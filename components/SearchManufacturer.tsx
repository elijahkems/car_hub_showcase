"use client";
import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";
import Image from "next/image";

import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setquery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    //src="/car-logo.svg"
    <div className="seach-manufacturer w-full relative">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="flex flex-col justify-center items-start w-full">
          <Combobox.Button className="absolute top-[14px] left-4 z-35">
            <Image src="/car-logo.svg" width={20} height={20} alt="Car Logo" />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input w-full pl-10" // Adjust padding to prevent overlap with the button
            placeholder="volkswagon"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquery("")}
          >
            <Combobox.Options className="bg-slate-200 absolute w-full z-10 mt-1 top-full">
              {filteredManufacturers?.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative cursor-pointer search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
