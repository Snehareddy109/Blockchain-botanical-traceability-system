import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConnectWallet from "./components/ConnectWallet";
import HerbForm from "./components/HerbForm";
import HerbCard from "./components/HerbCard";

function App() {
  const [account, setAccount] = useState("");


  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not installed");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header account={account} />
      <ConnectWallet connectWallet={connectWallet} account={account} />
      {account && <HerbForm />}
    </div>
  );
}

export default App;
