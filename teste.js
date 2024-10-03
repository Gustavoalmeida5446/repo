// const kohlerName = ['colera', 'cooler', 'pedrao', 'pedrao das ideias', 'pedro', 'grande'];
// const nick = Math.floor(Math.random()*kohlerName.length);
// alert (`Fala ${kohlerName[nick]}`);


function validPassword(password, username) {
  const size = password.length >= 8; // Verifica se o comprimento da senha é maior ou igual a 8
  const space = password.indexOf(' ') === -1; // Verifica se não há espaço na senha
  const name = password.indexOf(username) === -1; // Verifica se o nome de usuário não está na senha
  return size && space && name; // Retorna true se todos os critérios forem satisfeitos
}
