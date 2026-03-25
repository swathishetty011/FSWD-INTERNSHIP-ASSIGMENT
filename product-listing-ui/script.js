const products = [
{name:"Laptop", price:60000, category:"electronics"},
{name:"Headphones", price:2000, category:"electronics"},
{name:"T-Shirt", price:800, category:"clothing"},
{name:"Jeans", price:1500, category:"clothing"},
{name:"Running Shoes", price:3000, category:"shoes"}
];

const productContainer = document.getElementById("products");
const filter = document.getElementById("filter");

function showProducts(list){
productContainer.innerHTML="";

list.forEach(p=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="https://via.placeholder.com/200">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>
`;

productContainer.appendChild(card);
});
}

showProducts(products);

filter.addEventListener("change",()=>{
const category=filter.value;

if(category==="all"){
showProducts(products);
}else{
const filtered=products.filter(p=>p.category===category);
showProducts(filtered);
}
});