import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Burst from "../components/common/Burst";

export default function ProjectsPage() {
  const running = siteData.projects.running;
  const completed = siteData.projects.completed;

  return (
    <main>
      <section className="py-14 md:py-20">
        <Container>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.26em] uppercase text-gray-900/60">
                Projects
              </p>
              <h1 className="mt-3 text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
                Our Work
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-900/70">
                Explore our running and completed waterproofing projects. Each project includes a photo gallery
                (replace images with your real site photos).
              </p>
            </div>
            <Burst className="h-16 w-16 text-gray-900/65 hidden md:block" />
          </div>
        </Container>
      </section>

      {/* Running */}
      <section id="running" className="pb-16 md:pb-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
            Running Project
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white shadow-soft overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={running.images[0]}
                  alt={running.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <Card className="p-6 md:p-8">
                <p className="text-xs tracking-[0.26em] uppercase text-gray-900/60">
                  {running.status}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight uppercase break-words">
                  {running.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-900/70">
                  {running.description}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {running.images.slice(0, 3).map((img) => (
                    <div key={img} className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Completed */}
      <section id="completed" className="bg-[#dbe4ea] py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
            Completed Projects
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {completed.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
                <Card className="overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.26em] uppercase text-gray-900/60">
                      {p.location}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold tracking-widest uppercase">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-900/70">
                      {p.description}
                    </p>
                    <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-gray-900/70">
                      View project →
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
