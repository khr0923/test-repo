function getLotto() {
    let lotto = [];
    while (lotto.length < 7) {
        let lottoNum = Math.floor(Math.random() * 45)+1;
        if (!lotto.includes(lottoNum)) {
            lotto.push(lottoNum);
        }
    }
    return lotto;
}

let card = document.querySelector('.card');
    card.addEventListener('click', click);


function click(event) {
    result1.innerText = getLotto();
    let elem = event.currentTarget;
    
    if (elem.style.transform == "rotateY(180deg)") {
            elem.style.transform = "rotateY(0deg)";
    } else {
            elem.style.transform = "rotateY(180deg)";
    }
}