// data
import { people } from "./data.js";

// hooks
import { useState } from "react";

// components
import { Review } from "./Review.js";
// css
import "./ReviewsList.css";

function ReviewsList() {
  const [index, setIndex] = useState(0);

  function previousBtnClick() {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function nextBtnClick() {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <section className="container">
      <h1 className="main-heading">Reviews</h1>
      <section className="reviews-container">
        {people.map((person, personIndex) => {
          let reviewClass = "next";
          if (index === personIndex) {
            reviewClass = "active";
          }

          if (
            index - 1 === personIndex ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            reviewClass = "previous";
          }

          return (
            <Review key={person.id} {...person} reviewClass={reviewClass} />
          );
        })}
      </section>
      <button className="previousBtn" onClick={previousBtnClick}>
        &#10094;
      </button>
      <button className="nextBtn" onClick={nextBtnClick}>
        &#10095;
      </button>
    </section>
  );
}

export default ReviewsList;
