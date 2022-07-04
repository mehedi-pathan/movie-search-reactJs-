import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './context'

const Movies = () => {

  const { movie, isLoading } = useGlobalContext()

  if (isLoading) {
    return (
      <section>
        <div className="loading">Loading....</div>;
      </section>
    );
  }


  return (
    <>
      <section className='movie-page'>
        <div className='container grid grid-col-4'>
          {movie.map((currMovie) => {
            const { imdbID, Title, Poster, Year } = currMovie
            const movieName = Title.substring(0, 15)
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className='card' >
                  <div className='card-info'>
                    <h2>
                      {movieName.length > 14 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster} alt={imdbID} />
                    <p className='movie-year'>{Year}</p>
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Movies