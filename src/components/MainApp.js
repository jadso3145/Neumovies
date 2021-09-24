import {useState, useEffect} from "react"
import Movies from "./Movies"
import './MainApp.css'
import ReactPaginate from 'react-paginate';

const MainApp = () => {

    const [dataApi,
        setDataApi] = useState([])

    const [pageCount,
        setPageCount] = useState(1)

    const [currentPage,
        setCurrentPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=51ad9202ea32abac0c7c722f99a601e4&language=en-US&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setDataApi(data.results)
                setPageCount(data.total_pages)
            })
    }, [currentPage])

    const onPageChange = data=> {
        console.log(data.selected)
        let numPage = data.selected + 1
        setCurrentPage(numPage)
    }

    console.log(currentPage)

    return (
        <div>
            <div className="card">
                {dataApi.length > 0 && dataApi.map(el => <Movies el={el} key={el.id}/>)}
            </div>
            <ReactPaginate
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
                activeClassName={'active'}/>
        </div>
    )
}

export default MainApp;
