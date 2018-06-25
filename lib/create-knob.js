export default function(knobType, ...params) {
  return () => knobType(...params)
}
