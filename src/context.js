import React, { useContext, useEffect, useState, } from "react"

//api creation
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    //desfine states "loading" and "movies" and error messages
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query, setQuery] = useState('titanic')

    const getMovies = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)

            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data.Search)
                setIsError({
                    show: true,
                    msg: "",
                })
            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    //for Debounching (don't call api every second, hold it for a second and then clear it)
    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`)
        }, 500)
        return () => clearTimeout(timerOut)

    }, [query])

    return <AppContext.Provider value={{ isError, isLoading, movie, query, setQuery }}>{children}</AppContext.Provider>
}

//global custom context
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }