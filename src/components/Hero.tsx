"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../public/images/home-hero.jpg";

export const Hero = () => {
  return (
    <section className="mt-8 md:mt-16">
      <div className="flex-center relative z-[1] mt-7 flex max-sm:hidden">
        <div className="lg:inset-y-18 absolute inset-x-0 inset-y-8">
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{
              background:
                "radial-gradient(95% 150% at 13.18% 0%, rgb(14, 115, 204) 0%, rgb(98, 75, 187) 29.47%, rgb(255, 69, 93) 52.87%, rgb(243, 88, 21) 86.38%, rgb(254, 213, 74) 100%);",
            }}
            initial={{ filter: "blur(32px)", opacity: 0, scaleY: 1.5 }}
            whileInView={{
              filter: "blur(0px)",
              opacity: 1,
              scaleY: 1,
            }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          />
          <div
            style={{
              backgroundImage: "url(/images/grid-bg.svg)",
              backgroundRepeat: "repeat",
            }}
            className="z-1 absolute inset-0"
          ></div>
        </div>
        <div className="container relative z-[1] max-w-[1280px]">
          <div
            style={{
              backgroundImage: "url(/images/grid-bg.svg)",
              backgroundRepeat: "repeat",
            }}
            className="absolute inset-0 opacity-50"
          />
          <motion.div
            className="absolute -inset-y-8 inset-x-2 rounded-xl border border-white/25 bg-white/5 p-4 shadow-[inset_0_0_8px_rgba(255,255,255,0.2)] backdrop-blur-xl will-change-transform"
            initial={{ scaleX: 1.5 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <div className="absolute inset-x-0 bottom-0" />
          </motion.div>
          <div className="relative flex rounded bg-gradient-to-b from-gray-100 to-gray-200 p-2 shadow-xl shadow-black/10">
            <div className="rounded-xs w-full border">
              <Image
                sizes="100vw"
                src={hero}
                alt="hero"
                width={840}
                height={572}
                decoding="async"
                loading="lazy"
                className="rounded-sm"
                style={{ width: "100%", height: "auto", color: "transparent" }}
              />
            </div>
            <div className="absolute inset-2 z-[3] rounded-md shadow-[inset_0_4px_8px_rgba(0,0,0,.1),0_-1px_2px_rgba(0,0,0,.2),0_1px_2px_rgba(255,255,255,1)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
