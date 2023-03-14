// Since javascript requires to return only one thing, this is a workaround for it
// An alternative to using a <div> in a component or anywhere
// This returns all children elements
const Wrapper = props => {
  return props.children;
}
export default Wrapper;