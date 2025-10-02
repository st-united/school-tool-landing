import DuongTranImg from "../../assets/speakers/DuongTran.png";
import ThanhNhanImg from "../../assets/speakers/ThanhNhan.png";
import HoangPhamImg from "../../assets/speakers/HoangPham.jpg";
import QuocThaoImg from "../../assets/speakers/QuocThao.jpg";
import STEPHENWARRENImg from "../../assets/speakers/STEPHENWARREN.jpg";
import SourmackDarbouyImg from "../../assets/speakers/SourmackDarbouy.jpg";
import CircleDesign from "../../assets/elements/8.png";

const speakers = [
  {
    name: "Mr. Duong Tran",
    position: ["Head of Engineering Alpha Bits", "CTO Co-founder at SENCAR"],
    image: DuongTranImg,
    description: "Description of speaker",
  },
  { name: "Mr. Thanh Nhan", position: ["CEO Antee"], image: ThanhNhanImg },
  { name: "Mr. Hoang Pham", position: ["CEO Dev Plus"], image: HoangPhamImg },
  { name: "Mr. Quoc Thao", position: ["CEO AMIT"], image: QuocThaoImg },
  {
    name: "Mr. Stephen Warren",
    position: ["Senior Project Manager Company X"],
    image: STEPHENWARRENImg,
  },
  {
    name: "Mr. Sourmack Darbouy",
    position: ["Sales Director, APAC at Atility & Abeeway"],
    image: SourmackDarbouyImg,
  },
];

type SpeakerCardProps = {
  photo: string;
  name: string;
  roleLine1?: string;
  roleLine2?: string;
  className?: string;
  accent?: string; // hex hoặc tailwind color
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  photo,
  name,
  roleLine1,
  roleLine2,
  className = "",
  accent = "#FF7A45",
}) => {
  return (
    <div
      className={`relative rounded-2xl bg-[#f3a26d] text-white 
                  shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                  pt-36 px-4 pb-4
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]
                  transition-shadow w-[250px] ${className}`}
    >
      {/* khung ảnh nổi, responsive size */}
      <div className="absolute inset-x-0 -top-20 flex justify-center">
        <div
          className="rounded-2xl overflow-hidden border-4 w-full mx-4 h-[14rem]"
          style={{ borderColor: accent }}
        >
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* text */}
      <div className="mt-2 text-center">
        <div className="font-semibold text-base sm:text-lg leading-tight">
          {name}
        </div>
        {roleLine1 && (
          <div className="text-xs sm:text-sm opacity-95 leading-snug mt-1">
            {roleLine1}
          </div>
        )}
        {roleLine2 && (
          <div className="text-xs sm:text-sm opacity-95 leading-snug">
            {roleLine2}
          </div>
        )}
      </div>
    </div>
  );
};

const SpeakerSection = () => {
  return (
    <section className="relative w-full bg-[#fcf7f6] overflow-hidden min-h-[50rem]">
      <div className="hidden md:block pointer-events-none select-none  absolute top-10 -left-[10rem] w-100 h-100 rounded-full bg-[#F7F2F1] border border-white shadow-[0_20px_60px_rgba(0,0,0,0.15),0_-20px_60px_rgba(0,0,0,0.05)]" />
      <img
        src={CircleDesign}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -right-[26rem] top-4 w-[25rem] md:w-[40rem] rotate-90"
      />
      <div className="relation px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#ff6900] text-2xl sm:text-4xl lg:text-5xl font-bold text-center uppercase mb-[8rem]">
            Chuyên gia đồng hành
          </h2>

          {/* GRID responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-30 justify-items-center">
            {speakers.map((sp, i) => (
              <SpeakerCard
                key={i}
                photo={sp.image}
                name={sp.name}
                roleLine1={sp.position[0]}
                roleLine2={sp.position[1]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
