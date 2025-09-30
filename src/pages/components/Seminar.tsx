import React from "react";

import CircleTwoAround from "../../assets/elements/6.png";
import CircleOrange from "../../assets/elements/3.png";
import CircleDonut from "../../assets/elements/5.png";
import CircleBlue from "../../assets/elements/4.png";

import image from "../../assets/intro/2.png";
import image2 from "../../assets/intro/3.png";

const Seminar: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fcf7f6] overflow-hidden min-h-[50rem]">
      {/* ===== Background left ===== */}

      <img
        src={CircleDonut}
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
          pointer-events-none select-none absolute -left-14 bottom-[40rem] w-[10rem]
        "
      />

      <img
        src={CircleBlue}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none absolute left-14 bottom-[32rem] w-[4rem]
        "
      />

      <img
        src={CircleTwoAround}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none absolute -right-[16rem] bottom-[30rem] w-[26rem]
        "
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Title */}
        <h2 className="text-center text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight flex justify-center gap-2">
          SEMINAR: <p className="text-[#fe7743]">#ready4AI</p>
        </h2>

        {/* 2 columns layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left column – Image */}
          <div className="md:col-span-7 text-sm sm:text-base md:text-lg leading-relaxed lg:text-right flex flex-col lg:justify-center gap-4 lg:gap-8">
            <p className="text-[#274593]">
              Được truyền cảm hứng từ chuyên gia và người thật – việc thật, đang
              tiên phong ứng dụng AI trong ngành Công nghệ Thông tin
            </p>
            <p className="text-[#274593]">
              Cập nhật góc nhìn thực tiễn về sự phát triển và ứng dụng AI trong
              học tập, công việc và phát triển phần mềm
            </p>
            <p className="text-[#274593]">
              Phân tích tác động của AI đến các vai trò nghề nghiệp trong ngành
              CNTT, đặc biệt là lập trình viên và kỹ sư phần mềm
            </p>
            <p className="text-[#274593]">
              Định hình lại tư duy nghề nghiệp và xác định kỹ năng cốt lõi cần
              chuẩn bị để thích nghi và phát triển bền vững trong kỷ nguyên AI
            </p>
          </div>

          {/* Right column – Text */}

          <div className="md:col-span-5 flex justify-center">
            <div className="rounded-[14px] border-[4px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
              <img
                src={image}
                alt="activity"
                className="h-auto w-full max-w-[30rem] rounded-[10px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="relative w-full overflow-hidden">
        {/* ===== Content container ===== */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          {/* Title */}
          <h2 className="text-center text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight">
            Trải nghiệm – Kết nối cộng đồng
          </h2>

          {/* 2 columns layout */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left column – Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="rounded-[14px] border-[4px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
                <img
                  src={image2}
                  alt="experience"
                  className="h-auto w-full max-w-[30rem] rounded-[10px] object-contain"
                />
              </div>
            </div>

            {/* Right column – Text */}
            <div className="md:col-span-7 text-sm sm:text-base md:text-lg leading-relaxed">
              <ul className="space-y-2 text-[#274593] list-disc pl-6">
                <li>
                  Trải nghiệm đánh giá năng lực cùng AI, tham gia hoạt động nhóm
                  thực tiễn, và kết nối cùng mentor, diễn giả, doanh nghiệp.
                </li>
                <li>
                  Làm việc nhóm – cùng giải quyết thử thách trong thời gian thực
                </li>
                <li>
                  Giao lưu cùng mentor và các khách mời đã ứng dụng AI vào công
                  việc
                </li>
                <li>
                  Mở rộng kết nối với cộng đồng sinh viên, chuyên gia và các tổ
                  chức đang dẫn đầu chuyển đổi số
                </li>
              </ul>

              <p className="mt-4 text-[#FF854D] font-semibold">
                Đây là cơ hội để sinh viên thực hành – phản biện – kết nối và
                bắt đầu hành trình khám phá năng lực bản thân trong kỷ nguyên
                AI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Seminar;
