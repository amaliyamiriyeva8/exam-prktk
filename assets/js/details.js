let id=new URLSearchParams(window.location.search).get("id")
let main=document.querySelector(".js")

fetch("http://localhost:3000/amaliya/"+id)
.then(res=>res.json())
.then(element=>{
        main.innerHTML+=`
        <div>
        <h2>${element.number}</h2>
        <h1>${element.name}</h1>
        <p>${element.des}</p>
    </div>
        `
    });


