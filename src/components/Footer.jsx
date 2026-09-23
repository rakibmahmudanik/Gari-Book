import Button from "./ui/Button";

import garibookLogo from "../assets/Garibook_Logo_white.svg";
import sslFooter from "../assets/sslfooter.png";

export default function Footer() {
  // Footer Link Data Array
  const footerColumns = [
    {
      title: "garibook",
      links: [
        { name: "About Us", href: "#" },
        { name: "Customer Reviews", href: "#" },
        { name: "Career", href: "#" },
        { name: "Newsroom", href: "#" },
        { name: "Garibook Map", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Intercity Rental", href: "#" },
        { name: "Airport Pick and Drop", href: "#" },
        { name: "Hourly Rental", href: "#" },
        { name: "Vehicle Management System (VMS)", href: "#" },
      ],
    },
    {
      title: "Become Our Partner",
      links: [
        { name: "Become a Smart Driver", href: "#" },
        { name: "Become a member of Garibook Club", href: "#" },
        { name: "Garibook Business for Corporate Travel", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#050b14] text-white ">
      <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-full mx-auto">
          {/* Top 4 Columns Grid (Links & Contacts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Column 1, 2, 3: Mapped from Array (Mobile: 1 col, MD+: 2 cols for links inside) */}
            {footerColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold tracking-wider">
                  {col.title}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="relative inline-block text-sm sm:text-base text-slate-400 hover:text-accent transition-colors duration-800 group py-1"
                      >
                        {link.name}
                        {/* Underline slide effect from left to right */}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-800 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Column 4: Contacts */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold tracking-wider">Contacts</h4>
              <div className="flex flex-col space-y-3 text-sm sm:text-base text-slate-400">
                <a
                  href="mailto:support@garibook.com"
                  className="relative inline-block hover:text-accent transition-colors duration-800 group w-fit"
                >
                  support@garibook.com
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-800 group-hover:w-full"></span>
                </a>
                <p className="leading-relaxed">
                  Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road-144,
                  Gulshan, Dhaka-1212
                </p>
                <a
                  href="tel:+8809678112233"
                  className="relative inline-block hover:text-accent transition-colors duration-800 group w-fit"
                >
                  +88 09 678 11 22 33
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-800 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section: Download App & Product By / Powered By with Images */}
          <div className="flex flex-wrap gap-20 items-center justify-between py-10 border-y border-slate-800 mb-10">
            {/* Left: Download App */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Download Our <br /> Garibook Mobile App
              </h3>
              <div>
                <Button className="bg-primary text-white hover:bg-blue-600 px-8 py-4">
                  Download App
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-20 lg:mr-15 ">
              {/* Middle: A Product By */}
              <div className="flex flex-col space-y-3">
                <span className="text-2xl font-bold tracking-widest text-white uppercase">
                  A Product By
                </span>
                <div className="flex items-center gap-4">
                  <img
                    src="https://garibook.com/assets/images/nrb/nrb_no_background.svg"
                    alt="NRB Solution Ltd."
                    className="h-20 w-auto object-contain"
                  />
                  <div>
                    <h5 className="font-bold text-lg">NRB Solution Ltd.</h5>
                    <a
                      href="#visit"
                      className="relative inline-block text-md text-accent hover:text-accent transition-colors duration-800 group"
                    >
                      Visit Website →
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-800 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Powered By */}
              <div className="flex flex-col space-y-3">
                <span className="text-2xl font-bold tracking-widest text-white uppercase">
                  Powered By
                </span>
                <div className="flex items-center gap-4">
                  <img
                    src="https://garibook.com/assets/images/clients/link3-two.png"
                    alt="Link 3 Technologies"
                    className="h-20 w-auto object-contain"
                  />
                  <div>
                    <h5 className="font-bold text-lg">Link 3 Technologies</h5>
                    <a
                      href="#visit"
                      className="relative inline-block text-md text-accent hover:text-accent transition-colors duration-800 group"
                    >
                      Visit Website →
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-800 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Garibook Logo, Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <img
                src={garibookLogo}
                alt="Garibook"
                className="h-12 w-auto object-contain"
              />
              <a
                href="#terms"
                className="relative text-lg inline-block hover:text-accent transition-colors duration-800 group"
              >
                Terms & Conditions
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-800 group-hover:w-full"></span>
              </a>
              <a
                href="#privacy"
                className="relative text-lg inline-block hover:text-accent transition-colors duration-800 group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-800 group-hover:w-full"></span>
              </a>
            </div>

            <div>
              <span className="text-lg">
                Trade license number: <br /> TRAD/DNCC/013806/2024
              </span>
            </div>

            <div>
              <span className="text-lg">
                © 2026 Garibook. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={sslFooter} />
      </div>
    </footer>
  );
}
