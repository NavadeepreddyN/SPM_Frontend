import { useState } from "react";

const StudentSubmissions = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="page-card">
      <h2>Submit Project</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p>Selected File: {file.name}</p>
      )}

      <button>Upload</button>
    </div>
  );
};

export default StudentSubmissions;