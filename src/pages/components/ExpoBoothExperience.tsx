import speaker from "../../assets/intro/4.png";
import CircleDonut from "../../assets/elements/5.png";
import CircleDecor from "../../assets/elements/8.png";
import CircleOrange from "../../assets/elements/3.png";

const ExpoBoothExperience = () => {
  return (
    <section className="relative w-full bg-[#fcf7f6] overflow-hidden min-h-[58rem]">
      <img
        src={CircleDonut}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none
          absolute w-[4rem] opacity-90 left-18
        "
      />

      <img
        src={CircleDecor}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none
          absolute w-[26rem] opacity-90 -left-[14rem] bottom-0 -rotate-45
        "
      />

      <img
        src={CircleOrange}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none
          absolute w-[12rem] opacity-90 -right-10 bottom-[4rem]
        "
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-6xl pb-14 pt-10 px-6 sm:pb-20 sm:pt-16 md:pt-20 lg:pt-24 lg:px-8">
        {/* Title */}
        <h1 className="text-center text-[28px] font-extrabold leading-tight text-[#21408A] sm:text-[32px] md:text-[40px]">
          TRẢI NGHIỆM GIAN HÀNG DOANH NGHIỆP
        </h1>

        <div className="mx-auto mt-7 grid max-w-6xl gap-8 sm:mt-9 md:mt-10 md:grid-cols-2 md:gap-12 items-center">
          <div className="text-[15.5px] leading-7 sm:text-[16px] text-justify lg:text-right">
            <p className="italic text-[#fe7743]">
              Khám phá khu vực trưng bày và tương tác trực tiếp với các sản
              phẩm, công nghệ đến từ các doanh nghiệp đồng hành cùng chương
              trình.
            </p>

            <div className="mt-4">
              <p className="font-semibold text-[#fe7743]">
                Tại đây, sinh viên sẽ có cơ hội:
              </p>
              <p className="text-[#1e3a8a]">
                Trải nghiệm sản phẩm công nghệ thực tế ngay tại sự kiện
              </p>

              <p className="text-[#1e3a8a]">
                Tìm hiểu cách công nghệ được triển khai trong môi trường doanh
                nghiệp
              </p>
              <p className="text-[#1e3a8a]">
                Giao lưu, trao đổi cùng đại diện các công ty công nghệ – từ
                startup đến doanh nghiệp lớn
              </p>
            </div>

            <p className="mt-5 font-semibold text-[#fe7743]">
              Đây là cơ hội để sinh viên thực hành – phản biện – kết nối và bắt
              đầu hành trình khám phá năng lực bản thân trong kỷ nguyên AI.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="rounded-[14px] border-[4px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
              <img
                src={speaker}
                alt="Gian hàng doanh nghiệp"
                className="h-auto w-full max-w-[30rem] rounded-[10px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpoBoothExperience;
