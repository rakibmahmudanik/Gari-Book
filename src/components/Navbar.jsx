import { useEffect, useState } from "react";
import { MdTranslate } from "react-icons/md";
import logoImage from "../assets/gaibook-logo-icon.svg";
import "../index.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Earn With Garibook");
  const [isDark, setIsDark] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isDarkModeActive =
      document.documentElement.classList.contains("dark");
    setIsDark(isDarkModeActive);
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Earn With Garibook", href: "#earn" },
    { name: "Garibook Business", href: "#business" },
    { name: "Garibook Club", href: "#club" },
    { name: "Campaign", href: "#campaign" },
    { name: "Blogs", href: "#blogs" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background text-foreground border-b border-border shadow-sm transition-colors duration-200">
        <div className="flex justify-end">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-3 py-2 mt-2 mr-2 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <span>
                <MdTranslate size={20} />
              </span>
              <span>{isActive ? "বাংলা" : "English"}</span>
            </div>
          </button>
        </div>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group select-none"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <a href="#" className="flex items-center gap-2">
                <img
                  src={logoImage}
                  alt="Garibook Logo"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="text-2xl font-light">garibook</span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-base font-medium">
              {navLinks.map((link) => {
                const isTabActive = activeTab === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveTab(link.name)}
                    className={`relative py-1 transition-colors duration-200 group ${
                      isTabActive
                        ? "text-primary font-semibold"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-primary transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full"></span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={() => console.log("Login clicked")}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-95 transition-all duration-200"
              >
                login
              </button>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Theme"
                className="p-2 rounded-full bg-muted text-muted-foreground"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
                className="p-2.5 rounded-lg text-foreground hover:bg-muted"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
            <div className="w-4/5 max-w-sm bg-background border-l border-border h-full p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <a href="#" className="flex items-center gap-2">
                      <img
                        src={logoImage}
                        alt="Garibook Logo"
                        className="h-10 w-auto object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="text-2xl font-light">garibook</span>
                    </a>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close Menu"
                    className="p-2 rounded-lg text-muted-foreground hover:bg-muted"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col space-y-3 pt-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveTab(link.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`py-2.5 px-4 rounded-xl transition-colors ${
                        activeTab === link.name
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-border">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    console.log("Login clicked");
                  }}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg text-center"
                >
                  login
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
