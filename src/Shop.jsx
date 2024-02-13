import React from 'react'
import { useSelector } from 'react-redux'

function Shops() {

    const malumotlr=useSelector(a=>a.zakas)
    console.log(malumotlr);

  return (
    <div style={{padding:'10px'}}>
    <Grid container spacing={2} disableEqualOverflow>
 
    {malumotlr.map(x=>{
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

export default Shops