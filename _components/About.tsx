"use client";
import React from "react";
import Image from "next/image";
import AboutLat from "@/_components/svg/AboutLat";
import AboutCirilica from "@/_components/svg/AboutCirilica";
import { BackdropPlane } from "@/_components/backdropPlane/BackdropPlane";
import { Canvas } from "@react-three/fiber";

export default function About() {
  return (
    <div className="about grid w-full h-full lg:h-270 grid-cols-1 md:grid-cols-2 sm:gap-0 md:gap-1 lg:gap-2 my-1 lg:my-2">
      {/* Left Side Image */}
      <section className="overflow-hidden relative border-2 rounded-sm border-(--border-muted)">
        <Image
          src="/img/coa.webp"
          alt="About me"
          width={1110}
          height={2406}
          className="h-135 md:h-full w-full rounded-sm object-cover"
          priority
        />
      </section>

      {/* Right Side Content */}
      <section className="relative h-270 flex flex-col p-1 lg:p-2 font-exo2 mt-1 lg:mt-0 md:mt-0 border-2 rounded-sm border-(--border-muted)">
        {/* 🎨 Three.js Backdrop Plane kao pozadina */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-sm">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 45,
              near: 0.1,
              far: 100,
            }}
            gl={{
              alpha: false,
              antialias: false,
              powerPreference: "high-performance",
            }}
          >
            <BackdropPlane />
          </Canvas>
          <div className="bg-(--bg-light) w-full h-full absolute top-0 right-0 opacity-75 z-10"></div>
        </div>

        {/* Background Decoration */}
        <AboutCirilica className="absolute top-0 right-0 h-full text-(--text-muted) opacity-10 z-20 text-bg" />

        {/* Heading */}
        <div className="mb-3 h-3 z-30">
          <AboutLat className="h-full text-(--text-muted) opacity-80" />
        </div>

        {/* Title */}
        <h1 className="mb-8 max-w-[30ch] font-teko text-3xl text-(--text-muted) font-medium z-30">
          Creative Graphic Designer & 3D Modeler | Branding, Packaging, Social
          Media, Art Merchandise & Interactive 3D Solutions | Based in Novi Sad,
          Serbia
        </h1>

        {/* Description */}
        <div className="grow max-w-[46ch] font-manrope text-base text-(--text) opacity-90 z-30 space-y-1">
          <p>
            Hi, I&apos;m Alexander, a passionate graphic designer with over 5
            years of experience specializing in branding and digital
            illustration. My expertise lies in creating cohesive brand
            identities, from logos to full-scale marketing materials. I am
            proficient in Adobe Creative Suite, particularly Illustrator and
            Photoshop, and have a strong understanding of UX/UI principles. Over
            the years, I&apos;ve had the privilege of working with a diverse
            range of clients, from startups to established brands.
          </p>
          <p>
            I am deeply passionate about creating designs that not only look
            great but also tell a story. I believe in the power of collaboration
            and always strive to deliver work that exceeds expectations.
          </p>
          <p>
            I&apos;m always excited to take on new challenges and collaborate
            with like-minded individuals. Feel free to browse my portfolio and
            get in touch if you&apos;d like to work together!
          </p>
        </div>

        {/* Contact */}
        <div className="flex items-center z-30">
          <div className="mr-1 flex h-3 w-3 items-center justify-center rounded-full bg-gray-950 dark:bg-sky-50">
            {/*<Mail className="h-6 w-6 text-sky-50 dark:text-gray-950" />*/}
          </div>
          <span className="font-manrope text-md tracking-[0.15em] text-(--text)">
            dimtodim@gmail.com
          </span>
        </div>
      </section>
    </div>
  );
}
