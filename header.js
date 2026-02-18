function Header({ account }) {
  return (
    <div className="w-full bg-green-100 p-4 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-green-800">
        🌿 Blockchain Botanical Traceability System
      </h1>

      {account ? (
        <p className="text-green-700 mt-2">
          Wallet Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      ) : (
        <p className="text-red-600 mt-2">Wallet not connected</p>
      )}
    </div>
  );
}

export default Header;
