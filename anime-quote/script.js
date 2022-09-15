let info ={};

let getJSONData = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
           
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;

        return result;
    });
}

function showQuote(){
    getJSONData("https://animechan.vercel.app/api/random")
    .then(function(resultObj){
      if (resultObj.status === "ok"){
        info = resultObj.data;
        let htmlToAppend = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${info.anime}</h4>
              <h5 class="card-title">${info.character}</h5>
              <p class="card-text">${info.quote}</p>
              <a href="#" class="btn btn-primary" onclick=showQuote()>Otra cita </a>
            </div>
        </div>
    `
        document.getElementById("quote").innerHTML= htmlToAppend;
      }
    }) 
}

document.addEventListener("DOMContentLoaded", () =>{
    showQuote();
})



