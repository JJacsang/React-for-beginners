import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailNum from "../components/DetailNum";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setLoading(false);
        setMovies(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <DetailNum
                        title={movies.title_long}
                        genres={movies.genres}
                        rating={movies.rating}
                        inTitle={movies.title}
                        backImg={movies.medium_cover_image}
                        runtime={movies.runtime}
                    />
                </div>
            )}
        </div>
    );
}

export default Detail;
