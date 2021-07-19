import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";

function WordSearch() {
  const {
    getDefinition,
    setSelectedLang,
    selectedLang,
    setSelectedWord,
    selectedWord,
    langSettings,
  } = useContext(Context);

  return (
    
    <div className="word-search">
      <div className="form-group d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Write here"
          onChange={(e) => setSelectedWord(e.target.value)}
        />
        <Link
          to="/info"
          onClick={() => getDefinition(selectedLang, selectedWord)}
          className="btn btn-success"
        >
          Search
        </Link>
      </div>
      <select
        className="form-control mt-2"
        value={selectedLang}
        onChange={(e) => setSelectedLang(e.target.value)}
      >
        {langSettings.map((lang) => (
          <option key={lang.id} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default WordSearch;
