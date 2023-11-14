import Rates from "./Rates";

interface RateSliderProps {
  rates: { lg: number[]; sm: number[] };
  ratingText: string[];
  onChange:(event: unknown) => void
}

const RateSlider = ({ rates, ratingText, onChange }: RateSliderProps) => {
  return (
    <>
      <div className="lg:hidden">
        <Rates rates={rates.sm} ratingText={ratingText} onChange={onChange}/>
      </div>
      <div className="hidden lg:block">
        <Rates rates={rates.lg} ratingText={ratingText} onChange={onChange}/>
      </div>
    </>
  );
};

export default RateSlider;
