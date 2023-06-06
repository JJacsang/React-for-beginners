import PropTypes from "prop-types";

function Movie({ id, inTitle, title, backImg, rating, runtime, geners }) {
    return (
        <div id={id}>
            <img src={backImg} alt={inTitle} />
            <h2>{title}</h2>
            <p>{rating}/10</p>
            <p>{runtime}min</p>
            <p>Tag</p>
            <ul>{geners && geners.map((g) => <li key={g}> {g}</li>)}</ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    inTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    backImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    geners: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
