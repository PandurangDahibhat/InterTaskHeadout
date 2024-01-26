const ErrorMessage = ({ items }) => {
  return <div>{items.length === 0 && <h4> I'm Still Hungry.</h4>}</div>;
};
export default ErrorMessage;
