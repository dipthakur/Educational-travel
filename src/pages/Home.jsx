import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
  return (
    <>
      <div className="banner">
        <div className="content">
          <h1>
            EXPLORE. LEARN. GROW
            <br />
            TOGETHER.
          </h1>
        </div>
      </div>

      <div
        className="arrow-btn"
        style={{ textAlign: "center", position: "relative" }}
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <i
          className="bi bi-arrow-down"
          style={{
            position: "absolute",
            bottom: "10px",
            color: "#fff",
            fontSize: "40px",
            cursor: "pointer",
          }}
        ></i>
      </div>

      <div className="why-choose-us">
        <div className="container why-choose-head">
          {/* <p className="Featured-trips-p">Our 4 E’s</p> */}
          <h2 className="Featured-trips-h2">Why choose us</h2>

          <div className="all-text py-4">
            <p>
              At Incredible India Tours, we believe that travel is more than
              just sightseeing—it’s about immersion, discovery, and
              transformation. Our itineraries are carefully crafted to ensure
              every journey is engaging, enlightening, and enriching.
            </p>

            <p>
              For students, our educational tours bring history and culture to
              life, from exploring the grandeur of Jaipur’s forts to
              understanding scientific advancements at ISRO. For corporate
              groups, our retreats blend adventure and relaxation, offering
              everything from Himalayan treks to mindfulness sessions in
              Kerala’s backwaters.
            </p>

            <p>
              Join us in discovering India’s diversity, where every destination
              tells a story, every experience deepens understanding, and every
              journey leaves a lasting impact.
            </p>
          </div>

          <div className="all-cards">
            <div className="card bg-dark-1 text-white choose-card">
              <img
                src="../src/assets/card-img/card-1.avif"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <div className="card-engage">
                  <div className="card-data">
                    <h5 className="card-title">ENGAGE</h5>
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </div>
                  <p className="card-text-engage">
                    Engage deeply with places and people for meaningful,
                    immersive travel experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-dark-1 text-white choose-card">
              <img
                src="../src/assets/card-img/card-2.avif"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <div className="card-engage">
                  <div className="card-data">
                    <h5 className="card-title">EXPLORE</h5>
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </div>
                  <p className="card-text-engage">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati, libero perferendis.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-dark-1 text-white choose-card">
              <img
                src="../src/assets/card-img/card-3.avif"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <div className="card-engage">
                  <div className="card-data">
                    <h5 className="card-title">EDUCATE</h5>
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </div>
                  <p className="card-text-engage">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam, soluta excepturi!
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-dark-1 text-white choose-card">
              <img
                src="../src/assets/card-img/card-4.avif"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <div className="card-engage">
                  <div className="card-data">
                    <h5 className="card-title">ENTERTAINMENT</h5>
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                  </div>
                  <p className="card-text-engage">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda officia!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="redefine-travel-with-us">
        <div className="container why-choose-head">
          <p className="Featured-trips-p">Make it memorable</p>
          <h2 className="Featured-trips-h2">Redefine travel with us!</h2>
          <div className="redefine-main">
            <div className="redefine-text">
              <p>
                Our experts believe in making memories that last a lifetime. We
                believe in :
              </p>

              <p>
                At Incredible India Tours, we believe in crafting experiences
                that leave a lasting impact. Our experts curate journeys that go
                beyond sightseeing, ensuring every traveler takes home cherished
                memories.
              </p>

              <p>
                The 4 E’s—Engage, Explore, Educate, and Entertain—are at the
                heart of our tours. Whether it’s walking through the ancient
                streets of Varanasi, marveling at the architectural wonders of
                Hampi, or immersing in the vibrant culture of Rajasthan, we
                create experiences that are enriching and meaningful.
              </p>

              <p>
                For students, this means journeys that bring textbooks to
                life—be it a science expedition to ISRO or a history walk
                through Delhi’s Mughal heritage. For corporate teams, it’s about
                forging stronger bonds through offbeat retreats, wellness
                getaways in Kerala, or adventure-filled escapades in the
                Himalayas.
              </p>

              <p>
                Join us in discovering the soul of India, where every journey is
                a story, every destination an inspiration, and every experience
                a step toward transformation.
              </p>
            </div>

            <div className="redefine-video">
              <video
                className="embed-responsive embed-responsive-16by9"
                controls
                loop
                muted
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="all-overlay-three-img">
            <div className="overlay-img-top">
              <img
                src="../src/assets/video-overlay-img/overlay-top-edu.png"
                alt=""
              />
            </div>

            <div className="overlay-img-bottom-l">
              <img
                src="../src/assets/video-overlay-img/overlay-b-p.png"
                alt=""
              />
            </div>

            <div className="overlay-img-bottom-r">
              <img
                src="../src/assets/video-overlay-img/overlay-digit-edu.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Featured-trips container mb-5">
        <p className="Featured-trips-p">Make it memorable</p>
        <h2 className="Featured-trips-h2-new">Featured trips</h2>

        <OwlCarousel
          className="educorp-owl-carousel owl-theme"
          loop
          margin={10}
          nav={false}
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          responsive={{
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 4 },
          }}
        >
          <div className="card-container">
            <img src="../src/assets/card-img/feature-1.png" alt="Image 1" />
            <div className="upar-icon">
              <div className="upar-icon-tage">
                <p>Featured</p>
              </div>
              <div className="card-like-icon">
                <i className="bi bi-heart" id="heart-icon-outline"></i>
                <i
                  className="bi bi-heart-fill"
                  id="heart-icon-filled"
                  style={{ display: "none" }}
                ></i>
              </div>
            </div>
            <div className="overlay-content">
              <div className="card-text">
                <p>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </p>
                <span>Lorem, ipsum.</span>
                <p className="location-p">
                  <i className="bi bi-geo-alt-fill"></i> Chukhung, Nepal
                </p>
                <div className="camera-icon-main">
                  <p>
                    <i className="bi bi-currency-rupee"></i>
                    <span>
                      {" "}
                      From <b> 12,500 </b>{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-camera"></i>
                    <i className="bi bi-camera-video"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <img src="../src/assets/card-img/feature-2.png" alt="Image 2" />
            <div className="upar-icon">
              <div className="upar-icon-tage">
                <p>Featured</p>
              </div>
              <div className="card-like-icon">
                <i className="bi bi-heart" id="heart-icon-outline"></i>
                <i
                  className="bi bi-heart-fill"
                  id="heart-icon-filled"
                  style={{ display: "none" }}
                ></i>
              </div>
            </div>
            <div className="overlay-content">
              <div className="card-text">
                <p>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </p>
                <span>Caho Cristales River Trip</span>
                <p className="location-p">
                  <i className="bi bi-geo-alt-fill"></i> Chukhung, Nepal
                </p>
                <div className="camera-icon-main">
                  <p>
                    <i className="bi bi-currency-rupee"></i>
                    <span>
                      {" "}
                      From <b> 12,500 </b>{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-camera"></i>
                    <i className="bi bi-camera-video"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <img src="../src/assets/card-img/feature-3.png" alt="Image 3" />
            <div className="upar-icon">
              <div className="upar-icon-tage">
                <p>Featured</p>
              </div>
              <div className="card-like-icon">
                <i className="bi bi-heart" id="heart-icon-outline"></i>
                <i
                  className="bi bi-heart-fill"
                  id="heart-icon-filled"
                  style={{ display: "none" }}
                ></i>
              </div>
            </div>
            <div className="overlay-content">
              <div className="card-text">
                <p>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </p>
                <span>Caho Cristales River Trip</span>
                <p className="location-p">
                  <i className="bi bi-geo-alt-fill"></i> Chukhung, Nepal
                </p>
                <div className="camera-icon-main">
                  <p>
                    <i className="bi bi-currency-rupee"></i>
                    <span>
                      {" "}
                      From <b> 12,500 </b>{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-camera"></i>
                    <i className="bi bi-camera-video"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <img src="../src/assets/card-img/feature-4.png" alt="Image 4" />
            <div className="upar-icon">
              <div className="upar-icon-tage">
                <p>Featured</p>
              </div>
              <div className="card-like-icon">
                <i className="bi bi-heart" id="heart-icon-outline"></i>
                <i
                  className="bi bi-heart-fill"
                  id="heart-icon-filled"
                  style={{ display: "none" }}
                ></i>
              </div>
            </div>
            <div className="overlay-content">
              <div className="card-text">
                <p>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>{" "}
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </p>
                <span>Caho Cristales River Trip</span>
                <p className="location-p">
                  <i className="bi bi-geo-alt-fill"></i> Chukhung, Nepal
                </p>
                <div className="camera-icon-main">
                  <p>
                    <i className="bi bi-currency-rupee"></i>
                    <span>
                      {" "}
                      From <b> 12,500 </b>{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-camera"></i>
                    <i className="bi bi-camera-video"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="redefine-travel-with-us1">
        <div className="container why-choose-head">
          <div className="redefine-main1">
            <div className="redefine-text-test">
              <p className="Featured-trips-p">Our testimonials</p>
              <h1>What our travelers are saying!</h1>
              <button className="btn btn-testimonials1 mt-5">
                All Testimonials
              </button>
            </div>

            <div className="testimonals-img">
              <img src="../src/assets/card-img/testimonals-r-img.jpg" alt="" />
            </div>
            <button className="btn btn-testimonials">All Testimonials</button>
          </div>
        </div>
      </div>

      <div className="container">
        <OwlCarousel
          className="discover-owl-carousel owl-theme"
          loop
          margin={10}
          nav={false}
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 6 },
          }}
        >
          {/* First Item */}
          <div className="ticket-card-container">
            <img
              src="../src/assets/destinations-img/1-lingaraj-temple-bhubaneshwar-odisha-city-hero.jpeg"
              alt="Image 1"
            />
            <div className="overlay">
              <i className="bi bi-plus-circle-fill"></i>
              <p className="testimonials_heading-p">Discovery</p>
              <p className="testimonials_sub_heading-p">Adventure</p>
            </div>
          </div>

          {/* Second Item */}
          <div className="ticket-card-container">
            <img
              src="../src/assets/destinations-img/beautiful-mountain-landscape-azores-archipelago-portugal.jpg"
              alt="Image 2"
            />
            <div className="overlay">
              <i className="bi bi-plus-circle-fill"></i>
              <p className="testimonials_heading-p">Discovery</p>
              <p className="testimonials_sub_heading-p">Adventure</p>
            </div>
          </div>

          {/* Third Item */}
          <div className="ticket-card-container">
            <img
              src="../src/assets/destinations-img/dashashwamedh-ghat-varanasi-uttar-pradesh-city-hero.jpeg"
              alt="Image 3"
            />
            <div className="overlay">
              <i className="bi bi-plus-circle-fill"></i>
              <p className="testimonials_heading-p">Discovery</p>
              <p className="testimonials_sub_heading-p">Adventure</p>
            </div>
          </div>

          {/* Fourth Item */}
          <div className="ticket-card-container">
            <img
              src="../src/assets/destinations-img/empty-square-lake-city-park_1127-4096.jpg"
              alt="Image 4"
            />
            <div className="overlay">
              <i className="bi bi-plus-circle-fill"></i>
              <p className="testimonials_heading-p">Discovery</p>
              <p className="testimonials_sub_heading-p">Adventure</p>
            </div>
          </div>
          {/* Five Item */}
          <div className="ticket-card-container">
            <img
              src="../src/assets/destinations-img/dal-lake-srinagar-jammu-&-kashmir-2-attr-hero.jpeg"
              alt="Image 4"
            />
            <div className="overlay">
              <i className="bi bi-plus-circle-fill"></i>
              <p className="testimonials_heading-p">Discovery</p>
              <p className="testimonials_sub_heading-p">Adventure</p>
            </div>
          </div>
          {/* six Item */}
          <div className="ticket-card-container">
            <img
              src="../src/assets/destinations-img/buddha-smriti-park-patna-bihar-1-new-attr-hero.jpeg"
              alt="Image 4"
            />
            <div className="overlay">
              <i className="bi bi-plus-circle-fill"></i>
              <p className="testimonials_heading-p">Discovery</p>
              <p className="testimonials_sub_heading-p">Adventure</p>
            </div>
          </div>
          {/* seven Item */}
          <div className="ticket-card-container">
            <img
              src="../src/assets/destinations-img/lake-house.jpg"
              alt="Image 4"
            />
            <div className="overlay">
              <i className="bi bi-plus-circle-fill"></i>
              <p className="testimonials_heading-p">Discovery</p>
              <p className="testimonials_sub_heading-p">Adventure</p>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="recent-post mb-5">
        <div className="container latest-travel-guides">
          <div className="latest-guides-head">
            <div className="recentpostHeading">
              <p className="Featured-trips-p recantPost_Featured-trips-p mt-5">
                Recent post
              </p>
              <h2 className="Featured-trips-h2 mt-3">Latest travel guides!</h2>
            </div>
            <div>
              <button className="btn btn-latest-travle-views">
                Views more
              </button>
            </div>
          </div>

          <div className="container latest-tavel-card">
            <div className="card latest-tavel-card1">
              <img
                src="../src/assets/card-img/blog-img-travle.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title pb-2">
                  A place where start new life with adventure travel
                </h5>

                <p className="card-text-blog">
                  There are many variations of but the majority have simply free
                  text.
                </p>
                <a href="#" className="btn-read-more">
                  Read More{" "}
                </a>
              </div>
            </div>

            <div className="card latest-tavel-card1">
              <img
                src="../src/assets/card-img/blog-img-travle1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title pb-2">
                  Journeys are best measured with friends
                </h5>
                <p className="card-text-blog">
                  There are many variations of but the majority have simply free
                  text.
                </p>
                <a href="#" className="btn-read-more">
                  Read More{" "}
                </a>
              </div>
            </div>

            <div className="card latest-tavel-card1">
              <img
                src="../src/assets/card-img/blog-img-travle2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title pb-2">
                  Travel the most beautiful places in the world
                </h5>
                <p className="card-text-blog">
                  There are many variations of but the majority have simply free
                  text.
                </p>
                <a href="#" className="btn-read-more">
                  Read More{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="view-more-btn">
            <button className="btn btn-latest-travle-views1">Views more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
