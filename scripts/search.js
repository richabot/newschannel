// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();
let data3=localStorage.getItem("searchItem")
import{search1,append} from "./fetch.js"




// var results=document.getElementById("results");
search1(data3).then((data)=>{
    console.log(data)
var results=document.getElementById("results");
append(data.articles,results)
})






