import { useState } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

// 模拟书籍数据
const mockBooks = [
  { id: 1, title: "Computer Science 101", author: "Jane Doe", condition: "Like New", price: "$15", course: "CS101" },
  { id: 2, title: "React Essentials", author: "John Smith", condition: "Good", price: "Free", course: "WEB302" },
  { id: 3, title: "Advanced Algorithms", author: "Alan Turing", condition: "Fair", price: "$25", course: "CS450" },
  { id: 4, title: "Database Systems", author: "Edgar Codd", condition: "Excellent", price: "$20", course: "CS310" },
];

export default function Listing() {
  const [books, setBooks] = useState(mockBooks);
  const [filters, setFilters] = useState({
    searchQuery: '',
    condition: 'all',
    maxPrice: '',
    course: ''
  });

  // 过滤书籍
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesCondition = filters.condition === 'all' || book.condition === filters.condition;
    const matchesPrice = !filters.maxPrice || parseFloat(book.price.replace('$', '')) <= parseFloat(filters.maxPrice);
    const matchesCourse = !filters.course || book.course.includes(filters.course);
    
    return matchesSearch && matchesCondition && matchesPrice && matchesCourse;
  });

  return (
    <div className="listing-page">
      <h1>Available Books</h1>
      
      {/* 搜索和筛选组件 */}
      <SearchBar filters={filters} setFilters={setFilters} />
      
      {/* 书籍列表 */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="no-results">No books match your filters.</p>
        )}
      </div>
    </div>
  );
}