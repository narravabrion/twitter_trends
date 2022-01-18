import React from "react"
import useFooterStyle from "../styles/footerStyle.comps"

const Footer = () => {
	const classes = useFooterStyle()
	return (
		<>
			<footer className={classes.footer}>
				&copy; made with ❤ by narravabrion | {new Date().getFullYear()}
			</footer>
		</>
	)
}

export default Footer
