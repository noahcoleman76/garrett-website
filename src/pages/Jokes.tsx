import React, { useMemo } from "react";
import { jokesAndPickups } from "../data/jokes-pickup";

const Jokes: React.FC = () => {
  // Shuffle jokes & pick-ups once when the page loads
  const shuffledItems = useMemo(() => {
    const array = [...jokesAndPickups];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          height: "60vh",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          backgroundImage: "url('/images/garrett-backflip.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <h1
          className="position-relative fw-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          These are the jokes, people!
        </h1>
      </section>

      {/* Intro Card */}
      <section className="py-5 bg-light">
        <div className="container">
          <div
            className="card shadow-sm p-4"
            style={{ border: "none", borderRadius: "12px" }}
          >
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Garrett's Favorite Jokes
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              For a few months, Garrett and his dad would call each other and
              share some of the best (and worst) dad jokes with each other.
              Garrett kept these on a note on his phone along with a few pick‑up
              lines. We hope you have a good laugh!
            </p>
          </div>
        </div>
      </section>

      {/* Jokes & Pick‑Up Lines */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {shuffledItems.map((item, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div
                  className="card h-100 shadow-sm p-3"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                    backgroundColor: "#ffffff", // all cards white
                  }}
                >
                  <h5
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: item.type === "joke" ? "#dd783f" : "#007bff", // joke orange, pickup blue
                      fontWeight: "bold",
                    }}
                  >
                    {item.type === "joke" ? "Joke" : "Pick‑Up Line"}
                  </h5>
                  <p style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jokes;
