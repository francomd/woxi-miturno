import React from "react";
import { DrawerStyle } from "./style";

// const DrawerContext = React.createContext()

export const Drawer = ({ open, onToggle, ...props }) => {
  return (
    <DrawerStyle className={open && "opened"}>
      <nav>
        <div className="d-flex justify-content-between">
          <h2>Menu</h2>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={onToggle}
            style={{ outline: "none" }}
          >
            <span aria-hidden="true" className="text-white">
              &times;
            </span>
          </button>
        </div>
        <div onClick={onToggle}>{props.children}</div>
      </nav>
    </DrawerStyle>
  );
};
