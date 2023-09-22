import { useEffect, useState } from "react";
import { getClients } from "../data/clientdata.js";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export const ClientList = () => {
  const [clients, setClients] = useState();

  useEffect(() => {
    getClients().then(setClients);
  }, []);

  if (!clients) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Our Clients</h2>
        <div className="border">
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Last Name</th>
                <th>First Name</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={`client--${c.id}`}>
                  <td>{c.id}</td>
                  <td>{c.firstName}</td>
                  <td>{c.lastName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Link className="invis-link" to={"new-client"}>
          <button className="center add-new-button">Add New Client</button>
        </Link>
      </div>
    </>
  );
};
