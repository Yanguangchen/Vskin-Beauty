var React = require("react");
var { sampleReviews } = require("../lib/googleReviewsData");

// Style objects
const carouselContainerStyle = {
  position: "relative",
  maxWidth: "1000px",
  margin: "0 auto",
};

const reviewCardStyle = (isFading) => ({
  backgroundColor: "#f3f4f6",
  padding: "24px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  opacity: isFading ? 0 : 1,
  transform: isFading ? "translateX(-20px)" : "none",
});

const starsStyle = {
  color: "#fbbf24",
  fontSize: "24px",
  marginBottom: "12px",
};

const reviewTextStyle = {
  marginBottom: "16px",
};

const authorInfoStyle = {
  display: "flex",
  alignItems: "center",
};

const authorInitialStyle = {
  backgroundColor: "#065f46",
  color: "white",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginRight: "12px",
};

const authorNameStyle = {
  fontWeight: 600,
};

const reviewDateStyle = {
  color: "#6b7280",
  fontSize: "14px",
};

const googleLogoStyle = {
  height: "24px",
  marginTop: "16px",
};

const navButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const prevButtonStyle = {
  ...navButtonStyle,
  left: "-20px",
};

const nextButtonStyle = {
  ...navButtonStyle,
  right: "-20px",
};

var ReviewCard = function (props) {
  var review = props.review;
  var isFading = props.isFading;
  return React.createElement(
    "div",
    { style: reviewCardStyle(isFading) },
    React.createElement(
      "div",
      { style: starsStyle },
      "★".repeat(review.rating),
      "☆".repeat(5 - review.rating)
    ),
    React.createElement("p", { style: reviewTextStyle }, review.text),
    React.createElement(
      "div",
      { style: authorInfoStyle },
      React.createElement(
        "div",
        { style: authorInitialStyle },
        review.author[0].toUpperCase()
      ),
      React.createElement(
        "div",
        null,
        React.createElement("p", { style: authorNameStyle }, review.author),
        React.createElement("p", { style: reviewDateStyle }, review.date)
      )
    ),
    React.createElement("img", {
      src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      alt: "Google",
      style: googleLogoStyle,
    })
  );
};

var GoogleReviewsCarousel = function (props) {
  var reviews = props.reviews;
  var _React$useState = React.useState(0),
    currentIndex = _React$useState[0],
    setCurrentIndex = _React$useState[1];
  var _React$useState2 = React.useState(false),
    isFading = _React$useState2[0],
    setIsFading = _React$useState2[1];

  var nextReview = function () {
    setIsFading(true);
    setTimeout(function () {
      setCurrentIndex(function (prevIndex) {
        return (prevIndex + 1) % reviews.length;
      });
      setIsFading(false);
    }, 300);
  };

  var prevReview = function () {
    setIsFading(true);
    setTimeout(function () {
      setCurrentIndex(function (prevIndex) {
        return (prevIndex - 1 + reviews.length) % reviews.length;
      });
      setIsFading(false);
    }, 300);
  };

  React.useEffect(function () {
    var intervalId = setInterval(nextReview, 5000);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);

  return React.createElement(
    "div",
    { style: carouselContainerStyle },
    React.createElement(ReviewCard, {
      review: reviews[currentIndex],
      isFading: isFading,
    }),
    React.createElement(
      "button",
      { onClick: prevReview, style: prevButtonStyle },
      "‹"
    ),
    React.createElement(
      "button",
      { onClick: nextReview, style: nextButtonStyle },
      "›"
    )
  );
};

var GoogleReviews = function () {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { textAlign: "center", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: "700", color: "#111827", marginBottom: "0.5rem" } },
      "Real people, real outcomes"
    ),
    React.createElement(GoogleReviewsCarousel, { reviews: sampleReviews }),
    React.createElement(
      "p",
      { style: { textAlign: "center", marginBottom: "10%", fontSize: "0.85rem", color: "#9ca3af" } },
      "Reviews shown for transparency; experiences vary."
    )
  );
};

module.exports = GoogleReviews;
