import React from "react";
import { siteData } from "../data/siteData";

import Hero from "../sections/Hero";
import Offerings from "../sections/Offerings";
import HomeProjects from "../sections/HomeProjects";
import Testimonials from "../sections/Testimonials";
import Process from "../sections/Process";
import Team from "../sections/Team";
import Partners from "../sections/Partners";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <main id="top">
      <Hero data={siteData} />
      <Offerings data={siteData} />

      {/* ✅ NEW: projects section on homepage */}
      <HomeProjects data={siteData} />

      <Testimonials data={siteData} />
      <Process data={siteData} />
      <Team data={siteData} />
      <Partners data={siteData} />
      <Contact data={siteData} />
    </main>
  );
}
