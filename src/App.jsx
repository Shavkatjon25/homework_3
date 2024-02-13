import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';
import {  ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function App() {

  const lengt=useSelector(a=>a.zakas)

  function Zakaslar(){
    console.log(lengt.length);
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My store
        </Typography>
        <Badge badgeContent={lengt.length} color='error'> 
        <div  onClick={Zakaslar}>
          <a  href='shop'>  
            <ShoppingCart sx={{cursor:'pointer'}}/>
            </a>
          </div>
        </Badge>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default App