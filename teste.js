// const kohlerName = ['colera', 'cooler', 'pedrao', 'pedrao das ideias', 'pedro', 'grande'];
// const nick = Math.floor(Math.random()*kohlerName.length);
// alert (`Fala ${kohlerName[nick]}`);


function validPassword(password, username) {
  const size = password.length >= 8; // se a senha for maior que 9 caracteres, true
  const space = password.indexOf(' ') === -1; // se não tiver espaço na senha, true
  const name = password.indexOf(username) === -1; // se não tiver o username na senha, true
  return size && space && name; // se alguma variável não for true, retorna false
}
