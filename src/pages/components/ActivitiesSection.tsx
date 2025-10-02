import React from "react";

import CircleDecor from "../../assets/elements/8.png";
import CircleBlue from "../../assets/elements/4.png";
import CircleOrange from "../../assets/elements/3.png";
import CircleDonut from "../../assets/elements/5.png";

import image from "../../assets/intro/1.png";

const ActivitiesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fcf7f6] overflow-hidden">
      {/* ===== Background left ===== */}
      <img
        src={CircleDecor}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none
          absolute -left-[16rem]
          w-[24rem] opacity-90 rotate-300
        "
      />
      <img
        src={CircleBlue}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none absolute right-[20rem] md:top-[4rem] w-[4rem] hidden lg:block
        "
      />

      <img
        src={CircleOrange}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none absolute right-20 md:top-[7rem] w-[8rem] hidden lg:block
        "
      />

      <img
        src={CircleDonut}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none absolute left-0 bottom-0 w-[6rem]
        "
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Title */}
        <h2 className="text-center text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight">
          HOẠT ĐỘNG
        </h2>

        {/* 2 columns layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left column – Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-[14px] border-[4px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
              <img
                src={image}
                alt="activity"
                className="h-auto w-full max-w-[30rem] rounded-[10px] object-contain"
              />
            </div>
          </div>

          {/* Right column – Text */}
          <div className="md:col-span-7 text-sm sm:text-base md:text-lg leading-relaxed">
            <p className="text-[#274593]">
              DevPlus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo
              cơ hội thực tập và đầu ra việc làm cho sinh viên.
            </p>

            <p className="mt-4 text-[#FF854D] font-semibold">
              Tham gia bài đánh giá ứng dụng AI thực tiễn, giúp bạn:
            </p>

            <ul className="mt-2 space-y-2 text-[#274593] list-disc pl-6">
              <li>Hiểu rõ điểm mạnh và hạn chế khi sử dụng AI</li>
              <li>
                Xác định vị trí hiện tại trong hành trình phát triển năng lực số
              </li>
              <li>
                Nhận bản đồ năng lực cá nhân hóa kèm định hướng theo ngành học
              </li>
              <li>
                Đây là bước khởi đầu giúp sinh viên làm chủ công cụ, nâng cao tư
                duy, và sẵn sàng chuyển mình trong kỷ nguyên AI.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
