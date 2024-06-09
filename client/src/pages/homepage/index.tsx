import { useState } from "react";

const HomePage = () => {
  const [domain, setDomain] = useState('');
  const [message, setMessage] = useState('');
  const [available, setAvailable] = useState(false);

  const handleSearch = () => {
    setDomain('tokotesting.id');
    setMessage('Selamat domain anda tersedia');
    setAvailable(true);
    // Here you can add the logic to fetch and check the domain availability
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center mb-6">
        <input
          className="border border-gray-400 rounded-md px-4 py-2 w-72 mb-4"
          type="text"
          placeholder="Cari domain contoh: example.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button
          className="bg-black text-white rounded-md px-4 py-2"
          onClick={handleSearch}
        >
          CARI
        </button>
      </div>
      {available && (
        <div className="flex flex-col items-center">
          <p className="mb-4">{message}</p>
          <button className="bg-black text-white rounded-md px-4 py-2">
            PESAN
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage