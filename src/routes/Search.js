import {useEffect, useState} from "react";
import {BsSearch} from 'react-icons/bs'
import SearchMovie from "../components/SearchMovie";
import '../components/HeaderApp.css'
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import InfoSearch from "../components/InfoSearch";

const Details = () => {

    const [searchApi,
        setSearchApi] = useState([])

    const [search,
        setSearch] = useState("sfgfd")

    const [pageCount,
        setPageCount] = useState(1)

    const [currentPage,
        setCurrentPage] = useState(1)

    const apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=51ad9202ea32abac0c7c722f99a601e4&language=en-US&query=${search}&page=${currentPage}&include_adult=false`

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const validation = () => {
        if (!search) {
            setSearch("fafsa")
        }
    }

    validation()

    useEffect(() => {
        fetch(apiSearch)
            .then(res => res.json())
            .then(data => {
                setSearchApi(data.results)
                setPageCount(data.total_pages)
            })
    }, [search, currentPage])

    const handlerSubmit = e => {
        e.preventDefault()
    }

    const onPageChange = data => {
        let numPage = data.selected + 1
        setCurrentPage(numPage)
    }

    return (
        <div>
            <div className="nav-container">
                <nav className="navLinks">
                    <div>
                        <Link to="/" className="links">
                            Inicio
                        </Link>
                    </div>
                    <form className="formContent" onSubmit={handlerSubmit}>
                        <input
                            type="search"
                            className="search"
                            placeholder="Busca tu pelicula"
                            id="buscar"
                            autoComplete="off"
                            onChange={handleChange}/>
                        <BsSearch className="icono"/>
                    </form>
                </nav>
            </div>
            <div className="card">
                {searchApi.length > 0
                    ? searchApi.map(el => <SearchMovie el={el} key={el.id}/>)
                    : <InfoSearch/>}
            </div>
            {searchApi.length <= 0
                ? ""
                : <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={". . ."}
                    pageCount={pageCount}
                    marginPagesDisplayed={4}
                    onPageChange={onPageChange}
                    containerClassName={'container'}
                    previousLinkClassName={'page'}
                    breakClassName={'page'}
                    nextLinkClassName={'page'}
                    pageClassName={'page'}
                    disabledClassNae={'disabled'}
                    activeClassName={'active'}/>}
        </div>
    )
}

export default Details;
