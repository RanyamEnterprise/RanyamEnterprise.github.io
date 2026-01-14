import React from "react";
import Container from "../components/common/Container";

export default function Process({ data }) {
  return (
    <section className="bg-[#dbe4ea] py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
              Process
              <br />
              of service
            </h2>
            <div className="mt-10">
              <span className="block h-1 w-20 bg-gray-900/70" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {data.process.map((p) => (
              <div key={p.step} className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-2">
                  <p className="text-6xl md:text-7xl font-extrabold text-gray-900/35 leading-none">
                    {p.step}
                  </p>
                </div>
                <div className="col-span-10">
                  <p className="text-sm font-extrabold tracking-widest uppercase text-gray-900">
                    {p.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-900/70">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
