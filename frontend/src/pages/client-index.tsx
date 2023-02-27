import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { clientService } from "../services/client-service";
import { ClientPricing } from "./client-pricing";
import { ClientState } from "../store/client.reducer";

export function ClientIndex() {
  const { clientId } = useParams();
//   const [client, setClient] = useState(null);
const client = useSelector<ClientState, ClientState["client"]>((state) => state.client)

//   useEffect(() => {
//   }, []);

if (!client) return <div>Loading...</div>
  return (
    <section className="client-index">
      <h1>Client Index</h1>
      <ClientPricing />
    </section>
  );
}
