import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaCartPlus, FaHeart, FaRegHeart } from 'react-icons/fa';
import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';

const Recommended = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  const recommendedBooks = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
      price: 22.99,
      originalPrice: 25.99,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.5,
      reviews: 1284
    },
    {
      id: 2,
      title: 'The Fault in Our Stars',
      description: 'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal.',
      price: 9.99,
      originalPrice: 19.99,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4,
      reviews: 892
    },
    {
      id: 3,
      title: 'The Picture of Dorian Gray',
      description: 'Oscar Wilde\'s only novel is the dreamlike story of a young man who sells his soul for eternal youth and beauty.',
      price: 21.99,
      originalPrice: 26.99,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.7,
      reviews: 956
    },
    {
      id: 4,
      title: '1984',
      description: 'A dystopian social science fiction novel about totalitarianism, mass surveillance, and repressive regimentation.',
      price: 14.99,
      originalPrice: 19.99,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.8,
      reviews: 2103
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      description: 'The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance.',
      price: 12.99,
      originalPrice: 17.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.6,
      reviews: 1752
    },
    {
      id: 6,
      title: 'The Great Gatsby',
      description: 'A portrait of the Jazz Age in all of its decadence and excess, capturing the American Dream.',
      price: 11.99,
      originalPrice: 15.99,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.3,
      reviews: 1438
    }
  ];

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

  const toggleWishlist = (bookId) => {
    if (wishlist.includes(bookId)) {
      setWishlist(wishlist.filter(id => id !== bookId));
    } else {
      setWishlist([...wishlist, bookId]);
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<RiStarFill key={i} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<RiStarHalfFill key={i} />);
      } else {
        stars.push(<RiStarLine key={i} />);
      }
    }

    return stars;
  };

  return (
    <RecommendationContainer>
      <SectionHeader>
        <h2>Recommended for you</h2>
        <ViewAllLink>View all</ViewAllLink>
      </SectionHeader>
      
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
          isDragging={isDragging}
        >
          {recommendedBooks.map(book => (
            <BookCard key={book.id}>
              <BookImageContainer>
                <BookImage src={book.image} alt={book.title} />
                <WishlistButton 
                  onClick={() => toggleWishlist(book.id)}
                  aria-label={wishlist.includes(book.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {wishlist.includes(book.id) ? <FaHeart /> : <FaRegHeart />}
                </WishlistButton>
            <DiscountBadge>
  {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
</DiscountBadge>
              </BookImageContainer>
              <BookInfo>
                <BookTitle>{book.title}</BookTitle>
                <BookDescription>{book.description}</BookDescription>
                
                <RatingContainer>
                  <Stars>{renderRatingStars(book.rating)}</Stars>
                  <RatingText>{book.rating} ({book.reviews.toLocaleString()} reviews)</RatingText>
                </RatingContainer>
                
                <PriceContainer>
                  <CurrentPrice>${book.price.toFixed(2)}</CurrentPrice>
                  <OriginalPrice>${book.originalPrice.toFixed(2)}</OriginalPrice>
                </PriceContainer>
                
                <AddToCartButton>
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
    </RecommendationContainer>
  );
};

// Styled Components
const RecommendationContainer = styled.section`
  padding: 2rem;
  margin: 3rem 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin: 0;
    font-weight: 700;
  }
`;

const ViewAllLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2980b9;
    text-decoration: underline;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ScrollButton = styled.button`
  position: absolute;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  z-index: 10;
  left: ${props => props.left ? '-20px' : 'auto'};
  right: ${props => props.right ? '-20px' : 'auto'};
  transition: all 0.3s ease;
  color: #2c3e50;
  
  &:hover {
    background: #3498db;
    color: white;
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
  cursor: ${props => props.isDragging ? 'grabbing' : 'grab'};
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BookCard = styled.div`
  min-width: 280px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }
`;

const BookImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${BookCard}:hover & {
    transform: scale(1.05);
  }
`;

const WishlistButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => props.active ? '#e74c3c' : '#7f8c8d'};
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #e74c3c;
    transform: scale(1.1);
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

const DiscountBadge = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #e74c3c;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const BookInfo = styled.div`
  padding: 1.5rem;
`;

const BookTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.8rem 0;
  color: #2c3e50;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BookDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0 0 1.2rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  display: flex;
  color: #f39c12;
  font-size: 1rem;
`;

const RatingText = styled.span`
  font-size: 0.8rem;
  color: #95a5a6;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
`;

const CurrentPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
`;

const OriginalPrice = styled.span`
  font-size: 0.9rem;
  color: #95a5a6;
  text-decoration: line-through;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.7rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1rem;
  }
`;

export default Recommended;