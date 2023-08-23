const Header = ({ data }) => {
  return (
    <header>
      <div className="container">
        <img src="/logo-teal.svg" alt="logo Deliveroo" />
      </div>
      <div className="container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <span>{data.restaurant.description}</span>
        </div>
        <img src={data.restaurant.picture} />
      </div>
    </header>
  );
};

export default Header;
