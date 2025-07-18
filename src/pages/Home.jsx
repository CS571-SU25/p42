import BookCard from '../components/BookCard';

const demoBooks = [
  { id: 1, title: "Computer Science 101", author: "Jane Doe", condition: "Like New", price: "$15" },
  { id: 2, title: "React Essentials", author: "John Smith", condition: "Good", price: "Free" }
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Trade Books, Save Money</h1>
        <p>A sustainable way to exchange textbooks and novels</p>
      </section>

      <section className="featured-books">
        <h2>Recently Added</h2>
        <div className="book-grid">
          {demoBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}