const Header = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center">
        <h1 className="text-4xl font-bold">Logo</h1>
        <div className="flex gap-5">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Cart 1</a>
          <h3>$500</h3>
        </div>
      </nav>
    </div>
  );
};

export default Header;
