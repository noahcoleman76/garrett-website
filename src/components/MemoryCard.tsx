import React, { useEffect, useState } from "react";

interface MemoryCardProps {
  name: string;
  date: string;
  message: string;
  imageFolder: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  name,
  date,
  message,
  imageFolder,
}) => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Attempt to load images dynamically
    const maxImages = 20; // Max number to check
    const loadedImages: string[] = [];

    let promises: Promise<void>[] = [];
    for (let i = 1; i <= maxImages; i++) {
      const imagePath = `/${imageFolder}/image${i}.jpeg`;
      const img = new Image();
      const promise = new Promise<void>((resolve) => {
        img.onload = () => {
          loadedImages.push(imagePath);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = imagePath;
      });
      promises.push(promise);
    }

    Promise.all(promises).then(() => setImages(loadedImages));
  }, [imageFolder]);

  return (
    <>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {/* Name and Date */}
          <div className="d-flex justify-content-between mb-2">
            <span className="fw-bold">{name}</span>
            <small className="text-muted">
              {date}
            </small>
          </div>

          {/* Message */}
          <p className="card-text" style={{ whiteSpace: "pre-line" }}>
            {message}
          </p>

          {/* Images */}
          {images.length > 0 && (
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${name} Memory ${i + 1}`}
                  style={{
                    height: "250px",
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                  onClick={() => setModalImage(img)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.7)" }}
          onClick={() => setModalImage(null)}
        >
          <div className="modal-dialog modal-dialog-centered">
            <img
              src={modalImage}
              alt="Full Size"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MemoryCard;
