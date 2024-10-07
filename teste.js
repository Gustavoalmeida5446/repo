// const kohlerName = ['colera', 'cooler', 'pedrao', 'pedrao das ideias', 'pedro', 'grande'];
// const nick = Math.floor(Math.random()*kohlerName.length);
// alert (`Fala ${kohlerName[nick]}`);


function validPassword(password, username) {
    const size = password.length >= 8; // se a senha for maior que 9 caracteres, true
    const space = password.indexOf(' ') === -1; // se não tiver espaço na senha, true
    const name = password.indexOf(username) === -1; // se não tiver o username na senha, true
    return size && space && name; // se alguma variável não for true, retorna false
}

// function validPassword (password, username) {
//     const size = password.length < 8;
//     const space = password.indexOf(' ') !== -1;
//     const name = password.indexOf(username) !== -1;
//     return !size && !space && !name;
//     }

// function avg(arr){
//     let total = 0;
//     for (let num of arr) {
//         total = total + num;
//         console.log("🚀 ~ avg ~ total:", total)
//     }
//    return total/arr.length;
// }

// const arr = [200, 310, 400, 500]
// let total = 0;
// let i = 0;
// // for(let i = 0; i < arr.length && total < 500 ; i = i+1){
// for(; i < arr.length && total < 500; i++){
//     total += arr[i]
    
// }
// console.log("🚀 ~ i:", i)
// console.log("🚀 ~ total:", total)


// const arr = [1, 2, 3, 4]
// let total = 0;
// function avg(arr){
// for (let i = 0; i < arr.length && total += i; i++){

//     console.log(i);
// }
// }

// const arr = [1, 2, 3, 4]
// let total = 0;
// function avg(arr){
//     for(let num of arr)
//         total = total + num;
//     console.log(total/arr.length);
//     }


function average(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

const sentence = 'ninguem acertou o horario exato no blog ruim que pedro fez em javascript';
function pangram(sentence) {
    let lowercased = sentence.toLowerCase();
    for (let char of 'abcdefghijlmnopqrstuvxzkwy') {
        if (lowercased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
