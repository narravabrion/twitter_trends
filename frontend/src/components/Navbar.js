import React from "react"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"

import { Typography, AppBar, IconButton, Toolbar, Box } from "@mui/material"
import useNavStyles from "../styles/navStyles.comps"

const Navbar = () => {
	const classes = useNavStyles()
	return (
		<>
			<nav className={classes.nav}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position='static'>
						<Toolbar>
							<IconButton
								size='large'
								edge='start'
								aria-label='menu'
								sx={{ mr: 2 }}
							>
								<TwitterIcon fontSize='large' className={classes.brandIcon} />
							</IconButton>
							<Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
								Trends
							</Typography>
							<a
								href='https://github.com/narravabrion/twitter_trends.git'
								target='_blank'
								rel='noreferrer'
								color='inherit'
							>
								<GitHubIcon
									sx={{ m: "0.25rem" }}
									className={classes.socialsIcon}
								/>
							</a>
							<a
								href='https://twitter.com/narravabrion'
								target='_blank'
								rel='noreferrer'
								color='inherit'
							>
								<TwitterIcon
									sx={{ m: "0.25rem" }}
									className={classes.socialsIcon}
								/>
							</a>
						</Toolbar>
					</AppBar>
				</Box>
			</nav>
		</>
	)
}

export default Navbar
