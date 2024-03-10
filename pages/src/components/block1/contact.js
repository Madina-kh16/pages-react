const Contact = ({ title, value, desc, href }) => {
  return (
    <div className="block">
      <div className="title">
        <b>{title}</b>
      </div>
      <div className="desc">{value}</div>
      <div className="desc">{desc}</div>
      <div className="btn">
        <a
          className="link"
          href="https://ru.wikipedia.org/wiki/%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5"
        >
          <b>{href}</b>
        </a>
      </div>
    </div>
  );
};

export default Contact;
