import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-[#0a0a0a]"
      style={{
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
      }}
    >
      <div
        className="relative w-full text-white pt-20 pb-10 px-6 overflow-hidden"
        style={{
          borderTopLeftRadius: "80px",
          borderTopRightRadius: "80px",
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        {/* ===== Background Map & Gradient ===== */}
        <div>
          <div
            className="absolute inset-0 bg-[url('/images/worldmap.png')] bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
            aria-hidden="true"
          ></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-sky-100/10 to-transparent pointer-events-none"></div>

          <div className="relative max-w-6xl mx-auto">
            {/* ===== Top Logo + Social Icons Section ===== */}
            <div className="relative w-full flex items-center justify-between pt-0 pb-8 border-b border-white/10 overflow-hidden">
              {/* Left: Logo */}
              <div className="relative z-10 flex items-center">
                <img
                  src="/images/header_logo_white.webp"
                  alt="PragetX Logo"
                  className="w-[140px] md:w-[180px]"
                />
              </div>

              {/* Right: Social Icons */}
              <div className="relative z-10 flex items-center gap-5 text-gray-300">
                <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-all" />
                <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-all" />
                <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-all" />
                <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-all" />
                <Youtube className="w-5 h-5 hover:text-white cursor-pointer transition-all" />
              </div>
            </div>

            {/* ===== Office Locations Section ===== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-left">
              {/* India Office */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/india.svg"
                    alt="India Flag"
                    className="w-6 h-6 rounded-sm border border-white/10"
                  />
                  <h3 className="text-lg font-semibold">India (HQ)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  D-509 & D-510, Swati Clover, Shilaj Circle, SP Ring Road,
                  Thaltej, Ahmedabad - 380054
                </p>
              </div>

              {/* US Office */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/united-states.svg"
                    alt="US Flag"
                    className="w-6 h-6 rounded-sm border border-white/10"
                  />
                  <h3 className="text-lg font-semibold">US Office</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  PO Box 531, Centerville, Atlanta GA 31028
                </p>
              </div>

              {/* Brazil Office */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/images/brazil.svg"
                    alt="Brazil Flag"
                    className="w-6 h-6 rounded-sm border border-white/10"
                  />
                  <h3 className="text-lg font-semibold">Brazil Office</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rua Castelo 239 Foz do Iguaçu Paraná, Mr. Marco Antônio,{" "}
                  <br />
                  +55 45 8802-5573
                </p>
              </div>
            </div>

            {/* ===== Contact Row (Glass Effect) ===== */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              {[
                {
                  icon: <MapPin className="w-4 h-4 text-white/70" />,
                  label: "PragetX",
                },
                {
                  icon: <Phone className="w-4 h-4 text-white/70" />,
                  label: "+91-8487890773",
                },
                {
                  icon: <Mail className="w-4 h-4 text-white/70" />,
                  label: "hello@pragetx.com",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full w-full md:w-auto transition-all hover:bg-white/15"
                >
                  {item.icon}
                  <span className="text-sm font-medium text-gray-200">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ===== Navigation Links (with dividers) ===== */}
            <div className="flex flex-wrap justify-center items-center text-gray-300 text-sm mb-10">
              {[
                "About Us",
                "Portfolio",
                "Careers",
                "How We Work",
                "Referral Programs",
                "Become A Partner",
                "Blogs",
                "Contact Us",
              ].map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <a
                    href="#"
                    className="px-3 hover:text-white transition-all duration-200"
                  >
                    {item}
                  </a>
                  {idx !== arr.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* ===== Bottom Section ===== */}
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs gap-4">
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <Linkedin className="w-4 h-4 hover:text-white cursor-pointer" />
                <Instagram className="w-4 h-4 hover:text-white cursor-pointer" />
                <Facebook className="w-4 h-4 hover:text-white cursor-pointer" />
                <Youtube className="w-4 h-4 hover:text-white cursor-pointer" />
                <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>

              <p className="text-gray-500 text-xs text-center md:text-right w-full md:w-auto">
                © 2025{" "}
                <span className="text-sky-400 font-semibold hover:underline">
                  PragetX
                </span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer End Image (Logo Background) ===== */}
      <div className="relative w-full flex justify-center items-center py-10">
        <img
          src="/images/header_logo_white.webp"
          alt="PragetX Footer Logo"
          className="w-[320px] md:w-[1220px] opacity-[0.2] select-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
