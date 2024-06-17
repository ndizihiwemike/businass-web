const product=[
    {
        id: 0,
        Image:'Capsules filling plate.jpg',
        title: 'Capscule plate',
        price: 520,
    },
    {
        id: 1,
        Image: 'Empty capscules.jpg',
        title: 'Capscules',
        price: 620
    },
    {
        id: 2,
        Image: 'AMERICAN BAG.jpg',
        title: 'AMERICAN BAGS',
        price: 120
    },
    {
        id: 3,
        Image: 'BRITISH BAG.jpg',
        title: 'BRITISH BAGS',
        price: 100
    },
    {
        id: 4,
        Image: 'CARIFONIAN BAG.jpg',
        title: 'CARIFONIAN BAGS',
        price: 130
    },
    {
        id: 5,
        Image: './MEXICAN BAG.jpg',
        title: 'MEXICAN BAGS',
        price: 320
    },
    {
        id: 6,
        Image: 'PERU BAGS.jpg',
        title: 'PERU BAGS',
        price: 720
    },
]



// console.log(categories)

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = product.filter((item)=> {
        // console.log(searchData)
        return(
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayitem(filterData)
});

const displayitem = (items)=> {
// const categories = [...new setInterval(product.map((item)=>
//     {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {id,Image, title, price} = item;
        console.log(Image)
        return(
            `<div class='box'>
                <div class="img-box">
                   <img class="images" src="${Image}" alt="this">
                </div>
                <div class="bottom">
                   <p>${title}</p>
                   <h2>${price}.00</h2>`+
                   "<button onclick='addtocart("+(i++)+")'>Order</button>"+
                `</div>
            </div>`
        )
    }).join('')
};
displayitem(product);

var cart =[];

function addtocart(a){
    cart.push(product[a]);
    displaycart();
}
function delElement(a){
    cart.pop(a, 1);
    displaycart();
}
const displaycart = ()=>{
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML= "$ "+0+".00";

    }
    else{
        document.getElementById('cartItem').innerHTML ='';
     cart.forEach((item)=> 
        {
            var {Image, title, price} = item;
            // console.log('kita:');
            console.log(Image+": " +title, price);
            total=total+price;
            console.log("total: "+total)
        document.getElementById("total").innerHTML="$ "+total+".00";
        document.getElementById('cartItem').innerHTML +=   `<div class='cart-item'>
                <div class='row-ing'>
                    <img class='rowing' src="${Image}" alt="this">
                </div> 
                <p style='font-size:10px;'>${title}</p>
                <h2 style='font-size: 10px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>";
            
        });
    }
};
displaycart(product);


