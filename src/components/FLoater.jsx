import React from "react";
import "./FLoater.css";
import { Link } from "react-router-dom";

const Floater = () => {
  return (
    <>
      <section className="">
        <div className="home-hero-section">
          <div className="home-hero-section-p home-hero-section-p1">
            <h2>Welcome To The Art Valley Marketplace</h2>
            <p>
              Explore Digital Collectibles That You Love To Watch. On Artvalley
              you can mint & buy NFTs. So, lets collect all the digital arts
              where you get emotionally connect.
            </p>

            <a to="/explore">
              <button className="btn btn-outline-light btn-lg " type="button">
                Explore NFTs
              </button>
            </a>
          </div>
          <div className="home-hero-section-p home-hero-section-p2 ju">
            <img
              width="300px"
              src="https://openseauserdata.com/files/714ffa9dda7702741aef3ae2444d160d.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Floater;
