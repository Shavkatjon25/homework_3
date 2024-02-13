import Grid from '@mui/material/Unstable_Grid2'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Hidden } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DaTa, shop } from './bir';
import Mlumot from './Urlclir'

function Mainm() {

const dispach=useDispatch();
async function Bitta(){
    const data =await fetch('https://api.escuelajs.co/api/v1/products')
    const datajson= await data.json();
    const dt=Mlumot(datajson)
    dispach(DaTa(dt))
}

useEffect(()=>{
    Bitta();
},[])

const malumotlar=useSelector(a=>a.malumot)
console.log(malumotlar);


function HendlClick(m){
    dispach(shop(m))
}



  return (
    <div style={{padding:'10px'}}>
    <Grid container spacing={2} disableEqualOverflow>
 
    {malumotlar.map(x=>{
        return(
            <Grid xs={6} sm={3} key={x.id}>
            <div >
              <Card sx={{ maxWidth: 345, }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={x.images[0]}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {x.category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {x.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>HendlClick(x)}>
                    <AddShoppingCart/>
                  </Button>
                </CardActions>
              </Card>
              </div>
            </Grid>
        )
    })}





</Grid>
</div>
  )
}

export default Mainm