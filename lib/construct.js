import React from 'react'
import isFunction from 'lodash-es/isFunction'
import reduce from 'lodash-es/reduce'

const reducer = (obj, value, key) =>
  isFunction(value)
    ? {
        ...obj,
        [key]: value()
      }
    : obj

export default function(Component, { knobs = {}, ...addedProps }) {
  return props => (
    <Component {...props} {...addedProps} {...reduce(knobs, reducer, {})} />
  )
}
