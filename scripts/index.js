// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();
var results=document.getElementById("results");
import{search,append,apical} from "./fetch.js"
let res= await apical("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
console.log(res.articles)
append(res.articles,results)
let categories=document.getElementById('sidebar').children;
for(let el of categories)
{
    el.addEventListener("click",cSearch)
}
function cSearch()
{
    document.getElementById("results").innerText=null;
    search(this.id).then((data)=>{
        console.log(data)
var results=document.getElementById("results");
append(data.articles,results)
    })
}


var search1=document.getElementById("search_input")
search1.addEventListener("keypress",()=>{
    getData1(event)
})
let arr1=[];
const getData1=async(e)=>{
    if(e.code==="Enter")
    {
        let sv=search1.value;
        localStorage.setItem("searchItem",sv)
        window.location.href="search.html"
    }
}