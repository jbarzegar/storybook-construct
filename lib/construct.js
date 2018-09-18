import React from "react";

let formatKnobs = k =>
  Object.entries(k).reduce((obj, [k, v]) => {
    if (typeof v === "function") {
      obj[k] = v();
    }
    return obj;
  }, {});

export default function(Component, { knobs = {}, props = {} }) {
  return p => (
    <Component
      {...p}
      {...props}
      {...addedProps}
      {...reduce(knobs, reducer, {})}
    />
  );
}
