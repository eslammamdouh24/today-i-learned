import { useState } from "react";
import Categories from "../data/categories";
import { addFact } from "../services/factsService";

const NewFactForm = ({ setFacts, setShowForm }) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  const isValidHttpUrl = (string) => {
    try {
      const url = new URL(string);
      const isHttp = url.protocol === "http:" || url.protocol === "https:";
      const hasDot = url.hostname.includes(".");
      return isHttp && hasDot;
    } catch {
      return false;
    }
  };

  const isDisabled = !text || !isValidHttpUrl(source) || !category;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDisabled) return;

    setIsUploading(true);
    try {
      const newFact = await addFact({ text, source, category });
      if (newFact) {
        setFacts((facts) => [newFact, ...facts]);
        setText("");
        setSource("http://example.com");
        setCategory("");
        setShowForm(false);
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with world..."
        value={text}
        maxLength={200}
        disabled={isUploading}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>

      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        disabled={isUploading}
        onChange={(e) => setSource(e.target.value)}
      />

      <select
        value={category}
        disabled={isUploading}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Choose category:</option>
        {Categories.filter((cat) => cat?.color).map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>

      <button className="btn btn-large" disabled={isUploading || isDisabled}>
        Post
      </button>
    </form>
  );
};

export default NewFactForm;
