const LoadStarwars= async ()=>{
    try{
        const res = await fetch('https://swapi.dev/api/people/1');
        console.log(res);
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
    
}

LoadStarwars();
