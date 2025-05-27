import { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar avaliações:', err);
        setError('Não foi possível carregar as avaliações');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <img 
              src={review.profile_photo_url} 
              alt={review.author_name} 
            />
            <h3>{review.author_name}</h3>
            <div>Rating: {review.rating} ★</div>
          </div>
          <p>{review.text}</p>
          <small>{review.relative_time_description}</small>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;