const sheetID='1Spiif8qYoviS5tpSJVn3ar6_7COuVcKJniXERfhllM8';
const base=`https://docs.google.com.spreadsheets/d/${sheetID}/gviz/tq?`
const sheetName='users';
var x=document.getElementById("phone-number").value;
const qu='Select * where F===x'
const query = encodeURIComponent(qu);
const url=`${base}&sheet=${sheetName}&tq=${query}`;
const data=[];
document.addEventListener('DOMContentLoaded',init);
const output= document.querySelector('.output');

function init(){
    console.log('ready');
    fetch(url)
    .then(res=>res.text())
    .then(rep=>{

    })
}