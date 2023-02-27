import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import { Client } from "../models/client-model";
import { SET_CLIENT } from "../store/client.reducer";

interface IClient {
  client: Client;
}

export function ClientPreview({ client }: IClient) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSelectClient = (clientId: string) => {
    dispatch({type: SET_CLIENT, payload: client})
    navigate(`/client/${clientId}`);
  };

  return (
    <li
      className="client-preview"
      key={client._id}
      onClick={() => onSelectClient(client._id)}
    >
      {client.businessName}
      <img src={`https://robohash.org/${client._id}?set=set5`} />
    </li>
  );
}
