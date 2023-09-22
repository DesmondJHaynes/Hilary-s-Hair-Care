import { useState } from "react";
import { createStylist } from "../data/stylistdata.js";
import { Form, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const NewStylist = () => {
  const [stylist, setStylist] = useState({ firstName: "", lastName: "" });
  const navigate = useNavigate();

  const handleChnage = (e, target) => {
    const { value } = e.target;
    const clone = structuredClone(stylist);
    clone[target.name] = value.trim();
    setStylist(clone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stylist.firstName !== "" && stylist.lastName !== "") {
      createStylist(stylist).then(() => navigate("/stylists"));
    }
  };

  return (
    <>
      <div className="container">
        <h2>New Stylist Info</h2>
        <div className="border">
          <Form>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              placeholder="Jon"
              value={stylist.firstName}
              onChange={(e) => handleChnage(e, e.target)}
            />
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={stylist.lastName}
              onChange={(e) => handleChnage(e, e.target)}
            />
          </Form>
        </div>
        <button
          className="center submit-button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </>
  );
};
