import { useEffect, useState } from "react";
import { getStylists } from "../data/stylistdata.js";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export const StylistList = () => {
  const [stylists, setStylists] = useState();

  useEffect(() => {
    getStylists().then(setStylists);
  }, []);

  if (!stylists) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Our Stylists</h2>
        <div className="border">
          <h4>Active Stylists</h4>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stylists.map((c) =>
                c.isActive ? (
                  <tr key={`stylist--${c.id}`}>
                    <td>{c.id}</td>
                    <td>{c.firstName}</td>
                    <td>{c.lastName}</td>
                    <Link className="invis-link" to={`${c.id}`}>
                      <button>Details</button>
                    </Link>
                  </tr>
                ) : null
              )}
            </tbody>
          </Table>
        </div>
        <Link className="invis-link" to={"new-stylist"}>
          <button className="center add-new-button">Add New Stylist</button>
        </Link>
        <h4>Previous Employees</h4>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {stylists.map((c) =>
              c.isActive === false ? (
                <tr key={`stylist--${c.id}`}>
                  <td>{c.id}</td>
                  <td>{c.firstName}</td>
                  <td>{c.lastName}</td>
                  <td>
                    <Link className="invis-link" to={`${c.id}`}>
                      <button>Details</button>
                    </Link>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};
