

export default Mlumot=>{
    Mlumot.forEach(element => {
       element.images=element.images.map(img=>{
            img=img.replaceAll("[","");
            img=img.replaceAll("]","");
            img=img.replaceAll('"',"");
            return img
        })
       
    });
    return Mlumot
}