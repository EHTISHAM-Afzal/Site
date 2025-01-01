import React from "react";
import CTAButton from "../../../src/components/ui/CTAButton";

const CallToActionComp = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-between gap-10 p-4 border rounded-xl bg-secondary/50 my-28 lg:flex-row">
      <div>
        <h2 className="text-3xl font-bold text-center lg:text-left lg:text-4xl">
          Let&apos;s Collaborate
        </h2>
        <p className="mt-4 text-lg md:text-xl text-center text-muted-foreground lg:text-left text-pretty">
          Want to discuss an opportunity to create something great
          <br className="hidden lg:inline-block" /> I’m ready when you are.
        </p>
      </div>
      <CTAButton />
    </section>
  );
};

export default CallToActionComp;
