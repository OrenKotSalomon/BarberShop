import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientPreview } from "../cmps/client-preview";
import { Client } from "../models/client-model";

import { clientService } from "../services/client-service";

export function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = () => {
    setClients(clientService.getClients());
};

  if (!clients.length) return <div>Loading...</div>;
  return <ul className="client-list">
    {clients.map(client => <ClientPreview client={client} />  )}
  </ul>;
}
