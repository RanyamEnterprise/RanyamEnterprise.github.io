import React from "react";
import Container from "../components/common/Container";

export default function Footer({ data }) {
  return (
    <footer className="border-t border-gray-900/10 py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase">{data.brand}</p>
            <p className="mt-2 text-xs text-gray-900/60">{data.tagline}</p>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-900/70">
            <a href="#offerings" className="hover:text-gray-900 transition">Offerings</a>
            <a href="#projects-running" className="hover:text-gray-900 transition">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
