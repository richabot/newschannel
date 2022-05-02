// Ude Import export (MANDATORY)
// console.log("hello")
import {navbar} from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();
  var data=JSON.parse(localStorage.getItem("news"))
  console.log(data,"dtee")
  import{append1} from "../scripts/fetch.js"

  var results=document.getElementById("detailed_news");
append1(data,results)