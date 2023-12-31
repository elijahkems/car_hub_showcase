import { CarCardProps, CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const baseUrl = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
  const url = new URL(baseUrl);
  url.searchParams.set("model", manufacturer);
  url.searchParams.set("year", year.toString());
  url.searchParams.set("model", model);
  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("fuel_type", fuel);

  const response = await fetch(url, {
    headers,
  });
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = async (car: CarProps, angle?: string) => {};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
