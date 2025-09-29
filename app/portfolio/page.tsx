"use client";
import React, { useState } from "react";

const categories = [
  {
    name: "CCTV Installations",
    subCategories: [
      {
        name: "Office CCTV",
        images: [
          { src: "/slider1.jpg", caption: "Office CCTV Example 1" },
          { src: "/slider2.jpg", caption: "Office CCTV Example 2" },
        ],
      },
      {
        name: "Home CCTV",
        images: [{ src: "/slider2.jpg", caption: "Home CCTV Example 1" }],
      },
    ],
  },
  {
    name: "General Networking",
    subCategories: [
      {
        name: "LAN Setup",
        images: [
          {
            src: "/general_networking/gn_1.jpg",
            caption: "LAN Setup Example 1",
          },
        ],
      },
      {
        name: "WiFi Setup",
        images: [{ src: "/slider1.jpg", caption: "WiFi Setup Example 1" }],
      },
    ],
  },
  {
    name: "Telephone System",
    subCategories: [
      {
        name: "PBX",
        images: [{ src: "/slider1.jpg", caption: "PBX Project" }],
      },
    ],
  },
  {
    name: "Video Intercom",
    subCategories: [
      {
        name: "Apartment Intercom",
        images: [
          {
            src: "/portfolio_cat/intercom/icom_1.jpg",
            caption: "Apartment Intercom 1",
          },
          {
            src: "/portfolio_cat/intercom/icom_2.jpg",
            caption: "Apartment Intercom 2",
          },
        ],
      },
      {
        name: "Office Intercom",
        images: [
          {
            src: "/portfolio_cat/intercom/icom_3.jpg",
            caption: "Office Intercom 1",
          },
          {
            src: "/portfolio_cat/intercom/icom_4.jpg",
            caption: "Office Intercom 2",
          },
        ],
      },
      {
        name: "Other Intercom",
        images: [
          {
            src: "/portfolio_cat/intercom/icom_5.jpg",
            caption: "Other Intercom 1",
          },
          {
            src: "/portfolio_cat/intercom/icom_6.jpg",
            caption: "Other Intercom 2",
          },
        ],
      },
    ],
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState(0);
  const [activeSub, setActiveSub] = useState<number | null>(null);
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  const subCategories = categories[active].subCategories;
  const images = activeSub !== null ? subCategories[activeSub].images : [];

  const handleOpen = (idx: number) => setModalIdx(idx);
  const handleClose = () => setModalIdx(null);
  const handlePrev = () =>
    setModalIdx(
      modalIdx !== null ? (modalIdx + images.length - 1) % images.length : null
    );
  const handleNext = () =>
    setModalIdx(modalIdx !== null ? (modalIdx + 1) % images.length : null);

  return (
    <main>
      <section
        style={{
          width: "100%",
          height: "200px",
          background: `linear-gradient(90deg, rgba(46,36,25,0.7) 20%, rgba(46,36,25,0.7) 80%), url('/slider1.jpg') center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: 48,
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Portfolio
        </h1>
      </section>
      <div
        className="text-gray-700"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
          Portfolio Categories
        </h2>
        <div className="portfolio-category-bar">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => {
                setActive(idx);
                setActiveSub(null);
              }}
              className={`portfolio-category-btn${
                active === idx ? " active" : ""
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        {/* Sub-category grid */}
        <div className="portfolio-subcategory-grid">
          {subCategories.map((sub, i) => (
            <div
              key={sub.name}
              className={`portfolio-subcategory-card${
                activeSub === i ? " selected" : ""
              }`}
              onClick={() => setActiveSub(i)}
            >
              <img
                src={sub.images[0]?.src}
                alt={sub.name}
                className="portfolio-subcategory-img"
              />
              <div className="portfolio-subcategory-title">{sub.name}</div>
            </div>
          ))}
        </div>
        {/* Images grid for selected sub-category */}
        {activeSub !== null && (
          <div className="portfolio-images-grid">
            {images.map((img, i) => (
              <div
                key={i}
                className="portfolio-image-card"
                onClick={() => handleOpen(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="portfolio-image-img"
                />
                <div className="portfolio-image-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {modalIdx !== null && (
        <div className="portfolio-modal-bg" onClick={handleClose}>
          <div
            className="portfolio-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[modalIdx].src}
              alt={images[modalIdx].caption}
              className="portfolio-modal-img"
            />
            <div className="portfolio-modal-caption">
              {images[modalIdx].caption}
            </div>
            <div className="portfolio-modal-btns">
              <button onClick={handlePrev} className="portfolio-modal-btn">
                &larr; Prev
              </button>
              <button onClick={handleNext} className="portfolio-modal-btn">
                Next &rarr;
              </button>
              <button
                onClick={handleClose}
                className="portfolio-modal-btn close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .portfolio-category-bar {
          display: flex;
          gap: 18px;
          margin-bottom: 32px;
          overflow-x: auto;
        }
        .portfolio-category-btn {
          background: #f3f2f1;
          color: #2e2419;
          border: none;
          border-radius: 10px;
          padding: 7px 14px;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          box-shadow: none;
          transition: all 0.2s;
        }
        .portfolio-category-btn.active {
          background: #8d6944;
          color: #fff;
          box-shadow: 0 2px 4px rgba(0, 112, 243, 0.1);
        }
        .portfolio-category-btn:hover {
          background: #e2c9a7;
        }
        .portfolio-subcategory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-bottom: 32px;
        }
        .portfolio-subcategory-card {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(46, 36, 25, 0.1);
          background: #fff;
          cursor: pointer;
          transition: transform 0.2s, border 0.2s;
          border: 2px solid transparent;
        }
        .portfolio-subcategory-card:hover {
          transform: translateY(-4px) scale(1.03);
          border: 2px solid #e2c9a7;
        }
        .portfolio-subcategory-card.selected {
          border: 2px solid #8d6944;
          box-shadow: 0 4px 16px rgba(141, 105, 68, 0.12);
        }
        .portfolio-subcategory-img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          display: block;
        }
        .portfolio-subcategory-title {
          padding: 8px 12px;
          background: #f3f2f1;
          color: #2e2419;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
        }
        .portfolio-images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .portfolio-image-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(46, 36, 25, 0.1);
          cursor: pointer;
          background: #fff;
          transition: transform 0.2s;
        }
        .portfolio-image-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 4px 16px rgba(141, 105, 68, 0.12);
        }
        .portfolio-image-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .portfolio-image-caption {
          padding: 8px 12px;
          background: #f3f2f1;
          color: #2e2419;
          font-weight: 500;
          font-size: 15px;
          text-align: center;
        }
        .portfolio-modal-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(20, 16, 12, 0.92);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portfolio-modal-content {
          position: relative;
          background: none;
          border-radius: 0;
          box-shadow: none;
          padding: 0;
          max-width: 700px;
          width: 90vw;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .portfolio-modal-img {
          width: 100vw;
          height: 100vh;
          object-fit: contain;
          border-radius: 0;
          background: none;
          box-shadow: none;
        }
        .portfolio-modal-caption {
          margin: 18px 0 8px 0;
          color: #2e2419;
          font-weight: 600;
          font-size: 18px;
          text-align: center;
        }
        .portfolio-modal-btns {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }
        .portfolio-modal-btn {
          background: #f3f2f1;
          color: #2e2419;
          border: none;
          border-radius: 8px;
          padding: 8px 18px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .portfolio-modal-btn:hover {
          background: #e2c9a7;
        }
        .portfolio-modal-btn.close {
          background: #2e2419;
          color: #fff;
        }
        .portfolio-modal-btn.close:hover {
          background: #8d6944;
        }
      `}</style>
    </main>
  );
}
