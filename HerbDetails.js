import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHerbById } from "../services/api";

function HerbDetails() {
  const { id } = useParams();
  const [herb, setHerb] = useState(null);

  useEffect(() => {
    getHerbById(id).then(data => setHerb(data));
  }, [id]);

  if (!herb) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <img src={herb.image} alt={herb.name} className="h-64 w-full object-cover mb-4" />
      <h1 className="text-2xl font-bold mb-2">{herb.name}</h1>
      <p><strong>Location:</strong> {herb.location}</p>
      <p><strong>Harvest Date:</strong> {herb.harvestDate}</p>
      <p><strong>Batch ID:</strong> {herb.batchId}</p>
      <p><strong>Owner:</strong> {herb.owner}</p>
      <p><strong>Blockchain Hash:</strong> {herb.blockchainHash}</p>
    </div>
  );
}

export default HerbDetails;
