const Test = () => {

    const showNam = true
    const names = ['kev' , 'lev' , 'van']
    let images  = names.map( (name,index) => {
        <li key={index}>{name}</li>
    })
    return ( 
        <div>{images}</div>
     );
}
 
export default Test;