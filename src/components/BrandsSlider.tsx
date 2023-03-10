"use client";

import { motion } from "framer-motion";

const MockIcon = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.025, x: 8, y: -8 }}
      className="z-[3] cursor-pointer"
    >
      <div className="relative h-32 w-32">
        <div
          className="absolute inset-0 z-[2] flex items-center justify-center rounded-[22px]"
          style={{
            boxShadow:
              "-70px 70px 65px rgb(44 48 56 / 0.07), -30px 30px 30px rgb(44 48 56 / 0.06), -15px 15px 15px rgb(44 48 56 / 0.05), -10px 10px 8px rgb(44 48 56 / 0.04), -4px 4px 4px rgb(44 48 56 / 0.03), -2px 2px 2px rgb(44 48 56 / 0.02)",
            backgroundColor: "white",
          }}
        >
          <div className="scale-100">
            <svg
              fill="none"
              height="80"
              viewBox="0 0 79 80"
              width="79"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="m65.3048.712708h-52.2424c-7.18238 0-13.0624 5.878072-13.0624 13.063092v52.2458c0 7.1814 5.88002 13.0584 13.0624 13.0584h52.2424c7.1824 0 13.0625-5.877 13.0625-13.0584v-52.2458c0-7.18502-5.8801-13.063092-13.0625-13.063092zm-1.1872 59.969092c0 2.2826-1.8696 4.1465-4.1543 4.1465h-41.5628c-2.2837 0-4.1532-1.8639-4.1532-4.1465v-41.5641c0-2.2837 1.8695-4.1534 4.1532-4.1534h41.5628c2.2847 0 4.1543 1.8697 4.1543 4.1534zm-14.2451-12.4741c0 1.3105-1.0687 2.3758-2.3721 2.3758h-16.622c-1.307 0-2.3721-1.0653-2.3721-2.3758v-16.6216c0-1.3059 1.0651-2.3735 2.3721-2.3735h16.622c1.3034 0 2.3721 1.0676 2.3721 2.3735z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "-70px 70px 65px rgb(44 48 56 / 0.07), -30px 30px 30px rgb(44 48 56 / 0.06), -15px 15px 15px rgb(44 48 56 / 0.05), -10px 10px 8px rgb(44 48 56 / 0.04), -4px 4px 4px rgb(44 48 56 / 0.03), -2px 2px 2px rgb(44 48 56 / 0.02)",
            backgroundColor: "white",
          }}
          className="absolute inset-0 z-[1] translate-y-1 -translate-x-1 rounded-[22px]"
        />
      </div>
    </motion.div>
  );
};

export const BrandsSlider = () => {
  const mock = Array.from({ length: 30 }, (_, i) => i);

  const items = mock.reduce((acc, _, i) => {
    if (i % 3 === 0) {
      acc.push(mock.slice(i, i + 3));
    }
    return acc;
  }, [] as number[][]);

  return (
    <section className="relative mx-auto h-[450px] max-w-[2000px] overflow-hidden sm:h-[650px]">
      <div className="absolute -left-[470px] top-[134px]">
        <motion.div
          className="origin-top-left space-y-3 will-change-transform"
          animate={{
            x: 0,
            y: 0,
            transition: {
              repeat: Infinity,
              duration: 90,
              ease: "linear",
            },
          }}
          initial={{ x: -2000, y: -500 }}
          style={{ rotateX: "20deg", rotateZ: "-20deg", skewX: "20deg" }}
          onAnimationComplete={() => items.push(...items)}
        >
          {items.map((row, i) => {
            const spacers = Array.from({ length: i }, (_, i) => i);
            return (
              <div key={i} className="flex gap-6">
                {spacers.map((_, i) => (
                  <div key={i} className="w-32 shrink-0" />
                ))}
                {row.map((_, j) => {
                  return <MockIcon key={j} />;
                })}
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="absolute inset-y-0 left-0 z-10 hidden w-1/4 bg-gradient-to-l from-transparent to-white 2xl:block" />
      <div className="absolute inset-y-0 right-0 z-10 hidden w-1/4 bg-gradient-to-r from-transparent to-white 2xl:block" />
    </section>
  );
};
