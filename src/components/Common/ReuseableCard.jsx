import { FaArrowRight } from "react-icons/fa";

export default function ReuseableCard({
  image,
  date,
  title,
  description,
  publisherLogo,
  readUrl,
  showFooter = true,
}) {
  return (
    <div className="flex flex-col justify-between bg-transparent min-w-[320px] sm:min-w-95 max-w-120 shrink-0 cursor-pointer group">
      {/* Top Image */}
      <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-border shadow-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col grow space-y-3">
        <span className="text-xs sm:text-sm text-muted-foreground font-medium">
          {date}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>

      {/* Footer (Logo & Read Article - Optional via showFooter prop) */}
      {showFooter && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/40">
          <div className="h-10 flex items-center">
            {publisherLogo ? (
              <img
                src={publisherLogo}
                alt="Publisher"
                className="h-full w-auto object-contain"
              />
            ) : (
              <span className="font-bold text-sm">News Portal</span>
            )}
          </div>
          <a
            href={readUrl || "#"}
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
          >
            <span>Read Article</span>
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      )}
    </div>
  );
}
