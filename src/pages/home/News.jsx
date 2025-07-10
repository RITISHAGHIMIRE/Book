import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const News = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: 'Global Climate Summit Calls for Urgent Action',
      description: 'World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.',
      image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      date: 'May 15, 2023'
    },
    {
      id: 2,
      title: 'Breakthrough in AI Technology Announced',
      description: 'A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      date: 'June 2, 2023'
    },
    {
      id: 3,
      title: 'New Space Telescope Reveals Stunning Images',
      description: 'The latest space telescope has captured unprecedented images of distant galaxies, providing new insights into the formation of the universe.',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      date: 'June 10, 2023'
    },
    {
      id: 4,
      title: 'Renewable Energy Investments Reach Record High',
      description: 'Global investments in renewable energy have surpassed fossil fuels for the first time, signaling a major shift in energy production priorities.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      date: 'June 18, 2023'
    },
    {
      id: 5,
      title: 'Tech Giant Unveils Revolutionary Quantum Computer',
      description: 'A leading tech company has unveiled a quantum computer capable of solving complex problems in seconds that would take traditional computers years to process.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      date: 'June 25, 2023'
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
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRightHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <NewsContainer>
      <SectionHeader>
        <h2>Latest News</h2>
        <ViewAllLink>View all news</ViewAllLink>
      </SectionHeader>
      
      <SliderContainer>
        <ScrollButton left onClick={scrollLeftHandler}>
          <FaChevronLeft />
        </ScrollButton>
        
        <NewsSlider
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
          {newsItems.map(news => (
            <NewsCard key={news.id}>
              <NewsImageContainer>
                <NewsImage src={news.image} alt={news.title} />
              </NewsImageContainer>
              <NewsContent>
                <NewsDate>{news.date}</NewsDate>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsDescription>{news.description}</NewsDescription>
                <ReadMoreLink>Read more →</ReadMoreLink>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsSlider>
        
        <ScrollButton right onClick={scrollRightHandler}>
          <FaChevronRight />
        </ScrollButton>
      </SliderContainer>
    </NewsContainer>
  );
};

// Styled Components
const NewsContainer = styled.section`
  padding: 2rem;
  margin: 3rem 0;
  background-color: #f9f9f9;
  border-radius: 12px;
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

const NewsSlider = styled.div`
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

const NewsCard = styled.div`
  min-width: 600px;
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    min-width: 300px;
    flex-direction: column;
  }
`;

const NewsImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${NewsCard}:hover & {
    transform: scale(1.03);
  }
`;

const NewsContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const NewsDate = styled.span`
  font-size: 0.8rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-weight: 700;
`;

const NewsDescription = styled.p`
  font-size: 0.95rem;
  color: #7f8c8d;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
  flex-grow: 1;
`;

const ReadMoreLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    color: #2980b9;
    text-decoration: underline;
  }
`;

export default News;