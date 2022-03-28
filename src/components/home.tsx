import React, { useEffect, useState } from "react";
import featuredspeaker from '../images/speakers/featured-speaker.jpg'
import speakerone from '../images/speakers/speaker-one.jpg'
import speakertwo from '../images/speakers/speaker-two.jpg'
import speakerthree from '../images/speakers/speaker-three.jpg'
import speakerfour from '../images/speakers/speaker-four.jpg'
import { NavLink } from "react-router-dom";

export default function Home() {
  const[user, setUser] = useState<any>(null)

  useEffect(() => {
    const au = localStorage.getItem('Authorised');
    au === '1' ? setUser(false) : setUser(true)
  }, [])
  return (
    <>
      <div>
        <section className="banner bg-banner-one overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Content Block */}
                <div className="block">
                  {/* Coundown Timer */}
                  <div className="timer" />
                  <h1><b>Breakthrough Engineering Crew</b></h1>
                  {/* <h2>Register</h2> */}
                  {/* <h6>02-05 July 2017 California</h6> */}
                  {/* Action Button */}
                  {user ? <NavLink  to="/register" className="btn btn-white-md">
                    Join Now
                  </NavLink>: <></>}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Banner  ====*/}
        {/* <section style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="text-center p-5 shadow rounded">
                  <h2 className="mb-3">
                    You have downloaded free version of Even
                    <span className="alternate">tre</span>
                  </h2>
                  <h4 className="mb-3">
                    To get full access of this page please purchase the premium
                    version
                  </h4>
                  <h4>Why Premium?</h4>
                  <ul className="list-unstyled mb-4">
                    <li>Full Template Pack</li>
                    <li>Priority Support</li>
                    <li>Documentation Included</li>
                    <li>Monthly Update</li>
                    <li>Lifetime Download</li>
                    <li>Personal and commercial Use</li>
                    <li>One time payment</li>
                  </ul>
                  <a
                    href="https://themefisher.com/products/eventre-event-conference-website-template/"
                    target="_blank"
                    className="btn btn-main"
                  >
                    Buy Premium Version
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*===========================
=            About            =
============================*/}
        <section className="section about">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 align-self-center">
                <div className="image-block bg-about">
                  <img src={featuredspeaker} alt="logo" className="img-fluid"/>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 align-self-center">
                <div className="content-block">
                  <h2>
                    From the DO's Desk
                  </h2>
                  <div className="description-one">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm tempor incididunt ut labore dolore magna
                      aliqua enim ad minim veniam quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                  <div className="description-two">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmtempor incididunt ut labore et dolore magna
                      aliq enim ad minim veniam quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea.
                    </p>
                  </div>
                  {/* <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="btn btn-main-md">
                        Buy tic
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn btn-transparent-md">
                        Read more
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of About  ====*/}
        {/*==============================
=            Speakers            =
===============================*/}
        <section className="section speakers bg-speaker overlay-lighter">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Section Title */}
                <div className="section-title white">
                  <h3>
                    Birthday Celebrants for the month of <span className="alternate">December</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusm tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 1 */}
                <div className="speaker-item">
                  <div className="image">
                    <img src={speakerone} alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 2 */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src={speakertwo}
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 3 */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src={speakerthree}
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 4 */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src={speakerfour}
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 5 */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src="images/speakers/speaker-five.jpg"
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 1 */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src="images/speakers/speaker-six.jpg"
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 7 */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src="images/speakers/speaker-five.jpg"
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                {/* Speaker 8 */}
                <div className="speaker-item">
                  <div className="image">
                    <img
                      src="images/speakers/speaker-six.jpg"
                      alt="speaker"
                      className="img-fluid"
                    />
                    <div className="primary-overlay" />
                    <div className="socials">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h5>
                      <a href="single-speaker.html">Johnathan Franco</a>
                    </h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
         
      
     
        <section className="news section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3>
                    Eventre <span className="alternate">News</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusm tempor incididunt ut labore dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
                <div className="blog-post">
                  <div className="post-thumb">
                    <a href="news-single.html">
                      <img
                        src="images/news/post-thumb-one.jpg"
                        alt="post-image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="date">
                      <h4>
                        20<span>May</span>
                      </h4>
                    </div>
                    <div className="post-title">
                      <h2>
                        <a href="news-single.html">
                          Elementum purus id ultrices.
                        </a>
                      </h2>
                    </div>
                    <div className="post-meta">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-user-o" />
                          <a href="#">Admin</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-heart-o" />
                          <a href="#">350</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-comments-o" />
                          <a href="#">30</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
                <div className="blog-post">
                  <div className="post-thumb">
                    <a href="news-single.html">
                      <img
                        src="images/news/post-thumb-two.jpg"
                        alt="post-image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="date">
                      <h4>
                        20<span>May</span>
                      </h4>
                    </div>
                    <div className="post-title">
                      <h2>
                        <a href="news-single.html">
                          Elementum purus id ultrices.
                        </a>
                      </h2>
                    </div>
                    <div className="post-meta">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-user-o" />
                          <a href="#">Admin</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-heart-o" />
                          <a href="#">350</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-comments-o" />
                          <a href="#">30</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-md-auto col-sm-8 col-10 m-auto">
                <div className="blog-post">
                  <div className="post-thumb">
                    <a href="news-single.html">
                      <img
                        src="images/news/post-thumb-three.jpg"
                        alt="post-image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="date">
                      <h4>
                        20<span>May</span>
                      </h4>
                    </div>
                    <div className="post-title">
                      <h2>
                        <a href="news-single.html">
                          Elementum purus id ultrices.
                        </a>
                      </h2>
                    </div>
                    <div className="post-meta">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-user-o" />
                          <a href="#">Admin</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-heart-o" />
                          <a href="#">350</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-comments-o" />
                          <a href="#">30</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of News Posts  ====*/}
     
      
      </div>
    </>
  );
}
