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
                    <section className="hero-section position-relative text-white">
                        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" />

                        {/* Portrait */}
                        <div className="hero-portrait">
                            <div className="portrait-frame">
                                <img
                                    src="/images/garrett-portrait.jpg"
                                    alt="Garrett"
                                    className="portrait-img"
                                />
                            </div>
                        </div>

                        {/* Hero Text */}
                        <div className="position-relative text-center hero-text">
                            <h1 className="fw-bold mb-3 hero-title g-title">Garrett Nichols</h1>
                            <p className="hero-subtitle">2002 – 2024</p>
                        </div>
                    </section>


                    {/* Submit Memories Section */}
                    <section className="bg-white py-5 text-center shadow-sm">
                        <div className="container">
                            <h2 className="mb-3 section-heading">
                                We'd love to hear from you
                            </h2>
                            <p className="lead mb-4 section-subtext">
                                Please share any memories or stories you have with Garrett. You
                                can share what it means to you to <strong>#LiveLikeGarrett</strong> or
                                leave a message for him. Any pictures are appreciated.
                            </p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSc-Lc8quJE-lSdMErH7XMewjVPhMtVRtifh64sRfeqPJU1RmA/viewform"
                                className="btn btn-lg text-white px-5 py-3 leave-message-btn"
                            >
                                <i className="bi bi-pencil-fill me-2"></i> Leave a Message
                            </a>
                        </div>
                    </section>

                    {/* Stories & Memories */}
                    <section className="py-5">
                        <div className="container">
                            <h2 className="mb-4 text-center section-heading">
                                Stories & Memories
                            </h2>
                            {[...memories]
                                .sort(
                                    (a, b) =>
                                        new Date(b.date).getTime() - new Date(a.date).getTime()
                                )
                                .map((memory, index) => (
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
