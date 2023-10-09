// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )
  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="header-img"
        alt="prime video"
      />
      <div className="sub-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
