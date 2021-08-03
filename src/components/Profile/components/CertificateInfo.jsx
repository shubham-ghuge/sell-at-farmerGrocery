import React, { useState } from "react";
import { Jumbotron } from "../../Jumbotron";
import { Chart, Loader } from "../../Icons";
import { useProfileContext } from "../../../contexts/useProfileContext";
import axios from "axios";

function CertificateInfo() {
  const { certificates, setCertificates } = useProfileContext();
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function addToCertificates() {
    if (
      /https:\/\/realfarmer\-quiz.netlify.app\/certificate\/+/.test(userInput)
    ) {
      setLoading(true);
      setCertificates((curr) => [...curr, userInput]);
      try {
        await axios.post(
          "https://farmers-grocery-v2.herokuapp.com/farmers/profile",
          { certificates: certificates }
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setError(false);
        setUserInput("");
      }
    } else {
      userInput !== "" && setError(true);
    }
  }
  return (
    <>
      <h2 className="fsz-3 mt-5" id="#wallet">
        <span className="icon-title">
          <Chart />
        </span>
        <span className="ml-2">Certificates</span>
      </h2>
      <p className="c-base mt-2">
        Learn About
        <span className="mx-1">
          <a href="https://realfarmer-quiz.netlify.app/" target="blank">
            Agriculture
          </a>
        </span>
        and be a Real Farmer!
      </p>
      {certificates.length === 0 ? (
        <Jumbotron
          heading="You Haven't linked any certificates yet!"
          text={`Open https://realfarmer-quiz.netlify.app/ & play some quizzes and get a certificate which you can showcase!`}
        />
      ) : (
        certificates.map((i, idx) => (
          <div className="list-container" key={idx}>
            <div className="list-item">
              <a href={i} target="_blank">
                {i}
              </a>
            </div>
          </div>
        ))
      )}
      <div
        id="addCertificates"
        className="d-flex ai-flex-end"
        style={{ flexWrap: "wrap" }}
      >
        <label className="flex-column mt-4 ai-flex-start">
          <span className="mb-2">Add certificate URL</span>
          <input
            type="url"
            placeholder="https://realfarmer-quiz.netlify.app/certificate/your_email_id"
            className="input w-sm-40 mr-lg-4"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <button
          className="btn-primary mt-sm-4"
          onClick={addToCertificates}
          disabled={loading}
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
      {error && (
        <span className="c-danger" style={{ fontSize: ".9rem" }}>
          entered url is not correct
        </span>
      )}
    </>
  );
}
export { CertificateInfo };
