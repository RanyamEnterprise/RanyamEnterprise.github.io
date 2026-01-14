import React, { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { siteData } from "../data/siteData";
import Container from "../components/common/Container";
import Burst from "../components/common/Burst";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = useMemo(
    () => siteData.projects.completed.find((p) => p.slug === slug),
    [slug]
  );

  const [active, setActive] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  const images = project.images || [];
  const activeSrc = images[Math.min(active, images.length - 1)] || images[0];

  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex items-start justify-between gap-6">
            <div>
              <Link
                to="/projects"
                className="text-xs font-semibold tracking-[0.26em] uppercase text-gray-900/60 hover:text-gray-900"
              >
                ← Back to projects
              </Link>

              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
                {project.name}
              </h1>

              <p className="mt-3 text-sm leading-7 text-gray-900/70 max-w-2xl">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-xs tracking-[0.26em] uppercase text-gray-900/60">
                <span>{project.status}</span>
                <span>•</span>
                <span>{project.location}</span>
              </div>
            </div>

            <Burst className="h-16 w-16 text-gray-900/65 hidden md:block" />
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="bg-white shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Main image */}
              <div className="lg:col-span-9 border-b lg:border-b-0 lg:border-r border-gray-900/10">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={activeSrc}
                    alt={project.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="lg:col-span-3 min-w-0">
                <div className="p-6 md:p-8">
                  <h2 className="text-sm font-extrabold tracking-widest uppercase text-gray-900">
                    Gallery
                  </h2>

                  <div className="mt-5 grid grid-cols-3 lg:grid-cols-2 gap-3">
                    {images.map((img, idx) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActive(idx)}
                        className={`aspect-[4/3] overflow-hidden bg-gray-100 border ${
                          idx === active
                            ? "border-gray-900"
                            : "border-gray-900/10 hover:border-gray-900/30"
                        }`}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-gray-900/10 pt-6">
                    <p className="text-xs tracking-[0.26em] uppercase text-gray-900/60">
                      Note
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray-900/70">
                      Replace these gallery images with actual site photos for {project.name}.
                      You can add as many images as needed in <code>siteData.js</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
