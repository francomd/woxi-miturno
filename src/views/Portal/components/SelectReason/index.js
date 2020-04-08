import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import queryString from "query-string";
import { List, ListItem, Title, Description } from "./style";
// import { Breadcrumbs } from "../Breadcrumbs";

export const SelectReason = ({ reasons, onChange, onClick }) => {
  const query = queryString.parse(location.search);

  const [currentReasons, setCurrentReasons] = useState([]);
  // const [navHistory, setNavHistory] = useState([]);

  useEffect(() => {
    if (!query.motivo) {
      let rea = reasons.filter((reason) => reason.parentId === 0);
      setCurrentReasons(rea);
    } else {
      let rea = reasons.filter((reason) => reason.id == query.motivo);
      setCurrentReasons(rea);
    }
  }, [reasons]);

  const clickReason = (item) => {
    if (item.folder) {
      let rea = reasons.filter((reason) => reason.parentId === item.id);
      setCurrentReasons(rea);
      // setNavHistory([
      //   { id: 0, name: "Motivos" },
      //   { id: item.id, name: item.name },
      // ]);
    } else {
      onChange(item.id);
    }
  };

  // const breadcrumbsGoBack = () => {
  //   const arrHistory = navHistory;

  //   arrHistory.splice(-1, 1);
  //   setNavHistory(arrHistory);
  // };

  return (
    <>
      {/* <Breadcrumbs history={navHistory} onGoBack={() => breadcrumbsGoBack()} /> */}
      <List>
        {currentReasons &&
          currentReasons.map((reason, i) => {
            return (
              <ListItem key={i} onClick={() => clickReason(reason)}>
                <Title>{reason.name}</Title>
                <Description>{reason.description}</Description>
              </ListItem>
            );
          })}
      </List>
      <br />
      {query.motivo && <Button onClick={() => onClick()}>Sacar turno</Button>}
    </>
  );
};
