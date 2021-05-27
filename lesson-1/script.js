const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price = 0) => {
    return `<div class="goods-item">
    <img class="main-photo" src="img/nophoto.png" alt="photo">
    <div class="item-info">
    <h3>${title}</h3>
    <p>${price}</p>
    </div>
    <button class="item-button" type="button">Добавить</button>
    </div>`;
};

const renderGoodsList = (list = []) => {
    // Здесь товары выводятся через запятую, т.к map возвращает массив, элементы которого обработаны callback-функцией.
    //let goodsList = list.map(item => renderGoodsItem(item.title, item.price));

    // Чтоб был без запятых, массив не нужен. Следовательно нужно заюзать reduce
    let goodsList = list.reduce((total, item) => {return total + renderGoodsItem(item.title, item.price)}, '');
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);

window.onload = init