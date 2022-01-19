import { createContext, useContext, useEffect, useState } from "react"
import woeidList from "./data"

const AppContext = createContext()

const axios = require("axios")

const AppProvider = ({ children }) => {
	const [woeid, setWoeid] = useState(1)
	const [trends, setTrends] = useState([])
	const fetchTrends = (woeid) => {
		//the func takes in the woeid of a particular place
		// as a parameter and makes a get request to get all the current trends
		// associated with that loaction
		axios
			.get("https://twitter-trends-backend-00.herokuapp.com/api/trends", {
				params: {
					woeid,
				},
			})
			.then((resp) => {
				setTrends(resp.data.trends[0].trends)
                
			})
			.catch((error) => {
				console.log(error)
			})
	}
	useEffect(() => {
		fetchTrends(woeid)

		// console.log(trends)
	}, [woeid])
	return (
		<AppContext.Provider value={{ woeid, woeidList, setWoeid,trends }}>
			{children}
		</AppContext.Provider>
	)
}

const useGlobalContext = () => {
	return useContext(AppContext)
}
export { useGlobalContext }
export default AppProvider
