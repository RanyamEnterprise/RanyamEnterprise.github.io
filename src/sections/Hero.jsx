import React from "react";
import Container from "../components/common/Container";
import Burst from "../components/common/Burst";
import Button from "../components/common/Button";

export default function Hero({ data }) {
  return (
    <section className="relative">
      <Container>
        {/* ✅ relative wrapper so STRUCTURE can extend into image area */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-14 md:py-20">
          {/* ✅ STRUCTURE behind, can cross into image */}
          <div className="hidden lg:block pointer-events-none select-none absolute left-[18rem] top-[4.6rem] z-0">
            <p className="whitespace-nowrap uppercase font-extrabold tracking-tight leading-none text-gray-900/25 text-[clamp(80px,11vw,180px)]">
              STRUCTURE
            </p>
          </div>

          {/* Left */}
          <div className="lg:col-span-5 space-y-8 relative z-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.26em] uppercase text-gray-900/70">
              {data.tagline}
            </p>

            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-none">
                Time to
              </h1>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-none">
                Protect
              </h1>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-none">
                Your
              </h1>
            </div>

            <div className="pt-8 space-y-4">
              <span className="block h-1 w-20 bg-gray-900/70" />
              <p className="max-w-md text-sm leading-7 text-gray-900/70">
                {data.overview}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Button as="a" href="#contact" variant="dark">
                Get in touch
              </Button>
              <Button as="a" href="#offerings" variant="light">
                View offerings
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 relative z-10">
            <div className="absolute -top-6 right-6">
              <Burst className="h-14 w-14 text-gray-900/70" />
            </div>

            <div className="bg-white shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80"
                  alt="Waterproofing work"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-6 text-gray-900/60">
              <a href="#contact" className="text-sm hover:text-gray-900 transition">
                Phone
              </a>
              <a href="#contact" className="text-sm hover:text-gray-900 transition">
                Email
              </a>
              <a href="#contact" className="text-sm hover:text-gray-900 transition">
                Address
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
