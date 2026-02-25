import ScrollUp from "@/components/Common/ScrollUp";

export const metadata = {
  title: "CETify | Performance Intelligence for CET Aspirants",
  description:
    "CETify helps CET aspirants identify topic-wise weaknesses and improve percentile with clear action plans.",
  openGraph: {
    title: "CETify | Performance Intelligence for CET Aspirants",
    description:
      "Upload mock test results, get a weakness breakdown, and improve percentile with data-backed decisions.",
    url: "https://cetify.in",
    siteName: "CETify",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-rose-500 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Know Exactly What&apos;s Reducing Your CET Percentile.
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              Upload your mock test results.
              <br />
              Get topic-wise weakness breakdown and a clear improvement roadmap.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfg8IQVyqkLv76b7654WZ690KaAJRRu6-70BIuY6D2If3yb0A/viewform"
              className="inline-block rounded-md bg-white px-8 py-4 text-lg font-bold text-violet-700 shadow-xl transition hover:bg-gray-100"
            >
              Reserve Beta Spot - Rs.99
            </a>
            <p className="mt-4 text-sm text-white/85">
              Limited to first 20 serious CET aspirants. Full refund if not satisfied.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Giving Mock Tests Isn&apos;t Enough.
            </h2>
            <div className="mb-8 space-y-3 text-lg text-body-color dark:text-body-color-dark">
              <p>You see your score.</p>
              <p>You check rank.</p>
              <p>Then you move on.</p>
            </div>
            <p className="mb-6 text-xl font-semibold text-black dark:text-white">But:</p>
            <div className="mb-8 space-y-4 text-lg text-body-color dark:text-body-color-dark">
              <p>Which chapters are consistently hurting your percentile?</p>
              <p>Are you losing marks due to weak concepts or silly mistakes?</p>
              <p>What should you revise first to maximize improvement?</p>
            </div>
            <div className="rounded-r-lg border-l-4 border-violet-600 bg-gray-50 p-6 dark:bg-white/5">
              <p className="text-xl text-black dark:text-white">
                Most students <span className="font-bold">guess</span>.
              </p>
              <p className="text-xl font-bold text-violet-700 dark:text-violet-400">
                CETify shows you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-dark md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              What CETify Does
            </h2>
            <p className="text-xl text-body-color dark:text-body-color-dark">
              Performance Intelligence for CET Aspirants
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Topic-wise accuracy breakdown",
              "Subject-level strength vs weakness map",
              "Identify high-impact improvement areas",
              "Track progress across mock tests",
              "Clear action focus for next 7 days",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border-2 border-transparent bg-white p-6 shadow-sm transition hover:border-violet-400 dark:bg-white/5"
              >
                <p className="text-lg font-semibold text-black dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-5xl">
              Serious About Increasing Your Percentile?
            </h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfg8IQVyqkLv76b7654WZ690KaAJRRu6-70BIuY6D2If3yb0A/viewform"
              className="inline-block rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-12 py-5 text-xl font-bold text-white shadow-xl transition hover:from-violet-700 hover:to-indigo-700"
            >
              Reserve My Spot Now
            </a>
            <p className="mt-8 text-base text-body-color dark:text-body-color-dark">
              Prefer email?{" "}
              <a href="mailto:admin@cetify.in" className="font-semibold text-primary hover:underline">
                admin@cetify.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
