import {useParams} from "react-router";
import {useEffect, useState} from "react";
import '../components/Details.css'

const DetailsSearch = () => {

    const {searchId} = useParams()

    const [movieDetail,
        setMovieDetail] = useState({})

    const [genres,
        setGenres] = useState([])

    const imagen = `https://image.tmdb.org/t/p/original${movieDetail.poster_path}`

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${searchId}?api_key=51ad9202ea32abac0c7c722f99a601e4&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovieDetail(data)
                setGenres(data.genres)
            })
    }, [searchId])


    return (
        <div className="container">
            <div className="divDetails">
                <div>
                    <img src={imagen} alt={movieDetail.title} className="imgDetails"/>
                </div>
                <div className="informationDetails">
                    <h3 className="titleDetails">{movieDetail.title}({movieDetail.release_date})</h3>
                    <div className="genresDetails">{genres.length > 0 && genres.map(el => <span key={el.id}>{el.name}</span>)}</div>
                    <p className="overviewDetails">{movieDetail.overview}</p>
                    <div className="otherInformation">
                        <span>Vote: {movieDetail.vote_average}</span>
                        <span>Language: {movieDetail.original_language}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSearch
