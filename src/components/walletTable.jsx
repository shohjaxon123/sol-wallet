import React, { useState, useEffect } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import "../components/walletTable.css";

const WalletTable = () => {
  const [wallets, setWallets] = useState([]);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [sellQuantities, setSellQuantities] = useState({});

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((data) => {
        const topWallets = data.slice(0, 50); // 50 ta mashhur walletni olish
        setWallets(
          topWallets.map((item, index) => ({
            id: index + 1,
            wallet: item.name,
            image: item.image,
            sol: (item.current_price / 100).toFixed(4),
          }))
        );

        const initialQuantities = {};
        topWallets.forEach((item, index) => {
          initialQuantities[index + 1] = 0;
        });
        setQuantities(initialQuantities);
        setSellQuantities(initialQuantities);
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleQuantityChange = (id, value, type) => {
   
  };
  
  
  
  

  return (
    <div className="wallet-table-container">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search accounts by address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="wallet-table-wrapper">
        <div className="wallet-table">
          <table>
            <thead>
              <tr>
                <th>✔</th>
                <th>ID</th>
                <th>Wallet</th>
                <th>SOL</th>
                <th>Waiting</th>
                <th >Q</th>
                <th>Buy</th>
                <th>Sell</th>
              </tr>
            </thead>
            <tbody>
              {wallets
                .filter((wallet) =>
                  wallet.wallet.toLowerCase().includes(search.toLowerCase())
                )
                .map((wallet) => (
                  <tr key={wallet.id}>
                    <td>
                      <input type="checkbox" className="checkbox" />
                    </td>
                    <td>{wallet.id}</td>
                    <td>
                      <div className="wallet-info">
                        <img src={wallet.image} alt="wallet" className="wallet-img" />
                        <span>{wallet.wallet}</span>
                        <button onClick={() => copyToClipboard(wallet.wallet)} className="copy-btn">
                          {copied === wallet.wallet ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                    </td>
                    <td>{wallet.sol} SOL</td>
                    <td className="waiting-text">Waiting</td>
                    <td>{quantities[wallet.id]}</td>
                    <td>
                      <input
                        type="number"
                        className="trade-input"
                        placeholder="0.00"
                        min="0"
                       
                      />
                      <button className="buy-btn">Buy</button>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="trade-input"
                        placeholder="0.00"
                        min="0"
                      />
                      <button className="sell-btn">Sell</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletTable;
