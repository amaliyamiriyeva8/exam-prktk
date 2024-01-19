let main=document.querySelector(".js")
let fav=document.querySelector("#fav")
let search=document.querySelector("#search")
let sort=document.querySelector("#sort")
let firstarr=[]
let secondarr=[]


function CRUD(){
fetch("http://localhost:3000/amaliya")
.then(res=>res.json())
.then(data=>{
    secondarr=data
    firstarr=firstarr.length || search.value ? firstarr :data
    main.innerHTML=""
    axios.get("http://localhost:3000/fav/")
    .then(fav=>{
        firstarr.forEach(element => {
            if(fav.data.find(favEl=>favEl.id===element.id)){
                main.innerHTML+=`
                <div>
                <img src="${element.img}" alt="">
                <i class="bi bi-heart-fill"  style="color:red" onClick='DeleteFavEl(${element.id})'></i>
                <h2>${element.number}</h2>
                <h1>${element.name}</h1>
                <p>${element.des}</p>
                <button onclick="details(${element.id})">details</button>
            </div>
                `
            }
            else{
                main.innerHTML+=`
                <div>
                <img src="${element.img}" alt="">
                <i class="bi bi-heart" onclick="addFav(${element.id})"></i>
                <h2>${element.number}</h2>
                <h1>${element.name}</h1>
                <p>${element.des}</p>
                <button onclick="details(${element.id})">details</button>
            </div>
                `
            }
           
        });
    })
   
})
}
CRUD()

search.addEventListener("input",(e)=>{
    firstarr=secondarr
    firstarr=firstarr.filter((element)=>
    element.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
 
)
CRUD()
})


function details(id){
    window.location=`./details.html?id=${id}`
}

fav.addEventListener("click",()=>{
    window.location="./fav.html"
})

function DeleteFavEl(id){
    axios.delete("http://localhost:3000/fav/"+id)
   window.location.reload()
}

function addFav(id){
    fetch(`http://localhost:3000/amaliya/${id}`)
    .then(res=>res.json())
    .then(data=>{
        axios.post(`http://localhost:3000/fav/`,data)
    })
}

sort.addEventListener("change",(e)=>{
   if(e.target.value==="as"){
    firstarr.sort((a,b)=>a.number-b.number)
   }
   else if (e.target.value==="des"){
    firstarr.sort((a,b)=>b.number-a.number)
   }
   else{
    firstarr=[]
   }
CRUD()
})

let add=document.querySelector("#add")
add.addEventListener("click",()=>{
    window.location="./add.html"
})
