import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

const ConfigPage = () => {
  const [token, setToken] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const { domain } = useParams();

  useEffect(() => {
    const cookieToken = Cookies.get("authToken");
    const userName = Cookies.get("userName");
    const userEmail = Cookies.get("userEmail");
    setName(userName);
    setEmail(userEmail);
    setToken(cookieToken);
  }, []);

  return (
    <div className="flex flex-col items-start p-4 space-y-4">
      {!domain ? (
        <div className="h-screen items-center flex">
          <span>Domain not found</span>
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-4">
            <span>{domain}</span>
            <select className="border rounded p-2">
              <option>1 Tahun</option>
              {/* other options */}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <div className="border rounded p-2">
              <span>Total Rp 100.000</span>
            </div>
          </div>

          {token && name && email ? (
            <div className="space-y-2">
              <div>
                <span>Nama : {name}</span>
              </div>
              <div>
                <span>Email : {email}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div>
                <label className="block">Nama :</label>
                <input type="text" className="border rounded p-2 w-full" />
              </div>
              <div>
                <label className="block">Email :</label>
                <input type="text" className="border rounded p-2 w-full" />
              </div>
              <div>
                <label className="block">Password :</label>
                <input type="password" className="border rounded p-2 w-full" />
              </div>
              <div className="text-blue-500">
                <a href="/login" className="underline">
                  atau login disini
                </a>
              </div>
            </div>
          )}
          <button className="bg-black text-white p-2 rounded mt-4">CHECKOUT</button>
        </>
      )}
    </div>
  );
};

export default ConfigPage;
