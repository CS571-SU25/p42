export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-cover">
        {book.title.split(' ').map(word => word[0]).join('')}
      </div>
      <div className="book-details">
        <h3>{book.title}</h3>
        <p className="author">By {book.author}</p>
        <p className="course">Course: {book.course}</p>
        <div className="meta">
          <span className={`condition ${book.condition.replace(' ', '-')}`}>
            {book.condition}
          </span>
          <span className="price">{book.price}</span>
        </div>
        <button className="interest-btn">I'm Interested</button>
      </div>
    </div>
  );
}