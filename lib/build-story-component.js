import { withDocs } from 'storybook-readme'

import construct from './construct'

export default function(Component, docs, props = {}) {
  return withDocs(docs, construct(Component, props))
}
