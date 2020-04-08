import React, { useState } from "react";
import { Grid, GridItem, Logo, Label } from "./style";

export const SelectCompany = ({ companies, disabled, onChange }) => {
  const [active, setActive] = useState(null);

  return (
    <Grid>
      {companies.map((company, i) => {
        return (
          <GridItem
            key={i}
            disabled={disabled}
            onClick={() => {
              setActive(i);
              !disabled &&
                setTimeout(() => {
                  onChange(company.id);
                }, 600);
            }}
            className={i === active ? "active" : ""}
          >
            <Logo src={require(`Assets/img/companies/${company.img}`)} />
            <Label>{company.name}</Label>
          </GridItem>
        );
      })}
    </Grid>
  );
};
