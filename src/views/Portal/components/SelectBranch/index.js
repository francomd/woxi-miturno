import React, { useState } from "react";
import { List, ListItem, Title, Description } from "./style";

export const SelectBranch = ({ branches, onChange }) => {
  const [active, setActive] = useState(null);

  return (
    <List>
      {branches.map((branch, i) => {
        return (
          <ListItem
            key={i}
            onClick={() => {
              setActive(i);
              setTimeout(() => {
                onChange(branch.id);
              }, 600);
            }}
            className={i === active ? "active" : ""}
          >
            <Title>{branch.name}</Title>
            <Description>{branch.location}</Description>
          </ListItem>
        );
      })}
    </List>
  );
};
