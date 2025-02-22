import { useState } from "react";
import "./Buysell.css";

export default function TradingPanel() {
  const [buyingState, setBuyingState] = useState("Stopped");
  const [sellingState, setSellingState] = useState("Stopped");
  const [poolState, setPoolState] = useState("Stopped");

  return (
    <div className="container">
      <div className="panel-wrapper">
        <div className="panel">
          <div className="forms-container">
            {[{ title: 'Round Buying', state: buyingState, setState: setBuyingState }, { title: 'Round Selling', state: sellingState, setState: setSellingState }, { title: 'Warmup', state: sellingState, setState: setSellingState }].map(({ title, state, setState }) => (
              <div key={title} className="form-section">
                <h3 className="section-title">{title}</h3>
                <label>Sleep (s)</label>
                <div className="input-group">
                  <input type="number" defaultValue="0.5" placeholder="Sleep (s)" />
                  <input type="number" defaultValue="2" placeholder="Sleep (s)" />
                </div>
                <label>Amount (SOL)</label>
                <div className="input-group">
                  <input type="number" defaultValue="0.05" placeholder="Amount (SOL)"/>
                  <input type="number" defaultValue="0.100" placeholder="Amount (SOL)" />
                </div>
                <label>Stop at Vol (SOL)</label>
                <input className="solinput" type="number" defaultValue="50" placeholder="Stop at Vol (SOL)" />
                <div className="buttons">
                  <button className={`start-btn ${state === "Started" ? "disabled" : ""}`} onClick={() => setState("Started")} disabled={state === "Started"}>Start</button>
                  <button className={`stop-btn ${state === "Stopped" ? "disabled" : ""}`} onClick={() => setState("Stopped")} disabled={state === "Stopped"}>Stop</button>
                </div>
                <p className="status">State: <br></br> <span className={state === "Started" ? "started" : "stopped"}>{state}</span></p>
              </div>
            ))}
          </div>


          <div className="form-section">
            <h3 className="section-title">Pool Controlling</h3>
            <label>Send period (s)</label>
            <input className="inputpool" type="number" defaultValue="0.1" placeholder="Send period (s)" />
            <label>Trigger Amount (SOL)</label>
            <input className="inputpool" type="number" defaultValue="72.0" placeholder="Trigger Amount (SOL)" />
            <div className="buttons">
              <button className={`start-btn ${poolState === "Started" ? "disabled" : ""}`} onClick={() => setPoolState("Started")} disabled={poolState === "Started"}>Start</button>
              <button className={`stop-btn ${poolState === "Stopped" ? "disabled" : ""}`} onClick={() => setPoolState("Stopped")} disabled={poolState === "Stopped"}>Stop</button>
            </div>
            <p className="status2">State: <br /> <span className={poolState === "Started" ? "started" : "stopped"}>{poolState}</span></p>
          </div>


          <div className="spread-container">
      <h3 className="spread-title">Spread Funds</h3>
      
      <label className="spread-label">Output Balance (SOL)</label>
      <input type="number" defaultValue="1.0000" className="spread-input" />

      <label className="spread-label">Leave on Source (SOL)</label>
      <input type="number" defaultValue="0.050" className="spread-input" />

      <button className="spread-button">Spread</button>
    </div>
        </div>
      </div>
    </div>
  );
}
