import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
const PDF_FILE_URL = "http://localhost:3000/rules_regulations.pdf";

const RuleRegulations = () => {
  return (
    <>
      <Navbar />

      <div
        class="page-title-section gnsection my-5"
        data-overlay="0.7"
        style={{ backgroundColor: "#0c3c53" }}
      >
        <div class="page-title">
          <div class="container">
            <h2 class="text-light text-center" style={{ paddingTop: 45 }}>
              This Panchayat is located in{" "}
              <span class="text-info fw-bold">Vadgam Taluka</span>
            </h2>
          </div>
        </div>
        <div class="page-breadcrumb position-static">
          <div class="container">
            <ul
              class="breadcrumb justify-content-center fw-bold pt-2"
              style={{ backgroundColor: "#0c3c53" }}
            >
              <li>
                <NavLink to={`/`}>
                  {" "}
                  Home <i class="bi bi-chevron-double-right"></i>{" "}
                </NavLink>
              </li>
              <li class="text-white" style={{ paddingLeft: 5 }}>
                Rules and Regulations
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section
        id="why-us"
        class="why-us section-bg p-5"
        style={{ marginTop: -43 }}
      >
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="section-title">
                <h2>Rules and Regulations</h2>
              </div>
              <p class="px-5">
                <h3>The Gujarat Panchayats Act, 1993</h3>
                <br />
                <i class="bi bi-chevron-double-right text-info"></i> Panchayati
                Raj is a form of government at the village level where each
                village is responsible for its own activities. The Amendment Act
                of 1992 contains provision for passing the powers and
                responsibilities to the panchayat for preparation of plans for
                economic development and social justice.
                <br />
                <br />
                <i class="bi bi-chevron-double-right text-info"></i> Panchayati
                Raj (Council of five officials) is the system of local
                self-government of villages in rural India as opposed to urban
                and suburban municipalities.
                <br />
                <br />
                <i class="bi bi-chevron-double-right text-info"></i> The leader
                of the Panchayat was often called the president mukhiya,
                sarpanch, or pradhan, an elected or generally acknowledged
                position. The modern Panchayati Raj of India and its gram
                panchayats are neither to be confused with the traditional
                system nor with the extra-constitutional khap panchayats (or
                caste panchayats) found in parts of northern India.
                <br />
                <br />
                <a
                  href="https://en.wikipedia.org/wiki/Panchayati_raj"
                  target={"_blank"}
                >
                  <button type="button" class="btn btn-primary col-lg-5">
                    Visit the Website
                  </button>
                </a>
                <a href={PDF_FILE_URL} download>
                  <button
                    type="button"
                    class="btn btn-primary col-lg-5"
                    style={{ marginLeft: "4rem" }}
                  >
                    Download PDF
                  </button>
                </a>
              </p>
            </div>

            <div class="col-lg-5 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1 r_r mt-5">
              <img src={require("./image/r_r.png")} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RuleRegulations;