import { useState } from "react";

function HerbForm() {
  const [herb, setHerb] = useState({
    name: "",
    location: "",
    harvestDate: "",
  });

  const handleChange = (e) => {
    setHerb({ ...herb, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Herb data captured successfully 🌱");
    console.log(herb);
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Add Herb Details</h2>

      <input
        type="text"
        name="name"
        placeholder="Herb Name"
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="date"
        name="harvestDate"
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Submit Herb
      </button>
    </div>
  );
}
export default HerbForm;