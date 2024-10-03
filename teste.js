// const kohlerName = ['colera', 'cooler', 'pedrao', 'pedrao das ideias', 'pedro', 'grande'];
// const nick = Math.floor(Math.random()*kohlerName.length);
// alert (`Fala ${kohlerName[nick]}`);


function validPassword (password, username) {
const size = password.length < 8;
const space = password.indexOf(' ') !== -1;
const name = password.indexOf(username) !== -1;
return !size && !space && !name;
}
