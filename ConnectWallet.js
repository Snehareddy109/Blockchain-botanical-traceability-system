function ConnectWallet({ connectWallet, account }) {
  if (account) return null;

  return (
    <button
      onClick={connectWallet}
      className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
    >
      Connect MetaMask 🦊
    </button>
  );
}

export default ConnectWallet;