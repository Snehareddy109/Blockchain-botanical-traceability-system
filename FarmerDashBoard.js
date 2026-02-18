import React, { useState } from "react";
import QRScanner from "../components/QRScanner";

function FarmerDashboard() {
  const [scanResult, setScanResult] = useState("");

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Farmer Dashboard</h1>
      <p>Scan QR code of harvested herb:</p>
      <QRScanner onScan={text => setScanResult(text)} />
      {scanResult && <p className="mt-4 text-green-700">Scanned QR Data: {scanResult}</p>}
    </div>
  );
}

export default FarmerDashboard;
