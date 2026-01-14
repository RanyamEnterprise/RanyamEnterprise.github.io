import React from "react";
import Container from "../components/common/Container";
import Burst from "../components/common/Burst";

export default function Testimonials({ data }) {
  return (
    <section id="feedback" className="bg-[#2c2f35] text-white py-16 md:py-24">
      <Container>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
          Client feedback
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.testimonials.map((t) => (
            <div key={t.name} className="flex gap-5">
              <Burst className="h-12 w-12 text-white/85 shrink-0 mt-1" />
              <div>
                <p className="text-lg font-extrabold tracking-wide">{t.name}</p>
                <p className="mt-4 text-sm leading-7 text-white/75">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
