import { Inbox, Mail, Menu } from '@mui/icons-material'
import PropTypes from 'prop-types';
import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = props => {
    const {window, history} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
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
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined
    
    return (
        <div>
            <Box sz = {{display: 'flex'}}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    }}
                >

                    <Toolbar>
                        <IconButton 
                            color = "inherit"
                            aria-label="open drawer"
                            edge = "start"
                            onClick = {handleDrawerToggle}
                            sx = {{mr: 2, display: {sm: 'none'}}}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography varient = "h6" noWrap component = "div">
                            Responsive Drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer> 
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                        className = {{width: "500px"}}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </div>
    )
}

Sidebar.propTypes = {
    window: PropTypes.func,
};
  
export default withRouter(Sidebar)
