import { withDocs, doc } from "storybook-readme";
import { storiesOf } from "@storybook/react";

import construct from "./construct";

let defaultDocs = {
  categoryName: "Docs",
  template: null,
  inline: false
};

export default function(name, component, { docs = defaultDocs, ...config }) {
  let story = storiesOf(name, module);

  /* No Docs */
  if (!docs.template) {
    return story.add("Example", construct(component, config));
  }

  /* Has Docs but inlined */
  if (docs.inline) {
    return story.add(
      "Example",
      withDocs(docs.template, construct(component, config))
    );
  }

  /* Everything */
  return story
    .add(docs.categoryName, doc)
    .add("Example", construct(component, config));
}
