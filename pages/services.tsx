import Head from "next/head";
import About from "@/components/about";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";
import "@/app/globals.css";
import "../styles/welcome.css";

export default function Services() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };
  return (
    <>
      <Header />
      <section className="relative pt-[15vh] h-[84vh] bg-[url('/Images/web1.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h4 className="relative text-center z-1 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl mt-60">
          "Crafting Digital Excellence, One Pixel at a Time."
        </h4>
      </section>

      <section className="bg-[#255036] text-center">
        <div className="flex flex-col items-center">
          <div className="my-2">
            <button
              onClick={() => toggleSection("webDesign")}
              className="text-[#ffcf40] bg-[#255036] hover:bg-[#1e4630] focus:outline-none focus:ring-2 focus:ring-[#ffcf40]  font-medium rounded-lg text-5xl px-5 py-2.5 text-center inline-flex items-center w-90"
            >
              Web Site Design
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  openSection === "webDesign" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "webDesign" && (
              <div className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-700 mx-8">
                <p>
                  That’s more than any other local web design agency. We pride
                  ourselves on staying up to date with the latest web
                  technologies, and all of our websites boast a professional,
                  bespoke design. Our designers always ensure your website
                  aligns with your company’s current branding and image.
                </p>
                <p className="mt-2">
                  A KLWD website will not only look great but will also be easy
                  to navigate, presenting your products, services, and company
                  information to your customers in the most appropriate and
                  professional manner possible. The ultimate aim for your
                  website is to reflect your company’s ethos, values, and
                  personality. It should portray the quality and credibility of
                  your business. This is achieved through stellar design,
                  professional photography, and relevant, honest content.
                </p>
                <h2 className="mt-4 font-bold">
                  Why Choose KLWD for your Website Design?
                </h2>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Affordable: We offer the best value for money service in
                    West Norfolk. We promise to beat any like-for-like quote in
                    the area.
                  </li>
                  <li>
                    Fast: We won’t have you waiting around for months until your
                    website is online. Our average turnaround is just 4 weeks.
                  </li>
                  <li>
                    Friendly & Local: No geek speak, no internet babble. Born
                    and raised in King’s Lynn our staff are friendly and
                    approachable, and will explain things to you in easy to
                    understand language.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-2">
            <button
              onClick={() => toggleSection("E-Commerce")}
              className="text-[#ffcf40] bg-[#255036] hover:bg-[#1e4630] focus:outline-none focus:ring-2 focus:ring-[#ffcf40] font-medium rounded-lg text-5xl px-5 py-2.5 text-center inline-flex items-center w-90"
            >
              E-Commerce
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  openSection === "E-Commerce" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "E-Commerce" && (
              <div className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-700 mx-8">
                <p>
                  Want to start selling online? Or maybe give your current
                  e-store a boost? We’re here to help! From setting up your
                  online shop, picking out the perfect design, to managing
                  products and making sure folks can buy from you safely, we’ve
                  got you covered. KLWD have worked with multiple businesses to
                  build successful online e-commerce stores, from florists to
                  shed manufactures to fashion brands.
                </p>
                <p className="mt-2">
                  We start by understanding your goals. While you might think
                  you need a new website, it’s not always the case. By working
                  closely with you during our evaluation phase, we’ll figure out
                  if your current site does the job or if it’s time for a fresh
                  start. When you are looking to sell online, we will normally
                  suggest considering Shopify. It’s now the number one choice
                  for online store building and shows no sign of slowing down.
                  For those of you who prefer WordPress then WooCommerce can
                  also provide everything you need to sell products successfully
                  online.
                </p>
                <h2 className="mt-4 font-bold">
                  Our E-Commerce Websites Include:
                </h2>
                <ul className="list-disc pl-5 mt-2">
                  <li>Bespoke Design</li>
                  <li>Easy Order Management</li>
                  <li>Safe & Secure Checkouts</li>
                  <li>Mobile Shopping Friendly</li>
                  <li>SEO and Marketing Tools</li>
                  <li>Prompt Customer Support</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-2">
            <button
              onClick={() => toggleSection("hosting")}
              className="text-[#ffcf40] bg-[#255036] hover:bg-[#1e4630] focus:outline-none focus:ring-2 focus:ring-[#ffcf40] font-medium rounded-lg text-5xl px-5 py-2.5 text-center inline-flex items-center w-90"
            >
              Hosting & Emails
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  openSection === "hosting" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "hosting" && (
              <div className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-700 mx-8">
                <h3>Website Hosting</h3>
                <p>
                  Our packages are designed with flexibility in mind, ensuring
                  that you only pay for what you truly need. Plus, with our
                  robust infrastructure, expert support, and guaranteed uptime,
                  you can trust us to keep your site running smoothly, no matter
                  its size or complexity Set up is free and we manage any data
                  transfer from your old website. Being fully managed you don’t
                  have to worry about backing up your own data as we do it for
                  you on a daily basis.
                </p>
                <h3>Email Hosting</h3>
                <p className="mt-2">
                  We are now able to offer Microsoft 365 email inboxes to our
                  valued clients. Recognised for its unmatched stability,
                  Microsoft 365 ensures that small businesses can communicate
                  without interruptions, keeping them connected with their teams
                  and clients at all times. With its robust infrastructure,
                  you’re safeguarded against downtimes and technical hiccups.
                  Coupled with our dedicated support, you can trust us to
                  provide a dependable email experience that’s tailored for the
                  unique needs of small businesses
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-2">
            <button
              onClick={() => toggleSection("support")}
              className="text-[#ffcf40] bg-[#255036] hover:bg-[#1e4630] focus:outline-none focus:ring-2 focus:ring-[#ffcf40] font-medium rounded-lg text-5xl px-5 py-2.5 text-center inline-flex items-center w-90"
            >
              IT Support
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  openSection === "support" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "support" && (
              <div className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-700 mx-8">
                <p>
                  Looking for IT Support for your company? Our sister company
                  King’s Lynn IT Support can help.
                </p>
                <p className="mt-2">
                  King’s Lynn IT Support delivers IT support and computer
                  services throughout King’s Lynn and surrounding areas, for
                  business of all shapes and sizes. This includes PC purchasing
                  and installation, accounting software setup and assistance,
                  backups and antivirus.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-2">
            <button
              onClick={() => toggleSection("content")}
              className="text-[#ffcf40] bg-[#255036] hover:bg-[#1e4630] focus:outline-none focus:ring-2 focus:ring-[#ffcf40] font-medium rounded-lg text-5xl px-5 py-2.5 text-center inline-flex items-center w-90"
            >
              Content Writing
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  openSection === "content" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "content" && (
              <div className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-700 mx-8">
                <p>
                  Getting professional content for your website has never been
                  easier. KLWD’s expert copywriters have over 10 years of
                  know-how and experience. Having written for many different
                  industries our team can write about a wide range of subjects
                  from different business types.
                </p>
                <h2 className="mt-4 font-bold">
                  Why Choose KLWD for your Website Design?
                </h2>
                <p className="mt-2">
                  Copywriting doesn’t have to cost the earth. We believe that
                  every business, no matter their size, should have access to
                  high quality content services. At KLWD, we specialise in
                  curating words that not only inform but also engage, inspire,
                  and drive action. Enhance your online presence with crisp,
                  compelling content that communicates your brand’s ethos and
                  offerings effectively.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
