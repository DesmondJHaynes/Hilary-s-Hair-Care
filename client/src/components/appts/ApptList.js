import { useEffect, useState } from "react";
import { getApptList } from "../data/apptData.js";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export const ApptList = () => {
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    getApptList().then(setAppts);
  }, []);

  if (!appts) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Our Appointments</h2>
        <div className="border">
          <h4>Active Appointments</h4>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Scheduled Time</th>
                <th>Customer</th>
                <th>Stylist</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {appts.map((a) =>
                a.isActive ? (
                  <tr key={`appt--${a.id}`}>
                    <td>{a.id}</td>
                    <td>{a.scheduledTime}</td>
                    <td>
                      {a.customer.lastName}, {a.customer.firstName}
                    </td>
                    <td>
                      {a.stylist.lastName}, {a.stylist.firstName}
                    </td>
                    <Link className="invis-link" to={`${a.id}`}>
                      <button>Details</button>
                    </Link>
                  </tr>
                ) : null
              )}
            </tbody>
          </Table>
        </div>
        <Link className="invis-link" to={"/appointments/new-appt"}>
          <button className="center add-new-button">Add New Appt</button>
        </Link>
        <h4>Previous appointments</h4>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Scheduled Time</th>
              <th>Customer</th>
              <th>Stylist</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {appts.map((a) =>
              a.isActive === false ? (
                <tr key={`appt--${a.id}`}>
                  <td>{a.id}</td>
                  <td>{a.scheduledTime}</td>
                  <td>
                    {a.customer.lastName}, {a.customer.firstName}
                  </td>
                  <td>
                    {a.stylist.lastName}, {a.stylist.firstName}
                  </td>
                  <Link className="invis-link" to={`${a.id}`}>
                    <button>Details</button>
                  </Link>
                </tr>
              ) : null
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};
