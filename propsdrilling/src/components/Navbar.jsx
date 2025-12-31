const Navbar = (props) => {
  console.log(props);
  return (
    <div
      style={{ backgroundColor: props.color }}
      className=" text-white text-2xl px-8 py-3 flex items-center justify-between"
    >
      <h2>{props.title}</h2>
      <div className="flex items-center justify-evenly gap-10">
        {props.links.map((item, idx) => {
          return <h4 key={idx}>{item}</h4>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
