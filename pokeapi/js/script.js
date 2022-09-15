async function fetchdata(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

async function showpoke(){
    for(let i=1; i<=300; i++){
        let pokemon = await fetchdata(`https://pokeapi.co/api/v2/pokemon/${i}`)
    let pokecard;

    pokecard= `<div class="card col-4" style="width: 18rem;">
    <img class="card-img-top" src="${pokemon.sprites.front_default}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <p class="card-text"> </p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}</li>
    <li class="list-group-item">${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}</li>
    <li class="list-group-item">${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}</li>
    </ul>
    <div class="card-body">
    <a href="#" class="card-link">Entrenar</a>
    <a href="#" class="card-link">Donde encontrar</a>
    </div>
    </div>`

    let containter = document.querySelector(".pokedex");
    containter.innerHTML+= pokecard;
    }
}
showpoke();

