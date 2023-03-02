import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { clientService } from "../services/client-service";
import { ClientPricing } from "./client-pricing";
import { ClientState } from "../store/client.reducer";
import { loadClient, setSelectedPack } from "../store/client.action";
import { Client } from "../models/client-model";

export function ClientIndex() {
  const { clientId } = useParams() as {
    clientId: string
  }
  const [client, setClient] = useState({} as Client)
  // const client = useSelector<ClientState, ClientState["client"]>((state) => state.client)
  const navigate = useNavigate()
  useEffect(() => {
    getClient()
  }, [])

  const getClient = async () => {
    const currClient = (await loadClient(clientId)) as Client
    setClient(currClient)
  }
  function onSelectPack(packId: string) {
    console.log("packId:", packId)
    setSelectedPack(packId)
    navigate("/calendar")
  }

  console.log(client)

  if (!client) return <h1>Loading...</h1>
  return (
    <section className="client-index flex column">
      <h1 className="welcome-title">Welcome Back *Username* !</h1>
      <h1>{client.businessName}</h1>
      <Link to={`/client/${clientId}/about`}>About Client</Link>
      <ClientPricing packages={client.packages} onSelectPack={onSelectPack} />
    </section>
  )
}
