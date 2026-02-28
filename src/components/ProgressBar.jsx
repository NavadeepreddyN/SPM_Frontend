const ProgressBar = ({ progress }) => {
  return (
    <div style={{ background: "#ddd", width: "100%", height: "20px" }}>
      <div
        style={{
          width: `${progress}%`,
          background: "green",
          height: "100%"
        }}
      />
    </div>
  );
};

export default ProgressBar;