import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Burst from "../components/common/Burst";

export default function HomeProjects({ data }) {
  const running = data.projects.running;
  const completed = data.projects.completed;

  // show only a few completed projects on homepage
  const featuredCompleted = completed.slice(0, 4);

  return (
    <section id="home-projects" className="py-16 md:py-24">
      <Container>
        {/* Header row */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-gray-900/60">
              Projects
            </p>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight uppercase text-gray-900">
              Our work
            </h2>
          </div>
          <Burst className="h-16 w-16 text-gray-900/65 hidden md:block" />
        </div>

        {/* Running project (featured) */}
        <div className="mt-10 bg-white shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* image */}
            <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-gray-900/10">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={running.images?.[0]}
                  alt={running.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* content */}
            <div className="lg:col-span-4 min-w-0">
              <div className="p-6 md:p-8">
                <p className="text-xs tracking-[0.26em] uppercase text-gray-900/60">
                  Running project
                </p>

                <h3 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight uppercase break-words">
                  {running.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-900/70">
                  {running.description}
                </p>

                {/* mini gallery */}
                {Array.isArray(running.images) && running.images.length > 1 ? (
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {running.images.slice(0, 3).map((img) => (
                      <div key={img} className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-7 flex items-center gap-4">
                  {/* Optional: if you want running project detail page later, link it here */}
                  <Link
                    to="/projects#running"
                    className="text-sm font-semibold tracking-widest uppercase text-gray-900/80 hover:text-gray-900"
                  >
                    View running project →
                  </Link>

                  <div className="ml-auto">
                    <Button as="a" href="/projects" variant="dark">
                      See more
                    </Button>
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-900/55">
                  See completed projects and full details on the Projects page.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Completed projects small cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCompleted.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
              <Card className="overflow-hidden h-full">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={p.images?.[0]}
                    alt={p.name}
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] tracking-[0.26em] uppercase text-gray-900/60">
                    {p.location}
                  </p>
                  <h4 className="mt-2 text-sm font-extrabold tracking-widest uppercase text-gray-900">
                    {p.name}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-900/70 line-clamp-3">
                    {p.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-gray-900/70">
                    View details →
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="max-w-2xl text-sm leading-7 text-gray-900/70">
            We deliver waterproofing and protective coating solutions for major government,
            infrastructure, industrial and institutional projects across India.
          </p>
          <Link to="/projects" className="inline-flex">
            <Button as="a" href="/projects" variant="dark">
              See all projects
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
