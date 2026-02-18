import React from "react";
import { QrReader } from "react-qr-reader";

function QRScanner({ onScan }) {
  return (
    <div className="p-4">
      <QrReader
        onResult={(result, error) => {
          if (!!result) onScan(result?.text);
        }}
        constraints={{ facingMode: "environment" }}
        className="w-full"
      />
    </div>
  );
}

export default QRScanner;
