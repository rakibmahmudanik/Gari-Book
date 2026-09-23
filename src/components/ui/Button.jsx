import { FaArrowRight } from "react-icons/fa";

const Button = ({
  children,
  href,
  className = "bg-accent text-black hover:opacity-90",
}) => {
  const buttonContent = (
    <button
      className={`inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-semibold shadow-lg transition-all duration-400 hover:scale-105 active:scale-95 group cursor-pointer ${className}`}
    >
      <span className="mr-10 text-xl">{children}</span>
      <FaArrowRight className="text-sm group-hover:translate-x-1.5 duration-300" />
    </button>
  );

  return <div>{href ? <a href={href}>{buttonContent}</a> : buttonContent}</div>;
};

export default Button;
