import React from 'react'
import singlespeaker from '../images/speakers/single-speaker.jpg'

export default function Personal() {
  return (
    <>
    <div>
  <section className="page-title bg-title overlay-dark">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="title">
            <h3>Personal Details</h3>
          </div>
          {/* <ol className="breadcrumb p-0 m-0">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Speaker Details</li>
          </ol> */}
        </div>
      </div>
    </div>
  </section>
  {/*====  End of Page Title  ====*/}
  <section className="section single-speaker">
    <div className="container">
      <div className="block">
        <div className="row">
          <div className="col-lg-5 col-md-6 align-self-md-center">
            <div className="image-block">
              <img src={singlespeaker} className="img-fluid" alt="speaker" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 align-self-center">
            <div className="content-block">
              <div className="name">
                <h3>Jonathan Franco</h3>
              </div>
              <div className="profession">
                <p>Web Developer</p>
              </div>
              <div className="details">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud.laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  <br />
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  <br /> 
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
              </div>
              <div className="social-profiles">
                <h5>Social Profiles</h5>
                <ul className="list-inline social-list">
                  <li className="list-inline-item">
                    <a href="#"><i className="fa fa-twitter" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="fa fa-linkedin" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="fa fa-facebook" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="fa fa-skype" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><i className="fa fa-pinterest-p" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-2">
        <div className="row">
          <div className="col-md-6">
            <div className="personal-info">
              <h5>Personal Information</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi explicabo suscipit deleniti voluptatum quos nostrum iure doloremque cupiditate voluptatem a enim eaque quod perspiciatis repudiandae, mollitia adipisci ea, quidem eveniet consequatur veniam error. Adipisci, suscipit corporis repellat, soluta vitae deserunt perspiciatis labore reprehenderit sapiente provident vel maxime.</p>
              <ul className="m-0 p-0">
                <li>Morbi fermentum felis nec</li>
                <li>Fermentum felis nec gravida tempus.</li>
                <li>Morbi fermentum felis nec</li>
                <li>Fermentum felis nec gravida tempus.</li>
                <li>Morbi fermentum felis nec</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skills">
              <h5>Personal Skills</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat inventore at praesentium perspiciatis labore reprehenderit sapiente provident vel maxime.</p>
              <div className="skill-bars">
                {/* SkillBar */}
                <div className="skill-bar">
                  {/* Title */}
                  <p>Wordpress</p>
                  {/* Progress Bar */}
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '90%'}}><span>90%</span></div>
                  </div>
                </div>
                {/* SkillBar */}
                <div className="skill-bar">
                  {/* Title */}
                  <p>PHP</p>
                  {/* Progress Bar */}
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '75%'}}>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
                {/* SkillBar */}
                <div className="skill-bar">
                  {/* Title */}
                  <p>Javascript</p>
                  {/* Progress Bar */}
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '60%'}}>
                      <span>60%</span>
                    </div>
                  </div>
                </div>
                {/* SkillBar */}
                <div className="skill-bar">
                  {/* Title */}
                  <p>HTML</p>
                  {/* Progress Bar */}
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '80%'}}>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
