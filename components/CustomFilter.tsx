"use client";
import React from "react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

export default function CustomFilter({
  title,
  options,
  setParams,
}: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e);
        setParams(e.value);
      }}
    >
      <div className="relative z-25  rounded-md">
        <Listbox.Button className="custom-filter__btn">
          <span>{selected.title}</span>
          <Image
            src="/chevron-up-down.svg"
            alt="chevron-up-down"
            width={20}
            height={20}
            className="ml-4 object-contain"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="custom-filter__options absolute w-full bg-slate-300">
            {options.map((option) => (
              <Listbox.Option
                key={option.title}
                value={option}
                className={({ active }) =>
                  `flex z-40 p-2 px-5 ${
                    active ? " bg-primary-blue text-white" : ""
                  }`
                }
              >
                {option.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
