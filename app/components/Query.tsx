"use client";
import React from "react";

function Query() {
  return (
    <section className="w-full max-w-[1180px] mx-auto mt-12 p-4">
      <div className="query-card-responsive">
        {/* Left Side */}
        <div className="query-side query-side-left">
          <h3 className="query-title">Have an IT department?</h3>
          <p className="query-text">
            Partner with us for IT management services to grow your existing IT
            infrastructure. Contact us today.
          </p>
          <a href="/contact" className="query-btn">
            Contact Page
          </a>
        </div>
        {/* Divider */}
        <div className="query-divider" />
        {/* Right Side */}
        <div className="query-side query-side-right">
          <h3 className="query-title">Need IT support?</h3>
          <p className="query-text">
            Get expert help for your IT infrastructure, troubleshooting, and
            upgrades. We're here to assist you.
          </p>
          <a href="/contact" className="query-btn">
            Contact Page
          </a>
        </div>
      </div>
      <style jsx>{`
        .query-card-responsive {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(46, 36, 25, 0.1);
          width: 100%;
          padding: 32px 24px;
        }
        .query-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .query-side-left {
          padding-right: 32px;
        }
        .query-side-right {
          padding-left: 32px;
        }
        .query-divider {
          width: 2px;
          background: #eee;
          margin: 0 24px;
        }
        .query-title {
          color: #2e2419;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .query-text {
          color: #2e2419;
          font-size: 18px;
          line-height: 1.7;
        }
        .query-btn {
          margin-top: 18px;
          background: #8d6944;
          color: #fff;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 2px 8px rgba(46, 36, 25, 0.1);
        }
        @media (max-width: 768px) {
          .query-card-responsive {
            flex-direction: column;
            padding: 24px 8px;
          }
          .query-side-left {
            padding-right: 0;
            padding-bottom: 24px;
          }
          .query-side-right {
            padding-left: 0;
            padding-top: 24px;
          }
          .query-divider {
            width: 100%;
            height: 2px;
            margin: 24px 0;
          }
        }
      `}</style>
    </section>
  );
}

export default Query;
