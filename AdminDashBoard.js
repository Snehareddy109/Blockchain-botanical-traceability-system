import React, { useEffect, useState } from "react";
import { getAllHerbs } from "../services/api";

function AdminDashboard() {
  const [herbs, setHerbs] = useState([]);

  useEffect(() => {
    getAllHerbs().then(data => setHerbs(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-green-100">
            <th className="border px-4 py-2">Batch ID</th>
            <th className="border px-4 py-2">Herb Name</th>
            <th className="border px-4 py-2">Owner</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Blockchain Hash</th>
          </tr>
        </thead>
        <tbody>
          {herbs.map((herb) => (
            <tr key={herb.id}>
              <td className="border px-4 py-2">{herb.batchId}</td>
              <td className="border px-4 py-2">{herb.name}</td>
              <td className="border px-4 py-2">{herb.owner}</td>
              <td className="border px-4 py-2">{herb.location}</td>
              <td className="border px-4 py-2 break-all">{herb.blockchainHash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
