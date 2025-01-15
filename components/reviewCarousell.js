var React = require("react");

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

// Sample reviews data
var sampleReviews = [
  {
    rating: 5,
    text: "I recently visited Shebella Beauty and Slimming for a V-jet face slimming treatment, After just a few sessions, I noticed a significant improvement in my skin's texture and a more contoured face. Highly recommend!",
    author: "My Nguyen",
    date: "7 Hours ago",
  },
  {
    rating: 5,
    text: "start doing V jet treatment here. No hard sale and can see result in just one session. recommended. 👍",
    author: "Yee Wut Hing",
    date: "23 hours ago",
  },
  {
    rating: 5,
    text: "Shebella beauty has great beautician advising all needs for customer’s beauty and slimming programs. Great results after all treatment and worth the price and worth your time to try. There have Jurong and Toa Payoh outlet so travel at your convenient journey. Appreciate Mandy and Joey.",
    author: "John Paul Li",
    date: "5 months ago",
  },
  {
    rating: 5,
    text: "Went to shebella Jurong branch a few times for chin filler , laugh line filler and under eyes filler. Every time I’m satisfied with their result , effect overall can last for 3-4 months as collagen filler will absorbed by our body and required touch up. Price is reasonable and no hard sell. Overall satisfied with their service and will patronise again.",
    author: "Xiaoyun lim",
    date: "8 months ago",
  },
  {
    rating: 5,
    text: "Omg, I finally found my nose bridge @shebellabeauty!I've the flattest nose in the fam and I'm always jealous of my bro's growing up. Legit. And here I am, walked in @shebellabeauty with my usual flat nose and came out with a pretty nose bridge within an hour! Swipe to see guys! 🤭",
    author: "Karen Gads About",
    date: "3 years ago",
  },
  {
    rating: 5,
    text: "Good products with good end results 👍🏻 And no hard selling from them. The staff are also very friendly. Very comfortable to go back to them for treatments.",
    author: "Kate C",
    date: "5 months ago",
  },
  {
    rating: 5,
    text: "Mandy and adeline is very skillful and experienced. Their V Jet is not painful , it’s my second time to do Fat melting . Highly recommended, price is reasonable no hard selling.",
    author: "Lee Lee",
    date: "a year ago",
  },
  {
    rating: 5,
    text: "The beauty consultant attends to me is very professional. My threshold of pain is very low also. So far, vjet not painful leh. How to be painful when painkiller are applied on our face? The team recommends what i needed to do. They heard me well and explained the whole process. I did my vjet collagen, wrinkle and fat melting all in a day. After i did, all my friends and colleague sees my difference in face. The effect on my eyes last me for 1.5 years. Not exp and Worth it! No deposit pay also. If needed, they would have said beforehand. I asked twice to confirm before trying.Take photo , one can see the difference. With eyelash extension, swee swee can go out liao. No makeup. Thumb up !",
    author: "HaoLiaoDao HaoLiaoDao",
    date: "a year ago",
  },
  {
    rating: 5,
    text: "Very cosy place to get beautifully, Mandy and Joey are very professional in advising your beauty needs. They don’t hard sell their package or push you to do what you do not need.",
    author: "Elaine Loh",
    date: "8 months ago",
  },
];

var GoogleReviews = function () {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { textAlign: "center" } },
      "What our clients say!"
    ),
    React.createElement(GoogleReviewsCarousel, { reviews: sampleReviews }),
    React.createElement(
      "p",
      { style: { textAlign: "center", marginBottom: "10%" } },
      "Powered by Web Wizards Widgets"
    )
  );
};

module.exports = GoogleReviews;
