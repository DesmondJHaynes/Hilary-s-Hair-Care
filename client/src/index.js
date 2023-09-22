import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ClientList } from "./components/clients/ClientList.js";
import { NewClient } from "./components/clients/NewClient.js";
import { StylistList } from "./components/stylists/StylistList.js";
import { NewStylist } from "./components/stylists/NewStylist.js";
import { StylistDetails } from "./components/stylists/StylistDetails.js";
import { ApptList } from "./components/appts/ApptList.js";
import { NewAppt } from "./components/appts/NewAppt.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ApptList />} />
        <Route path="appointments">
          <Route index element={<ApptList />} />
          <Route index="new-appt" element={<NewAppt />} />
        </Route>
        <Route path="clients">
          <Route index element={<ClientList />} />
          <Route path="new-client" element={<NewClient />} />
        </Route>
        <Route path="stylists">
          <Route index element={<StylistList />} />
          <Route path="new-stylist" element={<NewStylist />} />
          <Route path=":id" element={<StylistDetails />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
