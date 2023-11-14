import CheckInput from "./CheckInput";
import RateSlider from "./RateSlider";
import DialogLayout from './layouts/DialogLayout';

interface RatingAndCheckboxCardProps {
  data: {
    index: number;
    question: string;
    improvementText: string;
    feedbackOptions: string[];
  };
  rates: { lg: number[]; sm: number[] };
  ratingText: string[];
  sectionAmount?: number;
  onChange:(event: unknown) => void
}

const RatingAndCheckboxCard = ({
  data,
  rates,
  ratingText,
  sectionAmount,
  onChange
}: RatingAndCheckboxCardProps) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-12 flex flex-col gap-6 relative">
      <DialogLayout />
      <span className="text-primary text-sm font-bold">{`${data.index} of ${sectionAmount} | Rating slider`}</span>
      <p className="font-bold text-2xl">{data.question}</p>
      <RateSlider rates={rates} ratingText={ratingText} onChange={onChange}/>
      <hr className="border" />
      <p className="text-base font-bold text-survey-red">{data.improvementText}</p>
      <CheckInput inputs={data.feedbackOptions} onChange={onChange}/>
    </div>
  );
};

export default RatingAndCheckboxCard;
