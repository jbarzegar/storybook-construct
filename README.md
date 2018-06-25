# Storybook Construct

A set of helper functions that enable quicker writing of docs and knobs

This addon is currently _only compatible with React_

## Install

### IMPORTANT

**This package requires installation of:**

- [@storybook/react](https://github.com/tuchk4/storybook-readme)
- [@storybook/addon-knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)
- [storybook-readme](https://github.com/tuchk4/storybook-readme)

Install and configure those first then continue here

```
npm install --dev storybook-construct
```

or

```
yarn add --dev storybook-construct
```

## Usage

```jsx
import React from 'react'

import { storiesOf } from '@storybook/react'
import * as knob from '@storybook/addon-knobs'

import constructStoryComponent, { constructKnob } from 'storybook-construct'

const MyStoryComponent = () => (/* React code */)

export default storiesOf('Your Story', module).add(
  '<Story Name>',
  constructStoryComponent(MyStoryComponent, require('path/to/docs.md'), {
    /* ...props */
    knobs: {
      /* Your knobs */
      myNewKnob: constructKnob(knob.text, 'Knob name', 'Default Value')
    }
  })
)
```

### constructStoryComponent(Component, docs, props)

Create a story that uses `withDocs` from `storybook-readme`

### createKnob(knobFunction, ...knobParams)

Takes a knob function as first argument and all remaining arguments are that knobs params
