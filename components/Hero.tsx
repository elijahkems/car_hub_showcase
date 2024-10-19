"use client";
import React, { useRef } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className=" hero__title">Find, book or rent a car - quickly</h1>
        <p className=" hero__subtitle">
          streamline your car rental exprerience
        </p>
        <Link href="#discover">
          <CustomButton
            title="Explore Cars"
            containerStyles=" bg-primary-blue text-white rounded-full mt-10"
          />
        </Link>
      </div>
      <div className="hero__image-contaner">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}
