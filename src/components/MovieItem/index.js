// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              className="close-btn"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
