import React, { useEffect, useRef, useState } from "react";
import { Image } from "antd";
import Dev7 from "../../assets/hinh7.jpg";
import Dev8 from "../../assets/hinh8.jpg";
import Dev9 from "../../assets/hinh9.jpg";
import Dev10 from "../../assets/hinh10.jpg";

// ==== DATA ====
const achievementsTopRight = [
  { count: 26, label: "Chương trình đào tạo đã hoàn thành" },
];

const achievementsTop = [
  { count: 80, label: "Dự án thực chiến đã triển khai" },
  { count: 120, label: "Buổi seminar & workshop đã tổ chức" },
];

const achievementsBottom = [
  {
    count: 380,
    label: "Học viên DevPlus đã tốt nghiệp và",
    suffix: "#readytowork",
  },
  { count: 5000, label: "Sinh viên đã tham gia các chương trình School Tour" },
];

// ==== COUNTER ====
type CounterProps = { end: number; duration?: number; className?: string };
const Counter: React.FC<CounterProps> = ({
  end,
  duration = 1600,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const [played, setPlayed] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played) {
          let cur = 0;
          const step = () => {
            cur += end / (duration / 16);
            if (cur < end) {
              setCount(Math.floor(cur));
              requestAnimationFrame(step);
            } else {
              setCount(end);
              setPlayed(true);
            }
          };
          step();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end, duration, played]);

  const fmt = (n: number) => n.toLocaleString("vi-VN");
  return (
    <span ref={ref} className={className}>
      {fmt(count)}
    </span>
  );
};

// ==== SECTION ====
const Achievement: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FCF7F6] overflow-hidden">
      {/* decor: big pale circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[30%] -top-[35%] w-[70rem] h-[70rem] rounded-full
                   bg-[radial-gradient(circle_at_50%_50%,#FFD6C2_0%,#FFE6DA_55%,transparent_60%)]
                   opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[28%] -bottom-[40%] w-[85rem] h-[85rem] rounded-full
                   bg-[radial-gradient(circle_at_50%_50%,#FFD6C2_0%,#FFE6DA_55%,transparent_60%)]
                   opacity-60"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 pt-10 pb-14">
        {/* Title */}
        <h2 className="text-[#21408A] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase mb-8 md:mb-12">
          Thành tựu nổi bật
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* IMAGES RIGHT (on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-6">
              <Image
                src={Dev7}
                alt="Dev7"
                preview={false}
                className="rounded-2xl border-2 border-[#FF7A45] object-cover w-full h-40 md:h-48 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              />
              <Image
                src={Dev8}
                alt="Dev8"
                preview={false}
                className="rounded-2xl border-2 border-[#FF7A45] object-cover w-full h-40 md:h-48 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <Image
                src={Dev9}
                alt="Dev9"
                preview={false}
                className="rounded-2xl border-2 border-[#FF7A45] object-cover w-full h-40 md:h-56 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              />
              <Image
                src={Dev10}
                alt="Dev10"
                preview={false}
                className="rounded-2xl border-2 border-[#FF7A45] object-cover w-full h-40 md:h-56 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>

          {/* TEXT / NUMBERS LEFT */}
          <div className="order-1 lg:order-2">
            {/* top single big number */}
            <div className="flex items-start md:items-center gap-6 mb-8 md:mb-10">
              {achievementsTopRight.map((it, idx) => (
                <div key={idx} className="text-left">
                  <div className="text-[#FF7A45] text-5xl md:text-6xl font-extrabold leading-none">
                    <Counter end={it.count} />+
                  </div>
                  <p className="text-xl md:text-2xl font-semibold mt-2 leading-snug">
                    {it.label}
                  </p>
                </div>
              ))}
            </div>

            {/* two metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-12">
              {achievementsTop.map((it, idx) => (
                <div key={idx}>
                  <div className="text-[#FF7A45] text-4xl md:text-5xl font-extrabold leading-none">
                    <Counter end={it.count} />+
                  </div>
                  <p className="text-lg md:text-2xl font-semibold mt-2 leading-snug">
                    {it.label}
                  </p>
                </div>
              ))}
            </div>

            {/* bottom two metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {achievementsBottom.map((it, idx) => (
                <div key={idx}>
                  <div className="text-[#21408A] text-3xl md:text-5xl font-extrabold leading-none">
                    <Counter end={it.count} />+
                  </div>
                  <p className="text-base md:text-xl font-semibold mt-2 leading-snug">
                    {it.label}{" "}
                    {it.suffix && (
                      <span className="italic text-[#FF7A45]">
                        @{it.suffix}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
