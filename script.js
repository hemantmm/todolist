var outputDiv = document.querySelector('#output');
var btnTranslate = document.querySelector('#btn');

// var serverURL="https://icanhazdadjoke.com/";


btnTranslate.addEventListener('click', clickHandler)
    // console.log('clicked');
    async function clickHandler(){
        var Link = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        },
    })                                                  
    // .then(response => response.json())
    // .then(json => console.log())

    var joke = await Link.json();
    console.log(joke);
    outputDiv.innerHTML = joke.joke;
}

