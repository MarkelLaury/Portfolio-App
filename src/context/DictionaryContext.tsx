import React, { createContext, useContext, useEffect, useState } from "react";
import { Person } from "../types/Content";

interface DictionaryContextProps {
  dictionary: Person | null;
  loading: boolean;
  error: string | null;
}

const DictionaryContext = createContext<DictionaryContextProps>({
  dictionary: null,
  loading: true,
  error: null,
});

export const DictionaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dictionary, setDictionary] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/assets/content2.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load dictionary");
        return res.json();
      })
      .then((data: Person) => setDictionary(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DictionaryContext.Provider value={{ dictionary, loading, error }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => useContext(DictionaryContext);
