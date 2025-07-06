import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaCartPlus } from 'react-icons/fa';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const TopSeller = () => {
  const dispatch= useDispatch();

  const handleAddToCart =(product)=>{
dispatch(addToCart(product))
  } 
  const [activeGenre, setActiveGenre] = useState('All');
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const genres = ['All', 'Fiction', 'Non-Fiction', 'Business', 'Self-Help', 'Technology'];

  const books = [
    {
      id: 1,
      title: 'How to Grow Your Online Store',
      description: 'Learn the best strategies to grow your online store in today\'s competitive market.',
      price: 19.99,
      originalPrice: 29.99,
      genre: 'Business',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      description: 'A classic novel about racial injustice and moral growth in the American South.',
      price: 12.99,
      originalPrice: 18.99,
      genre: 'Fiction',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Top 10 Fiction Books This Year',
      description: 'A curated list of the best fiction books that are trending this year.',
      price: 14.99,
      originalPrice: 24.99,
      genre: 'Fiction',
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Mastering SEO in 2024',
      description: 'Tips and tricks to boost your SEO and rank higher on search engines.',
      price: 29.99,
      originalPrice: 39.99,
      genre: 'Technology',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'The Future of Dorian Gray',
      description: 'A modern retelling of the classic with a futuristic twist.',
      price: 16.99,
      originalPrice: 22.99,
      genre: 'Fiction',
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Atomic Habits',
      description: 'Tiny changes, remarkable results - build good habits and break bad ones.',
      price: 15.99,
      originalPrice: 25.99,
      genre: 'Self-Help',
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredBooks = activeGenre === 'All' 
    ? books 
    : books.filter(book => book.genre === activeGenre);

  // Mouse events for slider dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let scrollDirection = 1;
    const slideTimer = setInterval(() => {
      if (slider) {
        slider.scrollLeft += scrollDirection;
        scrollAmount += 1;
        
        if (scrollAmount >= 200 || slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 1)) {
          scrollDirection = -1;
        } else if (scrollAmount <= 0 || slider.scrollLeft <= 1) {
          scrollDirection = 1;
        }
      }
    }, 20);

    return () => clearInterval(slideTimer);
  }, []);

  const scrollLeftHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRightHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <TopSellerContainer>
      <Header>
        <h2>Top Sellers</h2>
        <GenreSelector>
          {genres.map(genre => (
            <GenreButton 
              key={genre} 
              active={activeGenre === genre}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </GenreButton>
          ))}
        </GenreSelector>
      </Header>
      
      <SliderContainer>
        <ScrollButton left onClick={scrollLeftHandler}>
          <FaChevronLeft />
        </ScrollButton>
        
        <BookSlider
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {filteredBooks.map(book => (
            <BookCard key={book.id}>
              <BookImage src={book.image} alt={book.title} />
              <BookInfo>
                <BookTitle>{book.title}</BookTitle>
                <BookDescription>{book.description}</BookDescription>
                <PriceContainer>
                  <CurrentPrice>${book.price.toFixed(2)}</CurrentPrice>
                  <OriginalPrice>${book.originalPrice.toFixed(2)}</OriginalPrice>
                </PriceContainer>
                <AddToCartButton onClick={()=>handleAddToCart(book)}>
                  <FaCartPlus /> Add to Cart
                </AddToCartButton>
              </BookInfo>
            </BookCard>
          ))}
        </BookSlider>
        
        <ScrollButton right onClick={scrollRightHandler}>
          <FaChevronRight />
        </ScrollButton>
      </SliderContainer>
    </TopSellerContainer>
  );
};

// Styled Components
const TopSellerContainer = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin: 0;
  }
`;

const GenreSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const GenreButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: ${props => props.active ? '#3498db' : '#ecf0f1'};
  color: ${props => props.active ? 'white' : '#7f8c8d'};
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '500'};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#2980b9' : '#dfe6e9'};
  }
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ScrollButton = styled.button`
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  left: ${props => props.left ? '10px' : 'auto'};
  right: ${props => props.right ? '10px' : 'auto'};
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BookSlider = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  cursor: grab;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  ${props => props.isDragging && `
    cursor: grabbing;
    scroll-behavior: auto;
    user-select: none;
  `}
`;

const BookCard = styled.div`
  min-width: 280px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const BookInfo = styled.div`
  padding: 1.2rem;
`;

const BookTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
`;

const BookDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e74c3c;
`;

const OriginalPrice = styled.span`
  font-size: 0.9rem;
  color: #95a5a6;
  text-decoration: line-through;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: #2980b9;
  }
`;

export default TopSeller;