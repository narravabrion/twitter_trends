import React from "react"
import axios from "axios"
import MyLocationIcon from "@mui/icons-material/MyLocation"
import {
	Container,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	
} from "@mui/material"
import useTrendSbStyles from "../styles/trendSbStyle.comps"
import { useGlobalContext } from "../context"


const TrendSelectionBox = () => {
	const classes = useTrendSbStyles()
	const { woeidList, woeid, setWoeid } = useGlobalContext()

	const handleChange = (event) => {
		setWoeid(event.target.value)
	}

	const handleLocation = () => {
		// gets the current location of the user and sends 
		// the langitude and longitude back to the server 
		// which uses the data to get the woeid of the current location
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					axios
						.get(" https://twitter-trends-backend-00.herokuapp.com/api/current-loaction-trends", {
							params: {
								lat: position.coords.latitude,
								long: position.coords.longitude,
							},
						})
						.then((resp) => {
							// console.log(resp.data.resp[0].woeid)
							setWoeid(resp.data.resp[0].woeid)
						})
						.catch((error) => {
							console.log(error)
						})
				},
				(error) => {
					console.log(error)
				}
			)
		} else {
			alert("Can't get your current location")
		}
	}

	return (
		<>
			<Container maxWidth='md' className={classes.trendContainer}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Location</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={woeid}
						label='woeid'
						onChange={handleChange}
					>
						{woeidList.map((item, index) => {
							return (
								<MenuItem key={index} value={item.woeid}>
									{item.country}
								</MenuItem>
							)
						})}
					</Select>
				</FormControl>

				{/* <Button href='#text-buttons' className={classes.location}> */}
				<MyLocationIcon className={classes.location} onClick={handleLocation} />
				{/* </Button> */}
			</Container>
		</>
	)
}

export default TrendSelectionBox
