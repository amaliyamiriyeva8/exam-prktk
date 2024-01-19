const name = document.querySelector("#name")
const des = document.querySelector("#description")
const form = document.querySelector("form")
const number = document.querySelector("#number")
const table = document.querySelector("table")
const label_1=document.querySelector(".label1")
const label_2=document.querySelector(".label2")
const label_3=document.querySelector(".label3")
const label_4=document.querySelector(".label4")
const image=document.querySelector("#add-image")
const input=document.querySelector("#add-file")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(name.value && des.value && number.value && input.value){
        axios.post(`http://localhost:3000/amaliya/`, {
            name: name.value,
            des: des.value,
            number: number.value,
            img:image.src
        }).then(res =>
            window.location = "index.html")
    }else{
        if(input.value!==""){
            label_1.style.display="none"
        }
        else(
            label_1.style.display="block"
        )
        if(name.value!==""){
            label_2.style.display="none"
        }
        else(
            label_2.style.display="block"
        )
        if(des.value!==""){
            label_3.style.display="none"
        }
        else(
            label_3.style.display="block"
        )
        if(number.value!==""){
            label_4.style.display="none"
        }
        else(
            label_4.style.display="block"
        )
       
    }
   
}) 

input.addEventListener("input",(e)=>{
    let file=e.target.files[0]
    if(file){
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            image.src=reader.result
        }
    }
})





// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//   const all=[input,name,des,number]
//   const labels=[label_1,label_2,label_3,label_4]

//   all.forEach((element,index)=>{
//     if(element.value){
//      labels[index].style.display="none"
//     }else{
//     labels[index].style.display="block"
//     }
//   })

//     if (all.every(element=>element.value)) {
//         axios.post(`http://localhost:3000/amaliya/`, {
//             img:image.src,
//             name: name.value,
//             des: des.value,
//             number: number.value
//         }).then(res => window.location = "index.html");
//     }
// });





fetch(`http://localhost:3000/amaliya/`)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            table.innerHTML += `
         <tr>
             <td>${element.id}</td>
             <td>${element.name}</td>
             <td>${element.des}</td>
             <td>${element.number}</td>
             <td> <button onclick="deletebtn(${element.id})">delete</button></td>
         </tr>
         `
        });
})

 function deletebtn(id){
    axios.delete(`http://localhost:3000/amaliya/${id}`)
    .then(res=>
        window.location.reload()
    )
 }


