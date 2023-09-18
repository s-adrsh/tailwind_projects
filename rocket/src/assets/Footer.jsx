import React from "react";

function Footer() {
  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2> Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way <br />
          M G Junction, New Delhi 0477-245344 <br />
          Email:{" "}
          <a href="mailto:inquiries@acmerockets.com">
            {" "}
            Inquires@AcmeRockets.com
          </a>
          <br />
          Phone: <a href="tel:+91 8844883343"> +91 8442489765</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a class="hover:opacity-90" href="#rockets">
            Our Rockets
          </a>
          <a class="hover:opacity-90" href="#testimonials">
            Testimonials
          </a>
          <a class="hover:opacity-90" href="#contact">
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2 mt-4">
          <p className="text-right">
            Copyright &copy;
            <span id="year">2022</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
