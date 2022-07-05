// css
import "./Review.css";

export function Review({ image, name, title, quote, reviewClass }) {
  return (
    <article className={`review ${reviewClass}`}>
      <div className="image-div">
        <img src={image} alt={name} />
      </div>
      <div className="content-div">
        <h2 className="person-name">{name}</h2>
        <p className="person-job">{title}</p>
        <p className="person-review">{quote}</p>
      </div>
    </article>
  );
}
