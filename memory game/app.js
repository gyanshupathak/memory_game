const cardArray = [
    {
        name: 'burger',
        img: 'images/burger.jpeg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpeg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg',
    },
    {
        name: 'fruits',
        img: 'images/fruits.jpeg',
    },
    {
        name: 'burger',
        img: 'images/burger.jpeg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpeg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpeg',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpeg',
    },
    {
        name: 'fruits',
        img: 'images/fruits.jpeg',
    }
    
];
 
cardArray.sort(() => 0.5 - Math.random());


const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];


function createBoard() {
    for (i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/mosaic.jpeg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        gridDisplay.appendChild(card);
    }
    
};



function checkmatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/mosaic.jpeg');
        cards[optionTwoId].setAttribute('src', 'images/mosaic.jpeg');


        alert('you have clicked the same image!');
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('Match found!');
        
        cards[optionOneId].setAttribute('src', 'images/white.jpeg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpeg');
        
        cards[optionOneId].removeEventListener('click', flipcard);
        cards[optionTwoId].removeEventListener('click', flipcard);
        cardsWon.push(cardsChosen[0]);
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/mosaic.jpeg');
        cards[optionTwoId].setAttribute('src', 'images/mosaic.jpeg');
        alert('Oops Try Again!');
    }
    
    resultDisplay.textContent = cardsWon.length;



    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent='Congratulations , you have found them all!'
    }
};
createBoard();




function flipcard() {
    const cardid = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardid].name);
    cardsChosenIds.push(cardid);

    this.setAttribute('src', cardArray[cardid].img);
    if (cardsChosen.length == 2) {
        setTimeout(checkmatch, 500);
    }
};

