import React from "react";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Burst from "../components/common/Burst";

export default function LatestProject({ data }) {
  const running = data.projects.running;

  return (
    <section id="projects-running" className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-6">
            <SectionTitle kicker="Projects" title="Running Project" />
          </div>

          <div className="lg:col-span-8">
            <div className="flex items-start justify-between gap-6">
              <Burst className="h-14 w-14 text-gray-900/70" />
              <p className="max-w-md text-sm leading-7 text-gray-900/70">
                We are currently executing waterproofing and protective coating work with strict QA checks,
                ensuring durability and long-term asset protection.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-9 bg-white shadow-soft overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={running.image}
                    alt={running.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-3 space-y-6">
                {running.thumbs.map((t) => (
                  <div key={t} className="bg-white shadow-soft overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={t}
                        alt="Project thumbnail"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm font-extrabold tracking-widest uppercase text-gray-900">
              {running.name}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
