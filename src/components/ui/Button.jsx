const Button = ({ children }) => {
  return (
    <div>
      <button
        onClick={() => console.log("Login clicked")}
        className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
