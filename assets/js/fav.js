
let main=document.querySelector(".js")

fetch("http://localhost:3000/fav")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        main.innerHTML+=`
        <div>
        <h2>${element.number}</h2>
        <h1>${element.name}</h1>
        <p>${element.des}</p>
        <button onclick="deletebtn(${element.id})">delete</button>
    </div>
        `
    });
})

function deletebtn(id){
    axios.delete("http://localhost:3000/fav"+id)
    .then(res=>  window.location.reload())
  
}