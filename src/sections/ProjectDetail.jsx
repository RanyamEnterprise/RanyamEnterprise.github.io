import React from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function ProjectDetail({ data }) {
  const running = data.projects.running;

  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="bg-white shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-9 border-b lg:border-b-0 lg:border-r border-gray-900/10">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={running.image}
                  alt={running.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* min-w-0 + overflow-hidden prevents any text from spilling */}
            <div className="lg:col-span-3 min-w-0">
              <div className="p-6 md:p-8 min-w-0 overflow-hidden">
                <h3 className="text-3xl font-extrabold tracking-tight uppercase break-words">
                  {running.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-900/70">{running.desc}</p>

                <div className="mt-10 grid grid-cols-2 gap-6 items-end min-w-0">
                  <p className="font-extrabold text-gray-900/35 tracking-tight leading-[0.85] text-5xl md:text-6xl">
                    {running.calloutLeftLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>

                  <Button as="a" href="#contact" variant="dark" className="w-full min-w-0">
                    Learn more
                  </Button>
                </div>

                <p className="mt-6 text-xs leading-6 text-gray-900/60">{running.calloutRight}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
