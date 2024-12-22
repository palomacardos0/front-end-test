import FilledStar from "../../../assets/svgs/filledStar.svg";
import EmptyStar from "../../../assets/svgs/emptyStar.svg";

interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 5;

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: totalStars }).map((_, index) => (
        <img
          key={index}
          src={index < rating ? FilledStar : EmptyStar}
          alt={index < rating ? "EStrela Preenchida" : "Estrela Vazia"}
        />
      ))}
    </div>
  );
};
