import React from "react";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

export default function Team({ data }) {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionTitle kicker={data.brand} title="Meet our team" />
            <p className="mt-6 text-sm leading-7 text-gray-900/70">
              Our strength lies in practical field expertise and system knowledge — from specification
              to application and support.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.team.map((m) => (
                <Card key={m.name} className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-lg font-extrabold tracking-widest uppercase">{m.name}</p>
                    <p className="mt-2 text-sm text-gray-900/65">{m.role}</p>
                  </div>
                </Card>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-900/60">
              Tip: Replace the team names/photos with your real staff profiles.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
