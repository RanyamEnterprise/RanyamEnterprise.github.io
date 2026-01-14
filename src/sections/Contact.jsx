import React, { useMemo, useState } from "react";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

function buildWhatsAppLink({ phoneE164, text }) {
  // WhatsApp expects phone without + and without spaces/dashes
  const phone = phoneE164.replace(/[^\d]/g, "");
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export default function Contact({ data }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // ✅ IMPORTANT: WhatsApp requires a number with country code.
  // You gave: +91-9520648978
  const whatsappNumber = useMemo(
    () => data.contact.phone,
    [data.contact.phone]
  );

  const draftText = useMemo(() => {
    const name = `${form.firstName}${
      form.lastName ? ` ${form.lastName}` : ""
    }`.trim();

    return [
      `Hello ${data.brand},`,
      ``,
      `I would like to inquire about waterproofing solutions.`,
      ``,
      `Name: ${name || "-"} `,
      `Email: ${form.email || "-"} `,
      `Message: ${form.message || "-"} `,
      ``,
      `Thanks!`,
    ].join("\n");
  }, [form.firstName, form.lastName, form.email, form.message, data.brand]);

  const whatsappHref = useMemo(() => {
    return buildWhatsAppLink({
      phoneE164: whatsappNumber,
      text: draftText,
    });
  }, [whatsappNumber, draftText]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    // Open WhatsApp draft in a new tab/window
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <SectionTitle title="Contact us" />
            <p className="mt-6 text-sm leading-7 text-gray-900/70">
              Protect your investment with {data.brand}’ innovative
              waterproofing solutions.
            </p>

            <div className="mt-10 space-y-3 text-sm text-gray-900/75">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {data.contact.phone}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {data.contact.email}
              </p>
              <p>
                <span className="font-semibold">Office:</span>{" "}
                {data.contact.address}
              </p>
            </div>

            <div className="mt-10">
              <span className="block h-1 w-20 bg-gray-900/70" />
            </div>

            {/* Optional quick WhatsApp CTA */}
            <div className="mt-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold tracking-widest uppercase text-gray-900/80 hover:text-gray-900"
              >
                Message us on WhatsApp →
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white shadow-soft p-6 md:p-10">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest uppercase text-gray-900/70">
                      Name*
                    </label>
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={onChange}
                      className="w-full border border-gray-900/10 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest uppercase text-gray-900/70">
                      Last name
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={onChange}
                      className="w-full border border-gray-900/10 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/20"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-900/70">
                    Your email*
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full border border-gray-900/10 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/20"
                    placeholder="Your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-900/70">
                    Message*
                  </label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className="w-full border border-gray-900/10 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/20"
                    placeholder="Enter your message"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                  {/* This button submits and opens WhatsApp */}
                  <Button
                    type="submit"
                    variant="dark"
                    className="w-full sm:w-auto"
                  >
                    Send via WhatsApp
                  </Button>

                  {/* Optional secondary: preview/force open link */}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-900/20 px-5 py-3 md:px-7 md:py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gray-50 transition"
                  >
                    Preview draft
                  </a>
                </div>

                <p className="text-xs text-gray-900/55">
                  No backend needed. On submit, we open WhatsApp with a
                  pre-filled message — you just tap Send.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
