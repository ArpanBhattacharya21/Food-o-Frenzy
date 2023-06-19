import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="feature-box col-lg-4">
                  <h3 style={{ color: "#800020" }}>About Us</h3>
                  <p style={{ color: "#B37A4C" }}>
                  Food-o-Frenzy is an online food ordering platform that connects customers with a wide range of
                   delicious food options. With a user-friendly website, customers can effortlessly browse through
                    various cuisines, explore enticing food options, and place their orders with just a few clicks.
                     The platform prioritizes personalized experiences, offering features such as customer profiles,
                      saved delivery addresses, secure payment methods, and comprehensive order history. Food-o-Frenzy
                       values quality, customer satisfaction, and data security. The dedicated team continually innovates
                        to enhance the platform, improve user experience, and expand offerings. With Food-o-Frenzy,
                         ordering food becomes convenient, seamless, and enjoyable.
                  </p>
                </div>

                <div className="feature-box col-lg-4">
                  <h3 style={{ color: "#800020" }}>Contact Us</h3>
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/ananya-seth-646099205/"
                    style={{ textDecoration: "None", color: "#B37A4C" }}
                    target="_blank"
                  >
                    Ananya Seth
                  </a>
                  <br />
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/arpan-bhattacharya-91342a1b9"
                    style={{ textDecoration: "None", color: "#B37A4C" }}
                    target="_blank"
                  >
                    Arpan Bhattacharya
                  </a>
                </div>

                <div className="feature-box col-lg-4">
                  <h3 style={{ color: "#800020" }}>Our Vision</h3>
                  <p style={{ color: "#B37A4C" }}>
                  At Food-o-Frenzy, our vision is to revolutionize the way people experience food by providing
                   a seamless and delightful platform for online food ordering. We aim to become the go-to
                    destination for customers seeking convenient access to a wide variety of delicious meals.
                     We envision a future where ordering food is not just a necessity but an exciting and
                      enjoyable experience. With our user-friendly interface, personalized features, and
                       commitment to quality, we strive to exceed customer expectations and become a trusted
                        partner in their culinary journey. Our ultimate vision is to create a food ecosystem
                         that brings joy, convenience, and satisfaction to every customer we serve.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="col-md-4 d-flex align-items-center justify-content-center w-100">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></Link>
            <span className="text-muted">© 2023 Food-o-Frenzy, Inc</span>
          </div>
        </footer>
      </div>
    </>
  );
}
