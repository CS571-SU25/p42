export default function SearchBar({ filters, setFilters }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title or author"
        value={filters.searchQuery}
        onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
      />
      
      <select 
        value={filters.condition}
        onChange={(e) => setFilters({...filters, condition: e.target.value})}
      >
        <option value="all">All Conditions</option>
        <option value="Excellent">Excellent</option>
        <option value="Like New">Like New</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
      </select>
      
      <input
        type="number"
        placeholder="Max price ($)"
        value={filters.maxPrice}
        onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
        min="0"
      />
      
      <input
        type="text"
        placeholder="Course code (e.g. CS101)"
        value={filters.course}
        onChange={(e) => setFilters({...filters, course: e.target.value})}
      />
    </div>
  );
}