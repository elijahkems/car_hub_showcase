"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";
import SearchModel from "./SearchModel";
import { fuels, yearsOfProduction } from "@/constants";
import CustomFilter from "./CustomFilter";
import { title } from "process";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") return;
    updateSearchParams(
      model.toLowerCase(),
      manufacturer.toLowerCase(),
      year,
      fuel
    );
  };

  const updateSearchParams = (
    model: string,
    manufacturer: string,
    year: string,
    fuel: string
  ) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }
    if (fuel) {
      searchParams.set("fuel", fuel);
    } else {
      searchParams.delete("fuel");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form
      className=" w-full flex flex-col gap-3 justify-evenly sm:flex-row sm:w-full sm:gap-0 "
      onSubmit={handleSubmit}
    >
      <div className="flex justify-start items-center grow">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className="flex justify-start items-center grow ">
        <SearchModel
          model={model}
          setModel={setModel}
          manufacturer={manufacturer}
        />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
      <div className="home__filter-container sm:ms-5  flex justify-center items-center">
        <CustomFilter
          title="Year"
          options={yearsOfProduction}
          setParams={setYear}
        />
        <CustomFilter title="Fuel" options={fuels} setParams={setFuel} />
        <SearchButton otherClasses="ml-auto ms sm:hidden" />
      </div>
    </form>
  );
}
