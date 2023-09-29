function UseProps({ text, font, color }) {
  return <div className={`${font + " " + color}`}>{text}</div>;
}

export default UseProps;
