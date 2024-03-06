import logo from './logo.svg';
import './App.css';
import Business from './Business';
import BusinessList from './BussinessList';
import SearchBar from './SearchBar';

function App() {
  const businesses = [
      {
          image: 'https://imgix.theurbanlist.com/content/article/pizza-bros_imperial_1.jpg?auto=format,compress&w=520&h=390&fit=crop',
          name: 'Pizza Bros',
          address: '35 Erskineville Rd',
          city: 'Erskineville',
          state: 'NSW',
          zipcode: '2043',
          category: 'Italian',
          rating: 5,
          reviewCount: 150
      },
      {
        image: 'https://imgix.theurbanlist.com/content/article/pizza-bros_imperial_1.jpg?auto=format,compress&w=520&h=390&fit=crop',
        name: 'Pizza Bros',
        address: '35 Erskineville Rd',
        city: 'Erskineville',
        state: 'NSW',
        zipcode: '2043',
        category: 'Italian',
        rating: 5,
        reviewCount: 150
    },
    {
        image: 'https://imgix.theurbanlist.com/content/article/pizza-bros_imperial_1.jpg?auto=format,compress&w=520&h=390&fit=crop',
        name: 'Pizza Bros',
        address: '35 Erskineville Rd',
        city: 'Erskineville',
        state: 'NSW',
        zipcode: '2043',
        category: 'french',
        rating: 5,
        reviewCount: 150
    },
    {
        image: 'https://imgix.theurbanlist.com/content/article/pizza-bros_imperial_1.jpg?auto=format,compress&w=520&h=390&fit=crop',
        name: 'Pizza Bros',
        address: '35 Erskineville Rd',
        city: 'Erskineville',
        state: 'NSW',
        zipcode: '2043',
        category: 'Italian',
        rating: 5,
        reviewCount: 150
    },
    {
        image: 'https://imgix.theurbanlist.com/content/article/pizza-bros_imperial_1.jpg?auto=format,compress&w=520&h=390&fit=crop',
        name: 'Pizza Bros',
        address: '35 Erskineville Rd',
        city: 'Erskineville',
        state: 'NSW',
        zipcode: '2043',
        category: 'Italian',
        rating: 5,
        reviewCount: 150
    },
    {
        image: 'https://imgix.theurbanlist.com/content/article/pizza-bros_imperial_1.jpg?auto=format,compress&w=520&h=390&fit=crop',
        name: 'Pizza Bros',
        address: '35 Erskineville Rd',
        city: 'Erskineville',
        state: 'NSW',
        zipcode: '2043',
        category: 'Italian',
        rating: 5,
        reviewCount: 150
    } 
  ];

  return (
      <div className='parent-container'>
          <SearchBar />
          <BusinessList businesses={businesses} />
      </div>
  );
}

export default App;
