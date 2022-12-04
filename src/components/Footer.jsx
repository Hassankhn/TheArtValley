import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        id="shopify-section-footer"
        className="shopify-section footer-section"
      >
        <div className="site-footer small--text-center" role="contentinfo">
          <div className="wrapper bottom">
            <div className="grid">
              <div className="row ghgk">
                <div className="col-lg-2">
                  <div className="grid-item ">
                    <h2>Quick links</h2>

                    <ul>
                      <li>
                        <a className="rt" href="/">
                          Home
                        </a>
                      </li>

                      <li>
                        <a className="rt" href="/categories">
                          Categories
                        </a>
                      </li>

                      <li>
                        <a className="rt" href="/contact">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="grid-item small--one-whole one-half">
                    <h2>Get in touch</h2>

                    <p className="parg">
                      Once you place your order our customer support team will
                      call you to confirm your shipping address and your ordered
                      footwear size. We will call you 3 times, if we get no
                      response, we will consider the orderas ''Cancelled''.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="grid-item small--one-whole one-third">
                    <h2>Newsletter</h2>

                    <div className="site-footer__newsletter-subtext">
                      <p className="parg">
                        Promotions, new products and sales. Directly to your
                        inbox.
                      </p>
                    </div>
                    <div className="form-vertical">
                      <form
                        method="post"
                        action="/contact#contact_form"
                        id="contact_form"
                        accept-charset="UTF-8"
                        className="contact-form"
                      >
                        <input
                          type="hidden"
                          name="form_type"
                          value="customer"
                        />
                        <input type="hidden" name="utf8" value="✓" />

                        <input
                          type="hidden"
                          name="contact[tags]"
                          value="newsletter"
                        />
                        <div className="input-group">
                          <div className="row justify-content-between">
                            <div className="col-5 ">
                              <input
                                type="email"
                                value=""
                                placeholder="Email Address"
                                name="contact[email]"
                                id="Email"
                                className="input-group-field group"
                                aria-label="Email Address"
                                autocorrect="off"
                                autocapitalize="off"
                              />
                            </div>
                            <div className="col-5">
                              <span className="input-group-btn">
                                <button
                                  type="submit"
                                  className="btn-secondary btn--small group"
                                  name="commit"
                                  id="subscribe"
                                >
                                  Sign Up
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container ghh">
              <hr className="hr--small" />

              <div className="grid">
                {/* one-whole text-center */}
                <div className="grid-item  ">
                  <ul className="legal-links item-2">
                    {/* inline-list */}
                    <li className="mw">
                      <a className="mw" href="/">
                        Home
                      </a>
                    </li>

                    <li className="mw">
                      <a className="mw" href="/Catalog">
                        Categories
                      </a>
                    </li>

                    <li className="mw">
                      <a className="mw" href="/contact">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="hr--small" />
              {/* lower bottom  */}
              <div className="lowerbottom">
                <p>©TheArtValley 2022-2027 Ozone networks,Inc</p>
                <p>all rights are reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
