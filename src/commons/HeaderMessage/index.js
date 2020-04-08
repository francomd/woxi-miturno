import React, { useEffect } from "react";
import {
  HeaderMessageContainer,
  Content,
  Footer,
  Header,
  Subheader,
  Description,
} from "./style";

export const HeaderMessage = ({
  data = null,
  header = "",
  subheader = "",
  description = "",
}) => {
  if (data) {
    if (data.header) {
      header = data.header;
    }
    if (data.subheader) {
      subheader = data.subheader;
    }
    if (data.description) {
      description = data.description;
    }
  }

  return (
    <HeaderMessageContainer footer={!!data.description}>
      {header && (
        <Content>
          <Header>{header}</Header>
          {subheader && <Subheader>{subheader}</Subheader>}
        </Content>
      )}
      {description && (
        <Footer>
          <Description>{description}</Description>
        </Footer>
      )}
    </HeaderMessageContainer>
  );
};
