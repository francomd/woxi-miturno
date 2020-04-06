import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { TicketStepper } from "./components/TicketStepper";

export const Portal = (props) => {
  // replace for query of react router
  const qs = queryString.parse(location.search);
  const [query, setQuery] = useState("");
  // const [header, setHeader] = useState("");
  // const [subheader, setSubheader] = useState("");
  // const [description, setDescription] = useState("");

  useEffect(() => {
    setQuery(qs);
  }, [props.location]);

  // if (query && query.empresa) {
  //   if (query.sucursal) {
  //     let { hea, des } = reasonMsg(query.empresa, query.sucursal);
  //     setHeader(hea);
  //     setDescription(des);
  //   } else {
  //     let { hea, des } = branchMsg(query.empresa);
  //     setHeader(hea);
  //     setDescription(des);
  //   }
  // } else {
  //   let { hea, sub } = welcomeMsg(user.name);
  //   setHeader(hea);
  //   setSubheader(sub);
  // }

  return (
    <>
      <TicketStepper query={query} />
    </>
  );
};
