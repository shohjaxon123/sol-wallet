import React from "react";
import WalletTable from "./components/walletTable";
import TradingPanel from "./components/tradingPanel";
import CreateTokenForm from "./components/CreateTokenForm";
import TradingViewChart from "./components/TradingViewChart";
import Buysell from "./components/Buysell";
function App() {
  return (
    <div className="App">
      <WalletTable />
      <TradingPanel />
      <CreateTokenForm />
      <TradingViewChart />
      <Buysell />
    </div>
  );
}

export default App;
