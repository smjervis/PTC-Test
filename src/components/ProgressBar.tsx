interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {

  return (
    <div className="bg-white">
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#532EE4",
          height: "4px",
          borderRadius: "100px",
          marginBottom: "1.5rem"
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
