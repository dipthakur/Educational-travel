import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const ImageCarousel = () => {
  return (
<>
    <div className="main-carousel">
    <OwlCarousel
      className="Destinations-carousel owl-theme"
      loop
      margin={10}
      nav={true}
      dots={false}
      autoplay
      autoplayTimeout={3000}
      autoplayHoverPause
      responsive={{
        0: { items: 1 },
        600: { items: 1 }, 
        1000: { items: 1 }, 
      }}
      navText={[
        "<i class='bi bi-arrow-left-circle custom-prev'></i>",
        "<i class='bi bi-arrow-right-circle custom-next'></i>",
      ]}
    >
      {/* First Image */}
      
      <div className="image-container">
        <img
          src="/assets/destinations-img/red-fort-delhi1-attr-hero.jpeg"
          alt="Red Fort, Delhi"
        />
        <div className="overlay-text">Explore the Red Fort</div>

        <a href="" class="btn btn-primary-1" >Discover more</a>
      </div>

      {/* Second Image */}
      <div className="image-container">
        <img
          src="/assets/destinations-img/buddha-smriti-park-patna-bihar-1-new-attr-hero.jpeg"
          alt="Taj Mahal, Agra"
        />
        <div className="overlay-text">Visit Patna</div>
      </div>

      {/* Third Image */}
      <div className="image-container">
        <img
          src="/assets/destinations-img/1-gurdwara-sri-tarn-taran-sahib-or-gurdwara-sri-darbar-sahib-amritsar-punjab-city-hero.jpeg"
          alt="Hawa Mahal, Jaipur"
        />
        <div className="overlay-text">Discover Gurdwara-Sri-Darbar</div>
      </div>
      {/* Third Image */}
      <div className="image-container">
        <img
          src="/assets/destinations-img/1-lingaraj-temple-bhubaneshwar-odisha-city-hero.jpeg"
          alt="Hawa Mahal, Jaipur"
        />
        <div className="overlay-text">Discover Bhubaneshwar</div>
      </div>
      {/* Third Image */}
      <div className="image-container">
        <img
          src="/assets/destinations-img/2-netaji-subash-chandra-bose-islands-port-blair-andaman-nicobar-islands-attr-hero.jpeg"
          alt="Hawa Mahal, Jaipur"
        />
        <div className="overlay-text">Netaji Subash Chandra Bose Islands</div>
      </div>
      {/* Third Image */}
      <div className="image-container">
        <img
          src="/assets/destinations-img/baoli-ghaus-ali-shah-gurugram-haryana-city-3-hero.jpeg"
          alt="Hawa Mahal, Jaipur"
        />
        <div className="overlay-text">Gurugram</div>
      </div>
      {/* Third Image */}
      <div className="image-container">
        <img
          src="/assets/destinations-img/7-choglamsar-leh-ladakh-city-hero-new.jpeg"
          alt="Hawa Mahal, Jaipur"
        />
        <div className="overlay-text">Discover Leh-Ladakh City</div>
      </div>
      {/* Third Image */}
      <div className="image-container">
        <img
          src="/assets/destinations-img/city-palace-udaipur-rajasthan-2-new-attr-hero.jpeg"
          alt="Hawa Mahal, Jaipur"
        />
        <div className="overlay-text">Discover Udaipur Rajasthan</div>
      </div>
    </OwlCarousel>

        <div className="descover">
          <a href="" class="btn btn-primary-1" >Discover more</a>
        </div>

    </div>


    <div className="popular-destinations-container">
      {/* Header */}
      <h2 className="carousel-header">Destination for Every Bucket List</h2>
      
      <OwlCarousel
        className="popular-destinations owl-theme"
        loop
        margin={10}
        nav={false}
        dots={false}
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause
        responsive={{
          0: { items: 1 },
          600: { items: 2 }, 
          1000: { items: 4 }, 
        }}
        navText={[
          "<i class='bi bi-arrow-left-circle popular-custom-prev'></i>",
          "<i class='bi bi-arrow-right-circle popular-custom-next'></i>",
        ]}
      >
        {/* Destination Cards */}
        {[
          { src: "/assets/destinations-img/reel-img/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-nearby.jpeg", alt: "Golden Temple", text: "Golden Temple" },
          { src: "/assets/destinations-img/reel-img/taj-mahal-agra-uttar-pradesh-1-attr-nearby.jpeg", alt: "Taj Mahal, Agra", text: "Taj Mahal"},
          { src: "/assets/destinations-img/reel-img/har-ki-pauri-haridwar1-attr-nearby.jpeg", alt: "har-ki-pauri-haridwar", text: "Haridwar"},
          { src: "/assets/destinations-img/reel-img/hawa-mahal-jaipur-rajasthan-1-attr-nearby.jpeg", alt: "Bhubaneshwar", text: "Rajasthan" },
          { src: "/assets/destinations-img/reel-img/rock-garden-chandigarh-1-attr-nearby.jpeg", alt: "Netaji Subash Chandra Bose Islands", text: "Chandigarh" },
          { src: "/assets/destinations-img/reel-img/sri-jagannath-temple-puri-odisha-1-attr-nearby.jpeg", alt: "Gurugram", text: "Odisha" },
          { src: "/assets/destinations-img/reel-img/tulip-garden-patnitop-attr-nearby.jpeg", alt: "Leh-Ladakh City", text: "Tulip-Garden" },
          { src: "/assets/destinations-img/reel-img/gateway-of-india-mumbai-maharashtra-1-attr-nearby.jpeg", alt: "Udaipur Rajasthan", text: "Mumbai Maharashtra" }
        ].map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.src} alt={destination.alt} />
            <div className="overlay">
              <span className="destination-name">{destination.text}</span>
              <a href="#" className="btn btn-primary-popular-d">Explore</a>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>



</>

  );
};


export default ImageCarousel;
