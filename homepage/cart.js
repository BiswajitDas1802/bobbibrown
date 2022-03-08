
    let data= JSON.parse(localStorage.getItem("tocart"))
    
    let list = document.getElementById("product_price")

    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let theadRow = document.createElement("tr")
    theadRow.setAttribute("id","headings")
    let th1 = document.createElement("th")
    th1.innerText = "PRODUCT"
    th1.style.textAlign= "left"
    let th2 = document.createElement("th")
    th2.innerText = "QUANTITY"
    th2.style.textAlign= "centre"
    th2.style.width="200px"
    let th3 = document.createElement("th")
    th3.innerText = "PRICE"
    let th4 = document.createElement("th")
    th4.innerText = "TOTAL"
    table.append(thead,theadRow)
    theadRow.append(th1,th2,th3,th4)
    list.append(table)

    data.forEach((el)=>{
        el!=null&&create(el)
    })

    let val = document.getElementById("value")
    let alltt = document.getElementById("alltotal")
    let ans = 0
    let arr = document.getElementsByClassName("tot")
    for(let i = 0 ; i<arr.length ; i++){
        ans+= Number(arr[i].innerText)
    }
    console.log(ans)
    val.innerText = ans+"$"
    alltt.innerText = ans-2 +"$"
    

    function create(elem){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = elem.image_link
        div.append(img)
        let p = document.createElement("p")
        p.innerText = elem.name
        // td1.innerText = elem.name
        let td2 = document.createElement("td")
        let select = document.createElement("select")
        let del = document.createElement("button")
        del.setAttribute("class","del")
        del.innerText = "delete"
        del.onclick=function() {
            deleteItem(elem)
        }
        td1.append(div,p,del)

        select.addEventListener("change",(e)=>{
            let td = document.getElementById(elem.id)
            td.innerText =e.target.value*parseInt(elem.price)
            let arr = document.getElementsByClassName("tot")
            ans=0
            for(let i = 0 ; i<arr.length ; i++){
                ans+= Number(arr[i].innerText)
            }
            console.log(ans)
            
            val.innerText = "$"+ans
            alltt.innerText = "$" +(ans-2 )
        })
        for(let i = 1;i<=5;i++){
            let option = document.createElement("option")
            option.innerText =i
            option.value =i
            select.append(option)
           
        }
        
        td2.append(select)

        let td3 = document.createElement("td")
        td3.innerText = elem.price
        let td4 = document.createElement("td")
        td4.setAttribute("id",elem.id)
        td4.setAttribute("class","tot")
        td4.innerText = select.value*elem.price
        
        tr.append(td1,td2,td3,td4)
        table.append(tr)
}


function deleteItem(el){
    console.log(el.id)
    data=data.filter((elem)=>(el.id!=elem&&elem))
    console.log(data)
    localStorage.setItem("toCart", JSON.stringify(data))
    table.innerHTML=""
    let thead = document.createElement("thead")
    let theadRow = document.createElement("tr")
    theadRow.setAttribute("id","headings")
    let th1 = document.createElement("th")
    th1.innerText = "PRODUCT"
    th1.style.textAlign= "left"
    let th2 = document.createElement("th")
    th2.innerText = "QUANTITY"
    th2.style.textAlign= "centre"
    th2.style.width="200px"
    let th3 = document.createElement("th")
    th3.innerText = "PRICE"
    let th4 = document.createElement("th")
    th4.innerText = "TOTAL"
    table.append(thead,theadRow)
    theadRow.append(th1,th2,th3,th4)
    list.append(table)
    data.forEach((elem)=>{
        create(elem)
    })

}

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click",function() {
    alert("order placed successfully")
})