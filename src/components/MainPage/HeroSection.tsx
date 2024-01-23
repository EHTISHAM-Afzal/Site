import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import CTAButton from "../ui/CTAButton";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-end w-full py-2 md:min-h-96 h-fit">
      <div className="relative top-0 left-0 z-10 flex flex-col gap-6 overflow-hidden md:absolute md:w-7/12 text-pretty">
        <div>
          <Image
            className="object-cover w-24 h-24 mb-3 border-4 rounded-full md:hidden"
            width={80}
            height={80}
            src="/sham2.png"
            alt="Ehtisham"
          />
          <h1 className="text-[46px] font-extrabold leading-[120%] text-foreground/50 md:text-left md:text-[80px]">
            I&apos;m <span className="text-foreground">Ehtisham</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-left md:text-2xl text-pretty">
            A front-end developer, based in Pakistan. specializing in full-stack
            web applications using JavaScript, TypeScript, React, Next.js, and
            Node.js. I love building Web-Applications that are user-friendly,
            simple and delightful. ✨
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-4 mt-10 md:flex-row">
          <Button
            size="lg"
            variant="default"
            className="w-full text-xl md:w-44 h-14"
          >
            <a target="_blank" href="https://read.cv/ehtisham">
              See my resume
            </a>
          </Button>
          <CTAButton className="rounded-lg shadow-md dark:text-gray-200npm run dev border-card h-14" />
        </div>
      </div>
      <Image
        src="/sham2.png"
        alt="Ehtisham Afzal"
        width="340"
        height="385"
        className="absolute right-0 hidden object-cover w-4/12 h-full p-0 border backdrop-blur-sm bg-secondary/50 rounded-2xl md:block"
      />
    </section>
  );
};

export default HeroSection;
