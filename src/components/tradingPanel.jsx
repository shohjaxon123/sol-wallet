import React, { useState } from "react";
import "./tradingPanel.css"; 

const TradingPanel = () => {
  const [slippage, setSlippage] = useState(1.5);
  
  return (
    <div className="trading-panel">
      {/* General */}
      <div className="section">
  <label className="label">Slippage (%)</label>
  <div className="input-container">
    <input
      type="number"
      className="input-field"
      value={slippage}
      onChange={(e) => setSlippage(e.target.value)}
    />
  </div>
</div>


      {/* Vault Info */}
      <div className="info">
        <p>Sol in Vault: <span>0.00</span> <span className="small-text">(85.00 left)</span></p>
        <p>Our Sol cost: <span>0.00</span></p>
        <p>Total Sol cost: <span>0.00</span></p>
        <p>Our Tokens: <span>0.00M</span></p>
        <p>Total Tokens: <span>0.00M</span></p>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="sell-btn2">SELL ALL (sum 139.15)</button>
        <button className="cycle-btn">NEXT CYCLE</button>
      </div>
    </div>
  );
};

export default TradingPanel;
