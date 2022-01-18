import { makeStyles } from "@mui/styles"

const useTrendDisplayStyle = makeStyles({
	displayBox: {
		padding: "0.7rem",
		display: "flex !important",
		flexWrap: "wrap",
		justifyContent: "center",
		marginTop: "0.5rem",
		// border:"1px solid red"
	},
	displayList: {
		padding: "0.3rem",
		display: "flex !important",
		flexWrap: "wrap",
		justifyContent: "center",
		listStyle: "none",
		// border:"1px solid red"
	},
	listItem: {
		margin: "0.5rem",
		border: "0.1rem var(---main-color---) solid",
		paddingLeft: "0.4rem",
		paddingRight: "0.4rem",
		borderRadius: "1rem",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "rgba(25,118,210,0.5)",
		transition: "all 0.2s ease-out",
		"&:hover": {
			transform: "scale(1.05)",
			background: "var(---white-color---)",
		},
	},
	pill: {
		textDecoration: "none",
	},
	pillSpan: {
		color: "var(---white-color---)",
		background: "var(---main-color---)",
		marginLeft: "0.2rem",
		borderRadius: "0.2rem",
		padding: "0.2rem",
		transition: "all 0.2s ease-out",
		"&:hover": {
			background: "var(---white-color---)",
			color: "var(---main-color---)",
		},
	},
})

export default useTrendDisplayStyle
