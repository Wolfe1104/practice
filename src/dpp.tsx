// src/app.tsx
import { client } from "./client";
import { ConnectButton } from "thirdweb/react";
 
function App() {
  return (
    <div>
      <ConnectButton client={client} />
    </div>
  );
}
