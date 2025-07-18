export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#/" className="logo">BookSwap</a>
      <div className="links">
        <a href="#/">Home</a>
        <a href="#/listing">Browse Books</a>
        <a href="#/contact">Contact</a>
      </div>
    </nav>
  );
}