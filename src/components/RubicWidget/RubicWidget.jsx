import { useEffect } from "react";

export default function RubicWidget() {
  useEffect(() => {
    // Widget configuration
    const configuration = {
      from: "ETH",
      to: "0x3330BFb7332cA23cd071631837dC289B09C33333",
      fromChain: "ETH",
      toChain: "ETH",
      amount: 1,
      iframe: "true",
      hideSelectionFrom: false,
      hideSelectionTo: true,
      hideTokenSwitcher: false,
      theme: "dark",
      injectTokens: {
        eth: ["0x3330BFb7332cA23cd071631837dC289B09C33333"],
      },
      slippagePercent: {
        instantTrades: 2,
        crossChain: 5,
      },
      crossChainIntegratorAddress: "",
      onChainIntegratorAddress: "",
      whitelistOnChain: [],
      blacklistOnChain: [],
      whitelistCrossChain: [],
      blacklistCrossChain: [],
    };

    Object.freeze(configuration);

    // Initialize the Rubic widget after the component mounts
    if (window.rubicWidget) {
      window.rubicWidget.init(configuration);
    }
  }, []);

  return (
    <div>
      <div
        id="rubic-widget-root"
        style={{ width: "100%", height: "500px" }}
      ></div>
    </div>
  );
}
