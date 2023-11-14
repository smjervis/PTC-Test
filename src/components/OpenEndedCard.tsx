import DialogLayout from "./layouts/DialogLayout";

interface OpenEndedCardProps {
  data: {
    index: number;
    question: string;
    placeholder: string;
    extraFeedbackText: string;
  };
  sectionAmount?: number;
}

const OpenEndedCard = ({ data, sectionAmount }: OpenEndedCardProps) => {
  return (
    <div className="bg-survey-dark-grey shadow-xl rounded-2xl p-12 flex flex-col gap-6 relative">
      <DialogLayout />
      <div className="flex justify-between items-center">
        <span className="text-white text-sm font-bold">{`${data.index} of ${sectionAmount} | Rating slider`}</span>
        <div className="h-20 w-20 rounded-full bg-black text-xs text-white font-bold flex items-center text-center">{data.extraFeedbackText}</div>
      </div>
      <p className="font-bold text-2xl text-white">{data.question}</p>
      <textarea
        className="w-full rounded-lg placeholder:py-3 placeholder:px-6 text-lg"
        rows={5}
        placeholder={data.placeholder}
      ></textarea>
    </div>
  );
};

export default OpenEndedCard;
