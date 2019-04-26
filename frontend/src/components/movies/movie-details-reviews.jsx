import React from 'react'
import PropTypes from 'prop-types';

const MovieDetailsReviews = (props) => {

    const fillReviews = (reviews) => {
        return reviews.map(review=> {
            return(
                <div className="review" key={review.get('id')}>
                    <p><strong>Autor: </strong>{review.get('author')}</p>
                    <p><strong>Contenido: </strong>{review.get('content')}</p>
                    <a href={review.get('url')}>Visitar review</a>
                </div>
            )
        })
    }

    const content = () => {
        const { reviews } = props;
        if (reviews.size === 0) {
            return (
                <div className="movie-reviews">
                    <h1>Reviews</h1>
                    <p>No existen reviews para mostrar</p>
                </div>
            )
        }
        return (
            <div className="movie-reviews">
                <h1>Reviews</h1>
                <div className="reviews">
                    {fillReviews(reviews)}
                </div>
            </div>
        )
    }

    return content();
}

export default MovieDetailsReviews;

MovieDetailsReviews.propTypes = {
    reviews: PropTypes.any.isRequired
}
