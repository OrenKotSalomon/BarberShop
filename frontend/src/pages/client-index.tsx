import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { clientService } from "../services/client-service";
import { ClientPricing } from "./client-pricing";
import { ClientState } from "../store/client.reducer";
import { loadClient } from "../store/client.action";
import { Client } from "../models/client-model";

export function ClientIndex() {
  const { clientId } = useParams() as {
    clientId: string
  };
  const [client, setClient] = useState({} as Client);
  // const client = useSelector<ClientState, ClientState["client"]>((state) => state.client)

  useEffect(() => {
    getClient()
  }, []);

  const getClient = async () => {
    const currClient = await loadClient(clientId) as Client;
    setClient(currClient)

  }

  console.log(client);

  if (!client) return <div>Loading...</div>
  return (
    <section className="client-index">
      <h1>{client.businessName}</h1>
      <ClientPricing packages={client.packages} />
    </section>
  );
}
