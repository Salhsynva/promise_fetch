let loadBtn = document.querySelector('.btn');
let row = document.querySelector('.row');


function BasketItem(id, userId, title, body) {
        this.Id = id,
        this.UserId = userId,
        this.Title = title,
        this.Body = body
}

let bookBasketStr = localStorage.getItem('basket');
if (!bookBasketStr) {
    var bookBasketItems = [];
} else {
    var bookBasketItems = JSON.parse(bookBasketStr);
}


let badge = document.querySelector("#basket-span");
console.log(badge);
badge.innerText = bookBasketItems.length;

loadBtn.addEventListener('click',function(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => {

        data.forEach(el => {
            let colMd3 = document.createElement('div');
            colMd3.classList.add('col-md-3');
            let card = document.createElement('div');
            card.classList.add('card-style');

            let cardBody = document.createElement('div');

            let cardH4 = document.createElement('h4');
            cardH4.innerText = `${el.title}`;
            let cardP = document.createElement('p');
            cardP.innerText =   `${el.body}`;

            let cardIds = document.createElement('h5');
            cardIds.innerText = `id: ${el.id}   userId: ${el.userId}`

            cardBtn = document.createElement('button');
            cardBtn.classList.add('btn');
            cardBtn.classList.add('btn-danger');
            cardBtn.innerText = "Add To Bookmark";

            cardBody.appendChild(cardH4);
            cardBody.appendChild(cardP);
            cardBody.appendChild(cardIds);
            cardBody.appendChild(cardBtn);
            card.appendChild(cardBody);
            colMd3.appendChild(card);
            row.appendChild(colMd3);

            cardBtn.addEventListener('click', function(e){
                e.preventDefault();
                let dataId = el.id;        
        
                let item = bookBasketItems.find(x => x.Id == dataId);
                if (!item) {
                    item = new BasketItem(el.id, el.userId, el.title, el.body);
                    bookBasketItems.push(item);
                }

                badge.innerText = bookBasketItems.length;

                localStorage.setItem('basket', JSON.stringify(bookBasketItems));

            })

        });

    })

    loadBtn.classList.add('d-none');
})



