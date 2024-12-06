const LoadStarwarspeople=async ()=> {
    try{
        const res =await fetch("https://swapi.dev/api/people/1");
        const data1 = await res.json();
        console.log("person 1 data =====");
        console.log(data1);

    }
    catch(error){
        console.log('oh no error', error);
    }
}
LoadStarwarspeople();