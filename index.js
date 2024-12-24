import jokes from 'give-me-a-joke';
import cowsay from 'cowsay';
import colors from 'colors';

function getDadJoke(){
    return new Promise((res) => {
        jokes.getRandomDadJoke((joke) => {
            res(joke);
        })
})
}

const joke = await getDadJoke();

console.log(cowsay.say({
    text: `${joke}`.rainbow,
}))

// jokes.getRandomDadJoke(function (joke){
//     console.log(cowsay.say({
//         text : `${joke}`.rainbow,
//     }))
// })