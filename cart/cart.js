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
        // let parentdiv=document.createElement("div")
        // parentdiv.setAttribute("id","parentdiv")
        // let img_tit
        op+=`<div id="parentdiv">
        <div id="image_title">
            <img src=${e.img} alt="">
            <p>${e.title}</p>
        </div>
        <div id="qunt">
        <select name="" id="qun_amt">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
        </div>
  
    
    
        
        <div id="price">$${e.price}</div>
        <div id="total">${e.price*document.getElementById("qun_amt").value}</div>
        </div>`
        
    });
    disinparent.innerHTML=op
   
}