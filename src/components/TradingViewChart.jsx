import React, { useEffect, useRef } from "react";
import "./TradingViewChart.css"

const TradingViewChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js"; // TradingView skriptini yuklaydi
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%",
        height: 800,
        symbol: "BINANCE:BTCUSDT", // Bu yerni o'zgartirib, o'zingiz xohlagan bozorni qo'yishingiz mumkin
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#000",
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
        studies: ["RSI@tv-basicstudies"], // Indikatorlar
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tradingview_chart" ref={chartContainerRef} style={{ width: "73%", height: "905px" }} />;
};

export default TradingViewChart;
