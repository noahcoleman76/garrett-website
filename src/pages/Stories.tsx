import React from "react";
import MemoryCard from "../components/MemoryCard";
import { memories } from "../data/memories";

const Stories: React.FC = () => {
    return (
        <>
            <div className="position-relative">
                {/* Page Content */}
                <div>
                    {/* Hero Section */}
                    <section
                        className="position-relative d-flex align-items-center justify-content-center text-white"
                        style={{
                            height: "65vh",
                            width: "100vw",
                            marginLeft: "calc(-50vw + 50%)",
                            backgroundImage: "url('/images/garrett-surfing.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Gradient Overlay for Hero */}
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
                            }}
                        />

                        {/* Hero Text */}
                        <div className="position-relative text-center">
                            <h1
                                className="fw-bold mb-3"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "4.5rem",
                                    lineHeight: "1.2",
                                    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                                }}
                            >
                                Garrett Nichols
                            </h1>
                            <p
                                style={{
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontSize: "2rem",
                                    margin: "0",
                                    textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                                }}
                            >
                                2002 – 2024
                            </p>
                        </div>

                        {/* Portrait */}
                        <div className="position-absolute bottom-0 start-0 m-4">
                            <div
                                style={{
                                    display: "inline-block",
                                    padding: "6px",
                                    background: "white",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                }}
                            >
                                <img
                                    src="/images/garrett-portrait.jpg"
                                    alt="Garrett"
                                    style={{
                                        width: "250px",
                                        borderRadius: "8px",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Submit Memories Section */}
                    <section className="bg-white py-5 text-center shadow-sm">
                        <div className="container">
                            <h2
                                className="mb-3"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    color: "#dd783f",
                                }}
                            >
                                We'd love to hear from you
                            </h2>
                            <p
                                className="lead mb-4"
                                style={{
                                    fontFamily: "'Open Sans', sans-serif",
                                    maxWidth: "700px",
                                    margin: "0 auto",
                                }}
                            >
                                Please share any memories or stories you have with Garrett. You
                                can share what it means to you to <strong>#LiveLikeGarrett</strong>{" "}
                                or leave a message for him. Any pictures are appreciated.
                            </p>
                            <a
                                href="/message"
                                className="btn btn-lg text-white px-5 py-3"
                                style={{
                                    backgroundColor: "#dd783f",
                                    borderRadius: "50px",
                                    transition: "background-color 0.3s ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#c56b35")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#dd783f")
                                }
                            >
                                <i className="bi bi-pencil-fill me-2"></i> Leave a Message
                            </a>
                        </div>
                    </section>

                    {/* Stories & Memories */}
                    <section className="py-5">
                        <div className="container">
                            <h2
                                className="mb-4 text-center"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Stories & Memories
                            </h2>
                            {memories.map((memory, index) => (
                                <MemoryCard
                                    key={index}
                                    name={memory.name}
                                    date={memory.date}
                                    message={memory.message}
                                    imageFolder={memory.folder}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Stories;
