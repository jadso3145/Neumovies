import './MainApp.css'
import {Link} from "react-router-dom";

const Movies = ({el}) => {

    const imagen = `https://image.tmdb.org/t/p/original${el.poster_path}`

    const nonImagen = "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"

    return (
        <Link to={"/details/" + el.id}>
            <div className="card-subDiv">
                <img className="card-img" src={el.poster_path === null ? nonImagen : imagen} alt={el.title}/>
                <div className="card-info">
                    <h3 className="card-name">{el.title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Movies
