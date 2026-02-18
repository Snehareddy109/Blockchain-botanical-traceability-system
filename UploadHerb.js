import React, { useState } from "react";
import { uploadToIPFS, recordHerbOnBlockchain } from "../services/api";
import { ethers } from "ethers";
import HerbContractABI from "../contracts/HerbContractABI.json";

function UploadHerb() {
  const [formData, setFormData] = useState({
    batchId: "", name: "", location: "", harvestDate: "", owner: "", image: null
  });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    if (e.target.name === "image") setFormData({...formData, image: e.target.files[0]});
    else setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpload = async () => {
    try {
      setStatus("Uploading image to IPFS...");
      const imageURL = await uploadToIPFS(formData.image);

      setStatus("Connecting to blockchain...");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
      const contract = new ethers.Contract(contractAddress, HerbContractABI, signer);

      setStatus("Recording herb on blockchain...");
      const txHash = await recordHerbOnBlockchain({...formData, imageURL}, contract);

      setStatus(`Herb uploaded! Transaction hash: ${txHash}`);
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Upload Herb</h1>
      <div className="space-y-4 max-w-md">
        {["batchId","name","location","harvestDate","owner"].map(field => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            className="w-full border p-2 rounded"
            value={formData[field]}
            onChange={handleChange}
          />
        ))}
        <input type="file" name="image" onChange={handleChange} className="w-full border p-2 rounded"/>
        <button onClick={handleUpload} className="bg-green-700 text-white px-4 py-2 rounded">
          Upload
        </button>
        {status && <p className="mt-2 text-blue-700">{status}</p>}
      </div>
    </div>
  );
}

export default UploadHerb;
