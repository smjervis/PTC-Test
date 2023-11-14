import { useState } from "react";
import StarIcon from "../icons/star";
import classNames from "classnames";

interface RatesProps {
  rates: number[];
  ratingText: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement> | number) => void;
}

type RatingStateProps =
  | "strongly disagree"
  | "neutral"
  | "strongly agree"
  | string;

const Rates = ({ rates, ratingText, onChange }: RatesProps) => {
  const [rating, setRating] = useState(1);

  const handleRatingChange = (value: number) => {
    setRating(value);
    onChange(value);
  };

  const handleStateRatingChange = (text: RatingStateProps) => {
    switch (text) {
      case "strongly disagree":
        onChange(1);
        return setRating(1);
      case "neutral":
        onChange(Math.round(rates.length / 2));
        return setRating(Math.round(rates.length / 2));
      case "strongly agree":
        onChange(rates.length);
        return setRating(rates.length);
      default:
        break;
    }
  };

  const getNumberColor = (rate: number) => {
    if (rating === rate) {
      return "fill-secondary";
    }

    if (rating > rate) {
      if (
        (rates.length === 10 && rating >= 5) ||
        (rates.length === 5 && rating > 2)
      ) {
        return "fill-survey-green";
      }
    }

    if (rating < rate) {
      return "fill-white";
    }

    return "fill-survey-red";
  };

  const renderRatingText = ratingText.map((text, idx) => {
    return (
      <span
        className="cursor-pointer capitalize"
        key={`text-${idx}`}
        onClick={() => handleStateRatingChange(text)}
      >
        {text}
      </span>
    );
  });

  const renderRates = rates.map((rate) => {
    return (
      <span
        key={rate}
        className={`text-white w-12 h-12 text-center cursor-pointer relative
        ${
          rating === rate
            ? "font-bold text-white bg-secondary rounded-full"
            : ""
        }
        `}
        onClick={() => handleRatingChange(rate)}
      >
        <StarIcon
          height={38}
          width={38}
          textColor={getNumberColor(rate)}
          fill="white"
          className={classNames(
            " w-10 h-10 lg:w-12 lg:h-12 absolute inset-2 lg:inset-1.5",
            rating === rate ? `white` : rating > rate ? "white" : "fill-primary"
          )}
        >
          {rate}
        </StarIcon>
      </span>
    );
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="relative flex items-center">
        <div className="absolute flex justify-between w-full">
          {renderRates}
        </div>
        <input
          type="range"
          min="1"
          max={rates.length}
          value={rating || ""}
          onChange={(e) => handleRatingChange(parseInt(e.target.value))}
          className={`w-full appearance-none h-12 border border-survey-border rounded-full rating-${rating}`}
        />
      </div>
      <div className="flex justify-between font-bold text-xs text-primary">
        {renderRatingText}
      </div>
    </div>
  );
};

export default Rates;
