// src/app.tsx

import { ConnectWallet } from "@thirdweb-dev/react";

function WalletButton() {
  return (
    <div>
      <h2>Connect Your Wallet</h2>
      <ConnectWallet />
    </div>
  );
}

export default WalletButton;

import { client } from "./client";
import { ConnectButton } from "thirdweb/react";
 
function App() {
  return (
    <div>
      <ConnectButton client={client} />
    </div>
  );
}
