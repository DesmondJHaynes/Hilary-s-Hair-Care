import { useState } from "react";
import { createClient } from "../data/clientdata.js";
import { Form, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const NewClient = () => {
  const [client, setClient] = useState({ firstName: "", lastName: "" });
  const navigate = useNavigate();

  const handleChnage = (e, target) => {
    const { value } = e.target;
    const clone = structuredClone(client);
    clone[target.name] = value.trim();
    setClient(clone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client.firstName !== "" && client.lastName !== "") {
      createClient(client).then(() => navigate("/clients"));
    }
  };

  return (
    <>
      <div className="container">
        <h2>New Client Info</h2>
        <div className="border">
          <Form>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              placeholder="Jon"
              value={client.firstName}
              onChange={(e) => handleChnage(e, e.target)}
            />
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={client.lastName}
              onChange={(e) => handleChnage(e, e.target)}
            />
          </Form>
        </div>
        {/* <Link className="invis-link" to={"new-client"}> */}
        <button
          className="center submit-button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
        {/* </Link> */}
      </div>
    </>
  );
};
