"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectsTitle from "./svg/project-svg";
import WebTitleSvg from "./svg/web-title-svg";
import LogoTitleSvg from "./svg/logo-title-svg";
import PrintTitleSvg from "./svg/print-title-svg";
import DotSvg from "./svg/dot-svg";
import ArrowDownSvg from "./svg/arrow-down-svg";
import BirdSvg from "./svg/bird-svg";
import KuleSvg from "./svg/kule-svg";

gsap.registerPlugin(ScrollTrigger);

const titleSvg = [
  { svg: LogoTitleSvg, dot: DotSvg, name: "logo" },
  { svg: PrintTitleSvg, dot: DotSvg, name: "print" },
  { svg: WebTitleSvg, dot: DotSvg, name: "web" },
];

export default function Projects() {
  const birdRef = useRef<SVGSVGElement | null>(null);
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const kuleRef = useRef<SVGSVGElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null); // Ref za progress liniju

  useEffect(() => {
    // GPU acceleration (dodao progressRef)
    gsap.set(
      [
        birdRef.current,
        headerRef.current,
        kuleRef.current,
        ...titlesRef.current,
        arrowRef.current,
        progressRef.current,
      ],
      { willChange: "transform, opacity, width" } // Dodao width za liniju
    );

    // 🟢 SCROLL PROGRESS BAR – linija se puni od 0% do 100% kroz sekciju (scrub radi i reverse automatski)
    gsap.to(progressRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".projects",
        start: "top bottom", // Počinje kada sekcija uđe u viewport
        end: "center center", // Završava kada centar sekcije u centru ekrana
        scrub: 0.5, // Glatko vezano za scroll – automatski reverse-uje nazad
        // Uklonjeni onLeave/onEnterBack: scrub već radi glatko forward/backward bez hard-set-a
      },
    });

    // 🟢 MAIN ANIMACIJA – pokreće se kada je progress 100% (sekcija u centru)
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: ".projects",
        start: "center center", // Animacija kreće kada je centar sekcije u centru ekrana
        end: "bottom top",
        toggleActions: "play none none reverse",
        // Uklonjen once: true – sada se reverse-uje nazad (kao što treba)
      },
    });

    // 🐦 Bird ulaz (kao pre)
    tl.fromTo(
      birdRef.current,
      { yPercent: -150, xPercent: 150, opacity: 0, rotation: -10, scale: 0.9 },
      {
        yPercent: 0,
        xPercent: 0,
        opacity: 0.8,
        rotation: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out",
      }
    );

    // Idle bird (ostaje isto – pokreće se na forward, ali sa reverse će se bird vratiti u početno stanje)
    tl.call(
      () => {
        gsap.to(birdRef.current, {
          y: "+=16",
          duration: 1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      },
      undefined,
      "+=0.2"
    ); // Malo kašnjenje posle bird ulaza

    // 🏰 Kule – brzo posle bird-a
    tl.fromTo(
      kuleRef.current,
      { yPercent: 80, xPercent: 80, opacity: 0, rotation: -50, scale: 0.8 },
      {
        yPercent: 0,
        xPercent: 0,
        opacity: 0.15,
        rotation: -48,
        scale: 1,
        duration: 0.9,
      },
      0.1
    );

    // ➿ Idle loop kule (blago pomeranje u pravcu rotacije – pokreće se na forward)
    tl.call(
      () => {
        gsap.to(kuleRef.current, {
          rotation: -46, // malo u pravcu rotacije
          y: "+=8", // blago vertikalno pomeranje
          duration: 2.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      },
      undefined,
      "-=0.5"
    ); // Pokreće se blago prije kraja kule ulaza

    // 🧾 Header – malo kasnije
    tl.fromTo(
      headerRef.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.6, ease: "back.out(1.4)" },
      0.2
    );

    // 🔠 Titles
    tl.fromTo(
      titlesRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
      "-=0.2"
    );

    // ⬇️ Arrow
    tl.fromTo(
      arrowRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="projects relative flex flex-col w-full h-270 mb-1 lg:mb-2 overflow-hidden rounded-sm bg-(--bg-light) border-2 border-(--border-muted)">
      {/* 🟢 PROGRESS BAR – linija koja se puni od 0% do 100% */}
      <div className="progress-container absolute top left-0 right-0 z-100 flex justify-center pointer-events-none">
        {" "}
        {/* Fixed na dnu; ukloni fixed ako treba samo u sekciji */}
        <div className="w-full h-1 bg-(--bg-dark) rounded-sm overflow-hidden">
          {" "}
          {/* Kontener za liniju */}
          <div
            ref={progressRef}
            className="h-full bg-linear-to-r from-(--bg-dark) to-(--bg-light) rounded-sm"
            style={{ width: "0%" }} // Početni stil: 0%
          />
        </div>
      </div>
      <div className="flex flex-col h-full ">
        {/* Header */}
        <section
          ref={headerRef}
          className="bg-(--bg-light) z-10 relative rounded-sm border-b-2 border-(--border-muted)"
        >
          <div className="relative px-1 lg:px-2 pt-1 lg:pt-2 pb-26">
            <ProjectsTitle fillColor="var(--text-muted)" />
          </div>
        </section>
        {/* Content */}
        <section className="relative flex flex-col flex-1 bg-(--bg) px-1 lg:px-2">
          {/* Titles */}
          <div className="relative z-30 flex flex-col grow pt-8">
            {titleSvg.map(
              ({ svg: SvgComponent, dot: DotComponent, name }, i) => (
                <div
                  key={name}
                  ref={(el) => {
                    titlesRef.current[i] = el;
                  }}
                  className="mb-1 flex w-full items-center opacity-0"
                >
                  <DotComponent className="mr-2 h-3" fillColor="var(--text)" />
                  <SvgComponent className="h-6" fillColor="var(--text)" />
                </div>
              )
            )}
          </div>

          {/* Arrow */}
          <div ref={arrowRef} className="z-10 mt-auto pb-1 lg:pb-2 opacity-0">
            <ArrowDownSvg className="h-4 text-(--text-muted)" />
          </div>

          {/* Bird */}
          <BirdSvg
            ref={birdRef}
            className="absolute left-[45%] top-[10%] md:top-[-20%] z-20 h-100 opacity-0"
            birdColor="var(--text)"
            branchColor="var(--success)"
          />
        </section>

        {/* Kule */}
        <KuleSvg
          ref={kuleRef}
          className="absolute right-[-500px] bottom-[-5%] lg:right-[-390px] lg:bottom-[-15%] z-0 h-208 -rotate-48 opacity-15"
          fillColor="var(--text)"
        />
      </div>
    </div>
  );
}
