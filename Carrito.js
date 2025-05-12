
const product = [
    { id: 0, imagen: 'imagen/hamburguesa6.jfif', titulo: 'Texana', precio: 8900 },
    { id: 1, imagen: 'imagen/hamburguesa7.jfif', titulo: 'Californiana', precio: 7800 },
    { id: 2, imagen: 'imagen/hamburguesa8.jfif', titulo: 'Gran Terracota', precio: 9000 },
    { id: 3, imagen: 'imagen/hamburguesa10.jfif', titulo: 'Americana', precio: 8500 }
];

const categories = [...new Set(product.map(item => item))];
let cart = [];

document.getElementById('root').innerHTML = categories.map((item, i) => {
    const { imagen, titulo, precio } = item;
    return `
        <div class='box'>    
            <div class='img-box'>
                <img class='imagen' src=${imagen}></img>
            </div>
            <div class='bottom'>
                <p>${titulo}</p>
                <h2>$ ${precio}</h2>
                <button onclick='addtocart(${i})'>Agregar a carrito</button>
            </div>
        </div>
    `;
}).join('');

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    
    if(cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Tu carrito está vacío";
        document.getElementById("total").innerHTML = "$ 0";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, i) => {
            const { imagen, titulo, precio } = item;
            total += precio;
            document.getElementById("total").innerHTML = "$ " + total;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${imagen}>
                    </div>
                    <p style='font-size:12px;'>${titulo}</p>
                    <h2 style='font-size: 15px;'>$ ${precio}</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${i})'></i>
                </div>
            `;
        }).join('');
    }
}
