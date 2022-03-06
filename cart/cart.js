let amt_val=1
let total_price
let totall
getitem()
function getitem(){
    let data= JSON.parse(localStorage.getItem("tocart"))

    displayitemincart(data)
}

function displayitemincart(data){
    // console.log(data)
    let op=""
    let  disinparent=document.getElementById("qun")
        
  
    data.forEach(e => {
    
let parentdiv=document.createElement("div")
parentdiv.setAttribute("id","parentdiv")
let image_title=document.createElement("div")
image_title.setAttribute("id","image_title")
let img=document.createElement("img")
img.src=e.img;
let p=document.createElement("p")
p.textContent=e.title
image_title.append(img,p)
let qunt=document.createElement("div")
qunt.setAttribute("id","qunt")
let qun_amt=document.createElement("select")
qun_amt.setAttribute("id","qun_amt")


let opt1=document.createElement("option")
opt1.value=1
opt1.textContent=1
let opt2=document.createElement("option")
opt2.value=2
opt2.textContent=2
let opt3=document.createElement("option")
opt3.value=3
opt3.textContent=3
let opt4=document.createElement("option")
opt4.value=4
opt4.textContent=4
let opt5=document.createElement("option")
opt5.value=5
opt5.textContent=5
qun_amt.append(opt1,opt2,opt3,opt4,opt5)
qunt.append(qun_amt)



 let price=document.createElement("div")
 price.setAttribute("id","pricee")
price.textContent="$"+e.price
let opp=parseFloat(e.price)

let total=document.createElement("div")
total.setAttribute("id","total_val")
qun_amt.addEventListener("change",function(e){
    amt_val=parseInt(e.target.value)
    
    
    
totall=amt_val*opp

var tt=document.getElementById("total_val")
tt.textContent=totall
})


// console.log(totall)
// total.textContent= "$"+totall
parentdiv.append(image_title,qunt,price,total)
disinparent.append(parentdiv)
    });
    // disinparent.innerHTML=op
   
}
// function total_name(e,val){
// let t=document.getElementById(e.id)
// t.innerText=e.price*val
// }