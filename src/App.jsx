import { useState, useEffect } from "react";
import "./style.css";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import CategoryFilter from "./components/CategoryFilter";
import FactsList from "./components/FactsList";
import Loader from "./components/Loader";
import { getFacts } from "./services/factsService";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [facts, setFacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    loadFacts();
  }, [currentCategory]);

  const loadFacts = async () => {
    setIsLoading(true);

    const factsData = await getFacts(currentCategory);

    if (factsData) {
      setFacts(factsData);
    }

    setShowForm(false);
    setIsLoading(false);
  };

  return (
    <>
      <Header
        showForm={showForm}
        setShowForm={() => setShowForm((prev) => !prev)}
      />

      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />

        {isLoading ? (
          <Loader />
        ) : (
          <FactsList facts={facts} setFacts={setFacts} />
        )}
      </main>

      <Toaster position="top-right" />
    </>
  );
};

export default App;
