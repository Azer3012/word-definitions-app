import axios from "axios";
import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [word, setword] = useState([]);
  const [langSettings, setLangSettings] = useState([
    { id: 1, code: "en_US", name: "English (US)" },
    { id: 2, code: "hi", name: "Hindi" },
    { id: 3, code: "es", name: "Spanish" },
    { id: 4, code: "fr", name: "French" },
    { id: 5, code: "ja", name: "Japanese" },
    { id: 6, code: "ru", name: "Russian" },
    { id: 7, code: "en_GB", name: "English (UK)" },
    { id: 8, code: "de", name: "German" },
    { id: 9, code: "it", name: "Italian" },
    { id: 10, code: "ko", name: "Korean" },
    { id: 11, code: "pt-BR", name: "Brazilian Portuguese" },
    { id: 12, code: "ar", name: "Arabic" },
    { id: 13, code: "tr", name: "Turkish" },
  ]);

  const [selectedLang, setSelectedLang] = useState("en_US");

  const [selectedWord, setSelectedWord] = useState("");

  const getDefinition = async (lang, word) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      );

      setword(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Context.Provider
      value={{
        getDefinition,
        word,
        setword,
        langSettings,
        setLangSettings,
        setSelectedLang,
        selectedLang,
        selectedWord,
        setSelectedWord,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
