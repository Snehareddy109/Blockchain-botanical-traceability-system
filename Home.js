import React, { useEffect, useState } from "react";
import HerbCard from "../components/HerbCard";
import { getAllHerbs } from "../services/api";

function Home() {
  const [herbs, setHerbs] = useState([]);

  useEffect(() => {
    getAllHerbs().then(data => setHerbs(data));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {herbs.length > 0 ? herbs.map(herb => <HerbCard key={herb.id} herb={herb} />)
        : <p>No herbs found.</p>}
    </div>
  );
}

export default Home;
