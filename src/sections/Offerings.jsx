import React from "react";
import Container from "../components/common/Container";
import Burst from "../components/common/Burst";

export default function Offerings({ data }) {
  return (
    <section id="offerings" className="bg-[#2c2f35] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24">
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
              What we
              <br />
              offer
            </h2>
            <div className="mt-10">
              <span className="block h-1 w-20 bg-white/80" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.offerings.map((o) => (
                <div key={o.title} className="flex gap-5">
                  <Burst className="h-11 w-11 text-white/85 shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold tracking-widest uppercase">
                      {o.title}
                    </h3>
                    <ul className="text-sm leading-7 text-white/70 list-disc pl-5 space-y-1">
                      {o.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-lg font-extrabold tracking-widest uppercase">
                Key Advantages
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {data.advantages.map((a) => (
                  <div key={a.title} className="bg-white/5 border border-white/10 p-5">
                    <p className="text-sm font-extrabold tracking-widest uppercase">
                      {a.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/70">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs tracking-[0.26em] uppercase text-white/60">
                    Our Mission
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/75">{data.mission}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.26em] uppercase text-white/60">
                    Our Vision
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/75">{data.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

