import React from "react";
import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Burst from "../components/common/Burst";

export default function CompletedProjects({ data }) {
  const completed = data.projects.completed;

  return (
    <section id="projects-completed" className="bg-[#dbe4ea] py-16 md:py-24">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
            Completed projects
          </h2>
          <Burst className="h-16 w-16 text-gray-900/65 hidden md:block" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {completed.map((p) => (
            <Card key={p.name} className="overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold tracking-widest uppercase">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-900/70">{p.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-6">
          <p className="max-w-xl text-sm leading-7 text-gray-900/70">
            We’ve delivered waterproofing solutions across major government and infrastructure projects,
            maintaining consistent quality and long-term protection.
          </p>
          <Button as="a" href="#contact" variant="dark">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
