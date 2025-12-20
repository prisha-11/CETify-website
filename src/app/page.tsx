import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata = {
  title: "CETify | Analytics for MHT-CET Coaching Institutes",
  description:
    "CETify is a B2B assessment and analytics platform built exclusively for MHT-CET coaching institutes to track batch performance and improve outcomes.",
  openGraph: {
    title: "CETify | Built for MHT-CET Coaching Institutes",
    description:
      "A faculty-focused analytics platform to identify batch weaknesses and improve CET performance.",
    url: "https://cetify.in",
    siteName: "CETify",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
