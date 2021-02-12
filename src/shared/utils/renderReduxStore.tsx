import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "../../store";
import thunk from "redux-thunk";


export default function renderReduxStore(
  element: React.ReactElement
) {
  const store = configureStore({
    reducer: combineReducers,
    middleware : [ thunk ]
  });
  const el = document.createElement("div")
  el.id = "root-portal";
  return {
    ...render(element, {
      wrapper: ({ children }) => {
        return <Provider store={store}>{children}</Provider>;
      },
      container : document.body.appendChild(el)
    }),
    ...store
  };
}
