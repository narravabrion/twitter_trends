import { Container } from "@mui/material"
import React from "react"
import { useGlobalContext } from "../context"
import useTrendDisplayStyle from "../styles/trendDisplayStyle"

const TrendDisplayBox = () => {
	const classes = useTrendDisplayStyle()
	const {  trends } = useGlobalContext()

	return (
		<>
			<Container maxWidth='md' className={classes.displayBox}>
				<ul className={classes.displayList}>
					{trends.map((trend, index) => {
						return (
							<li key={index} className={classes.listItem}>
								<a  href={trend.url} className={classes.pill} target='_blank' rel="noreferrer">
									{trend.name}
									{trend.tweet_volume && <span className={classes.pillSpan}>{trend.tweet_volume}</span>}
								</a>
							</li>
						)
					})}
				</ul>
			</Container>
		</>
	)
}

export default TrendDisplayBox
