import React from "react";
import WalletTable from "./components/walletTable";
import TradingPanel from "./components/tradingPanel";
import CreateTokenForm from "./components/CreateTokenForm";
import TradingViewChart from "./components/TradingViewChart";
function App() {
  return (
    <div className="App">
      <WalletTable />
      <TradingPanel />
      <CreateTokenForm />
      <TradingViewChart />
    </div>
  );
}

export default App;
