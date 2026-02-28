import ScrollUp from "@/components/Common/ScrollUp";
import Image from "next/image";

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

const sectionIcons = {
  problem: "\u{1F624}",
  analytics: "\u{1F4CA}",
  audience: "\u{1F9E0}",
  offer: "\u{1F4B0}",
  rocket: "\u{1F680}",
  alert: "\u2757",
};

const featureCards = [
  { icon: "\u{1F3AF}", text: "Topic-wise accuracy breakdown" },
  { icon: "\u{1F4C8}", text: "Subject-level strength vs weakness map" },
  { icon: "\u{1F680}", text: "Identify high-impact improvement areas" },
  { icon: "\u26A1", text: "Track progress across mock tests" },
  { icon: "\u2705", text: "Clear action focus for next 7 days" },
];

export default function Home() {
  return (
    <>
      <ScrollUp />

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-rose-500 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                Stuck at the Same CET Percentile?
                <br />
                See Exactly What&apos;s Holding You Back.
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                Upload your mock test results and get a clear improvement roadmap.
                <br />
                Built by a CET 87 percentile scorer who faced the same problem.
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

            <div className="mx-auto w-full max-w-xl lg:ml-auto">
              <div className="overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/images/hero/dashb.png"
                  alt="CETify mock test analysis dashboard preview"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-4xl">{sectionIcons.problem}</span>
              <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">The Real Problem</h2>
            </div>
            <h3 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Giving Mock Tests Isn&apos;t Enough.
            </h3>
            <div className="mb-8 space-y-3 text-lg text-body-color dark:text-body-color-dark">
              <p>You see your score.</p>
              <p>You check rank.</p>
              <p>Then you move on.</p>
            </div>
            <p className="mb-6 text-xl font-semibold text-black dark:text-white">But:</p>
            <div className="mb-8 space-y-4 text-lg text-body-color dark:text-body-color-dark">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-orange-500">{sectionIcons.alert}</span>
                <p>Which chapters are consistently hurting your percentile?</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-orange-500">{sectionIcons.alert}</span>
                <p>Are you losing marks due to weak concepts or silly mistakes?</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-orange-500">{sectionIcons.alert}</span>
                <p>What should you revise first to maximize improvement?</p>
              </div>
            </div>
            <div className="rounded-r-lg border-l-4 border-violet-600 bg-gray-50 p-6 dark:bg-white/5">
              <p className="text-xl text-black dark:text-white">
                Most students <span className="font-bold">guess</span>.
              </p>
              <p className="text-xl font-bold text-violet-700 dark:text-violet-400">CETify shows you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-dark md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">{sectionIcons.analytics}</span>
              <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">What CETify Does</h2>
            </div>
            <p className="text-xl text-body-color dark:text-body-color-dark">
              Performance Intelligence for CET Aspirants
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((item) => (
              <div
                key={item.text}
                className="rounded-xl border-2 border-transparent bg-white p-6 shadow-sm transition hover:border-violet-400 dark:bg-white/5"
              >
                <p className="mb-3 text-3xl">{item.icon}</p>
                <p className="text-lg font-semibold text-black dark:text-white">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-lg border-2 border-violet-200 bg-violet-50 p-8 text-center dark:border-violet-600/40 dark:bg-violet-900/20">
            <p className="text-xl font-semibold text-black dark:text-white">
              No lectures. No distractions.
              <br />
              <span className="text-violet-700 dark:text-violet-400">Just data-driven improvement.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-4xl">{sectionIcons.audience}</span>
              <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Who Is This For?</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-5 dark:border-green-500/40 dark:bg-green-900/20">
                <p className="text-lg text-black dark:text-white">
                  {"\u2705"} CET aspirants scoring <strong>70-95 percentile</strong>
                </p>
              </div>
              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-5 dark:border-green-500/40 dark:bg-green-900/20">
                <p className="text-lg text-black dark:text-white">
                  {"\u2705"} Students <strong>stuck at same score range</strong>
                </p>
              </div>
              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-5 dark:border-green-500/40 dark:bg-green-900/20">
                <p className="text-lg text-black dark:text-white">
                  {"\u2705"} Those <strong>serious about maximizing rank</strong>
                </p>
              </div>
              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-5 dark:border-green-500/40 dark:bg-green-900/20">
                <p className="text-lg text-black dark:text-white">
                  {"\u2705"} Students who want <strong>structured improvement</strong>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
              <p className="text-lg text-black dark:text-white">
                <strong>Not for you if:</strong> You just want free notes - not for them.
              </p>
              <p className="mt-2 text-lg font-semibold text-violet-700 dark:text-violet-400">
                You want serious students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-600 to-indigo-600 py-20 text-white md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl">{sectionIcons.offer}</span>
              <h2 className="text-center text-3xl font-bold md:text-4xl">Beta Offer</h2>
            </div>

            <h3 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              Early Beta Access - Rs.99 (Founding Users)
            </h3>

            <div className="rounded-xl bg-white/95 p-8 text-gray-900 shadow-xl md:p-10">
              <p className="mb-4 text-xl">
                <strong>CETify is currently in early beta.</strong>
              </p>

              <p className="mb-4 text-lg">We&apos;re accepting 20 serious CET aspirants to:</p>

              <div className="mb-8 space-y-3 text-lg">
                <p>{"\u{1F3C6}"} Test the product</p>
                <p>{"\u{1F465}"} Give feedback</p>
                <p>{"\u26A1"} Help shape future features</p>
              </div>

              <div className="mb-6 rounded-lg border-2 border-violet-300 bg-violet-50 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-violet-900">Beta price:</p>
                    <p className="text-3xl font-bold text-violet-700">Rs.99/month</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-600">After beta:</p>
                    <p className="text-2xl font-bold text-gray-500 line-through">Rs.199/month</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6">
                <p className="mb-2 text-lg font-bold text-green-900">{"\u{1F49A}"} Refund guarantee:</p>
                <p className="text-lg text-gray-700">
                  If you don&apos;t find it useful within first 7 days, full refund. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 text-4xl">{sectionIcons.rocket}</div>
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
