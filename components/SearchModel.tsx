"use client";
import { SearchModelProps } from "@/types";
import { carModels } from "@/constants";
import Image from "next/image";

import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
export default function SearchModel({
  manufacturer,
  model,
  setModel,
}: SearchModelProps) {
  const [query, setquery] = useState("");
  const filteredModel =
    query === ""
      ? carModels[manufacturer]
      : carModels[manufacturer]?.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="seach-manufacturer w-full relative">
      <Combobox value={model} onChange={setModel}>
        <div className="flex flex-col justify-center items-start w-full">
          <Combobox.Button className="absolute top-[14px] left-4 z-31">
            <Image
              src="/model-icon.png"
              width={20}
              height={20}
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="searchbar__input w-full pl-10" // Adjust padding to prevent overlap with the button
            placeholder="tiguan"
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
              {filteredModel?.map((item) => (
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
