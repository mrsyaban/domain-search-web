import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, {
        email,
        password,
      });
      const { token, userEmail , userName } = response.data;
      Cookies.set("authToken", token, { expires: 1 }); 
      Cookies.set("userEmail", userEmail, { expires: 1 }); 
      Cookies.set("userName", userName, { expires: 1 });
      
      toast.success("Login successful");
      console.log("Login successful:", response.data);
      
      // redirect to home page
      navigate("/"); 
    } catch (error) {
      toast.error("Error logging in");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Toaster />
      <div className="p-6 bg-gray-600 rounded-md shadow-xl ">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Enter Password"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-fit font-bold py-2 px-4 rounded-md self-end focus:outline-none focus:shadow-outline"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
