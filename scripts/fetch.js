let search=async(value1)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value1}`);
    
    let data=await res.json();
    return data;
}
catch(err){
console.log(err)
}
}
let search1=async(value1)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value1}`);
    
    let data=await res.json();
    console.log(data,"search1")
    return data;
}
catch(err){
console.log(err)
}
}

async function apical(url) {
    let res=await fetch(url)
    let data=await res.json()
    return data;
}

let append=(data,container)=>{
    data.forEach((el)=>{
        var arr=[];
        let div=document.createElement("div")
        div.setAttribute("class","news")
        let p1=document.createElement("h3")
        p1.innerText=el.title;
        p1.addEventListener("click",()=>{
            localStorage.removeItem("news")
            arr.push(el)
            localStorage.setItem('news',JSON.stringify(arr))
            window.location.href="news.html"
        })
        let p2=document.createElement("p")
        p2.innerText=el.description;
        var div2=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.urlToImage;
        div2.append(img)
        div.append(div2,p1,p2)
        container.append(div)

    })
}
let append1=(data,container)=>{
   
      
        console.log(data,"gh")
        let div=document.createElement("div")
        div.setAttribute("class","news")
        let p1=document.createElement("h3")
        p1.innerText=data[0].title;
       
        let p2=document.createElement("p")
        p2.innerText=data[0].description;
        var div2=document.createElement("div")
        let img=document.createElement("img")
        img.src=data[0].urlToImage;
        div2.append(img)
        div.append(div2,p1,p2)
        container.append(div)


}



export{search,apical,search1,append,append1}