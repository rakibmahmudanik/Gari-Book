import ReuseableCard from "./Common/ReuseableCard";

export default function BeyondDestinations() {
  const blogsData = [
    {
      id: 1,
      date: "September 15, 2026",
      title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
      description:
        "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা...",
      image:
        "https://garibookadmin.com/admin/assets/images/blogs/6aabc714e2a79.webp",
      readUrl: "#",
    },
    {
      id: 2,
      date: "September 20, 2026",
      title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
      description: "সিলেটের দর্শনীয় স্থান",
      image:
        "https://garibookadmin.com/admin/assets/images/blogs/260920175045_g3UDrxr4bz.webp",
      readUrl: "#",
    },
    {
      id: 3,
      date: "September 20, 2026",
      title: "নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
      description: "নওগাঁর দর্শনীয় স্থান",
      image:
        "https://garibookadmin.com/admin/assets/images/blogs/260920175752_kbpbDIIOGX.webp",
      readUrl: "#",
    },
  ];

  return (
    <section className="w-full bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-full mx-auto">
        {/* Section Header with Title, Description and "Show All Blogs" link */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-2">
              Beyond Destinations
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Discover travel hacks, guides, and inspirations for your next
              intercity trip with Garibook.
            </p>
          </div>

          {/* Show All Blogs Link */}
          <a
            href="#all-blogs"
            className="text-lg sm:text-base font-bold text-primary hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Show All Blogs</span>
            <span>→</span>
          </a>
        </div>

        {/* 3 Columns Grid Container using Reusable NewsCard with showFooter={false} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogsData.map((blog, i) => (
            <a href={blogsData.readUrl} key={blog.id} className="w-full">
              <div data-aos="fade-up" data-aos-delay={`${300 * i + 200}`}>
                <ReuseableCard
                  image={blog.image}
                  date={blog.date}
                  title={blog.title}
                  description={blog.description}
                  showFooter={false}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
