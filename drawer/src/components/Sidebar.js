import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Inbox, Mail } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { withRouter } from 'react-router-dom'


const useStyles = makeStyles({
    drawer: {
        width: "200px"
    }
})

const Sidebar = props => {
    const {history} = props
    const classes = useStyles()

    const itemsList = [
        {
          text: "Home",
          icon: <Inbox />,
          onClick: () => history.push("/")
        },
        {
          text: "About",
          icon: <Mail />,
          onClick: () => history.push("/about")
        },
        {
          text: "Contact",
          icon: <Mail/>,
          onClick: () => history.push("/contact")
        }
    ];

    return (
        <Drawer variant = "permanent" className={classes.drawer}>
            <List>
            {
                itemsList.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                    <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                    </ListItem>
                );
            })}
            </List>
        </Drawer>
    )
}

export default withRouter(Sidebar)
