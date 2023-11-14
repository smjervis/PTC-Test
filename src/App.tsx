import { useState, useEffect, FormEvent } from "react";
import { surveyData } from "./data/surveyData";
import RatingSliderCard from "./components/RatingSliderCard";
import RatingAndCheckboxCard from "./components/RatingAndCheckboxCard";
import OpenEndedCard from "./components/OpenEndedCard";
import RightArrowIcon from "./icons/right-arrow";
import EarthIcon from "./icons/earth";
import DarkIcon from "./icons/dark";
import ProgressBar from "./components/ProgressBar";
import classnames from "classnames";
import NotificationMessage from "./components/Notification";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("bg-survey-black", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleInputChange = (event: unknown) => {
    setFormData({ ...formData, event });
    if (progress <= 100) {
      setProgress(progress + (1 / sectionsAmount) * 100);
    }
    return;
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsComplete(true);
  };

  const {
    user,
    survey,
    ratingValues,
    ratingText,
    text,
    agreementText,
    footer,
  } = surveyData;

  const sectionsAmount = Object.keys(survey).length;

  const renderSliderCard = survey.typeRatingSlider.map((data, idx) => {
    return (
      <div key={data.index}>
        <RatingSliderCard
          data={data}
          rates={ratingValues}
          ratingText={ratingText}
          sectionAmount={sectionsAmount}
          onChange={handleInputChange}
        />
        {idx === 0 ? <hr className="border mt-6" /> : <></>}
      </div>
    );
  });

  const renderRatingSliderCard = survey.typeRatingAndCheckbox.map((data) => {
    return (
      <RatingAndCheckboxCard
        data={data}
        key={data.index}
        rates={ratingValues}
        ratingText={ratingText}
        sectionAmount={sectionsAmount}
        onChange={handleInputChange}
      />
    );
  });
console.log(progress)
  const renderTerms = footer.terms.map((term, idx) => {
    return (
      <p key={term}>
        {term}
        {idx === 0 && " |"}
      </p>
    );
  });

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <ProgressBar progress={progress} />
      <div className="flex justify-between">
        <span
          onClick={toggleDarkMode}
          className="border p-2 rounded-lg border-survey-border cursor-pointer"
        >
          <DarkIcon className="fill-primary dark:fill-white" />
        </span>
        <span className="font-bold dark:text-white">{user.companyName}</span>
      </div>
      <div className="w-full md:w-3/5 mx-auto flex flex-col gap-6 px-6 pt-8 pb-12">
        <p className="font-bold text-3xl dark:text-white">{`Hi ${user.name},`}</p>
        <p className="text-sm dark:text-white">{text}</p>
        <p className="font-bold text-lg dark:text-white">{agreementText}</p>
        {renderSliderCard}
        {renderRatingSliderCard}
        <OpenEndedCard data={survey.openEnded} sectionAmount={sectionsAmount} />
        <button
          disabled={progress < 100}
          type="submit"
          className={classnames(
            "bg-secondary text-white p-4 font-bold text-lg rounded-lg flex gap-3 items-center self-end disabled:bg-opacity-25",
            {
              hidden: isComplete,
            }
          )}
        >
          Submit <RightArrowIcon height={30} width={30} />
        </button>
        <div className={classnames({ block: isComplete, hidden: !isComplete })}>
          <NotificationMessage notification={"Survey complete. Thank you!"} />
        </div>
        <div className="flex flex-col self-center gap-6">
          <button className="p-3 rounded-lg border border-survey-border font-bold text-xs text-primary flex gap-3 justify-center items-center">
            Modify my language
            <EarthIcon fill="white" height={24} width={24} />
          </button>
          <div className="text-sm flex flex-col gap-6">
            <p className="dark:text-white">
              {footer.description.text}{" "}
              <span className="text-secondary">{footer.description.link}</span>
            </p>
            <div className="flex gap-2 text-secondary dark:text-white">
              {renderTerms}
            </div>
            <p className="dark:text-white">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
