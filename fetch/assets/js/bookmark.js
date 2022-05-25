let row =  document.querySelector(".row");

let basketStrBm = localStorage.getItem('basket');
if (!basketStrBm) {
    var basketItemsBm = [];
} else {
    var basketItemsBm = JSON.parse(basketStrBm);
}

basketItemsBm.forEach(el => {

    let colMd3 = document.createElement('div');
    colMd3.classList.add('col-md-3');
    let card = document.createElement('div');
    card.classList.add('card-style');

    let cardBody = document.createElement('div');

    let cardH4 = document.createElement('h4');
    cardH4.innerText = `${el.Title}`;
    let cardP = document.createElement('p');
    cardP.innerText = `${el.Body}`;

    let cardIds = document.createElement('h5');
    cardIds.innerText = `id: ${el.Id}   userId: ${el.UserId}`

    cardBtn = document.createElement('button');
    cardBtn.classList.add('btn');
    cardBtn.classList.add('btn-danger');
    cardBtn.innerText = "Remove From Bookmark";

    cardBody.appendChild(cardH4);
    cardBody.appendChild(cardP);
    cardBody.appendChild(cardIds);
    cardBody.appendChild(cardBtn);
    card.appendChild(cardBody);
    colMd3.appendChild(card);
    row.appendChild(colMd3);

    cardBtn.addEventListener('click', function(){
        let indexOfel = basketItemsBm.indexOf(el);
        basketItemsBm.splice(indexOfel,1);
        // console.log(basketItemsBm);
        // console.log(this.parentNode.parentNode.parentNode);
        this.parentNode.parentNode.parentNode.remove();

        localStorage.setItem('basket',JSON.stringify(basketItemsBm));
    })


});