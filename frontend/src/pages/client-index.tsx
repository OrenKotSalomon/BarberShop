import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { clientService } from "../services/client-service";
import { ClientPricing } from "./client-pricing";
import { ClientState } from "../store/client.reducer";
import { Client } from "../models/client-model";

interface IClient {
  client: Client
}
const selectClient = (state: ClientState) => state.client

export function ClientIndex() {
  const { clientId } = useParams();
//   const [client, setClient] = useState(null);
// const client = useSelector<ClientState, IClient>(selectClient)

//   useEffect(() => {
//   }, []);

// if (!client) return <div>Loading...</div>
  return (
    <section className="client-index">
      <h1>Welcome to {clientId}</h1>
      <ClientPricing />
    </section>
  );
}
