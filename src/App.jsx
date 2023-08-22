import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--hxhcg25qdky2.code.run/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Header />
      {isLoading ? "... chargement" : <Restaurant data={data} />}
      <Footer />
    </>
  );
}

export default App;
