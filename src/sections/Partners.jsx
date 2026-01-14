import React from "react";
import Container from "../components/common/Container";

export default function Partners({ data }) {
  return (
    <section className="bg-[#2c2f35] text-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
              Partners
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/70">
              To deliver consistent results, we coordinate with trusted suppliers and trained applicators.
              (Replace placeholders with your actual partner brands.)
            </p>
            <div className="mt-10">
              <span className="block h-1 w-20 bg-white/80" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {data.partners.map((p) => (
                <div key={p} className="border border-white/10 bg-white/5 px-6 py-10">
                  <p className="text-2xl font-extrabold tracking-tight">{p}</p>
                  <p className="mt-2 text-xs tracking-[0.26em] uppercase text-white/60">
                    Ranyam network
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
