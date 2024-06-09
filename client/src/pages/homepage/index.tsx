import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [domain, setDomain] = useState('');
  const [message, setMessage] = useState('');
  const [available, setAvailable] = useState(false);

  const handleSearch = () => {
    axios.get(`${import.meta.env.VITE_API_URL}`,{
      params: {
        domain: {domain}
      }
    }) // Replace example.com with your API endpoint
      .then(response => {
        if (response.data.result === 'success' && response.data.status === 'available') {
          setMessage('The domain is available.');
          setAvailable(true);
        } else {
          setMessage('Sorry, the domain is not available.');
          setAvailable(false);
          toast.error('Sorry, the domain is not available.');
        }
      })
      .catch(error => {
        setMessage('An error occurred while checking domain availability.');
        setAvailable(false);
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Toaster/>
      <div className="flex flex-col items-center mb-6">
        <input
          className="border border-gray-400 rounded-md px-4 py-2 w-72 mb-4"
          type="text"
          placeholder="Search for a domain (e.g., example.com)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button
          className="bg-black text-white rounded-md px-4 py-2"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
      {available && (
        <div className="flex flex-col items-center">
          <p className="mb-4">{message}</p>
          <button className="bg-black text-white rounded-md px-4 py-2">
            ORDER
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
