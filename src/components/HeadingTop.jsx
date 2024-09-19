function HeadingTop({ head, description }) {
  return (
    <div className="contentTop">
      <h2 className="head">{head}</h2>
      <p className="description">{description}</p>
    </div>
  );
}

export default HeadingTop;
