import { ChangeEvent, useState } from "react";
import CheckIcon from "../icons/check";
import classNames from "classnames";

interface CheckInputProps {
  inputs: string[];
  onChange:(event: unknown) => void
}

interface CheckedStates{
  [key: number]: boolean;
}

interface TextValues{
  [key: number]: string;
}

const CheckInput = ({ inputs, onChange }: CheckInputProps) => {
  const [checkedStates, setCheckedStates] = useState<CheckedStates>({});
  const [textValues, setTextValues] = useState<TextValues>({});

  const handleCheckboxChange = (idx: number) => {
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [idx]: !prevStates[idx],
    }));
    onChange(checkedStates)
  };

  const handleInputChange = (
    idx: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTextValues((prevValues) => ({
      ...prevValues,
      [idx]: e.target.value,
    }));
    onChange(textValues)
  };

  const renderCheckInput = inputs.map((input, idx) => {
    const isChecked = checkedStates[idx] || false;
    const textValue = textValues[idx] || "";
    return (
      <div key={`input-${idx}`} className="flex flex-col gap-3">
        <label
          className={classNames(
            "flex items-center cursor-pointer font-bold text-lg border rounded-lg bg-survey-light-grey text-primary",
            {
              "!bg-secondary text-white": isChecked,
            }
          )}
        >
          <div className="p-4 flex items-center relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(idx)}
              className={classNames(
                "appearance-none h-6 w-6 cursor-pointer checked:bg-white rounded-md",
                {
                  "border-2 border-survey-red ": !isChecked,
                }
              )}
            />
            {isChecked && (
              <CheckIcon className="absolute top-3 left-5 fill-survey-red" />
            )}
          </div>

          <div className="py-4 px-3 w-full border-l">{input}</div>
        </label>

        {isChecked && (
          <>
            <div className="w-full">
              <textarea
                rows={5}
                className="border w-full rounded-lg py-3 px-6 placeholder:text-secondary placeholder:text-lg"
                value={textValue}
                onChange={(e) => handleInputChange(idx, e)}
                placeholder="Add a comment"
              ></textarea>
            </div>
          </>
        )}
      </div>
    );
  });

  return <>{renderCheckInput}</>;
};

export default CheckInput;
