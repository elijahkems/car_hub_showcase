import { Hero } from "@/components";
import SearchBar from "@/components/SearchBar";

import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { CarProps } from "@/types";
import ShowMore from "@/components/ShowMore";

export default async function Home({ searchParams }: any) {
  console.clear();
  console.log(searchParams);
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  console.log(allCars.length);
  // console.log(allCars);
  const isDataEmpty = allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden bg-slate-300">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue </h1>
          <p>Explore the cars you like </p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: CarProps, i: number) => (
                <CarCard key={i} car={car} />
              ))}
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </div>
          </section>
        ) : (
          <div className="w-full text-center text-lg m-5 ">
            No Cars specified above is available{" "}
          </div>
        )}
      </div>
    </main>
  );
}
