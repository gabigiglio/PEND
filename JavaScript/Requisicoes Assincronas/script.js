const botao = document.getElementById('buscarUsuarios');
const resultado = document.getElementById('resultado');
const idUsuario = document.getElementById('idUsuario');

// botao.addEventListener('click', () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resposta => resposta.json())
//     .then(dados => {
//       //console.log(dados);
//       resultado.innerHTML = '';
//       dados.forEach(usuario => {

//         resultado.innerHTML += `
//             <p>
//             <strong>${usuario.name}</strong> <br>
//             ${usuario.email}
//             </p>
//             <hr>
//         `;
//       });
//     })
//     .catch(erro => {
//       console.error('Error fetching data:', erro);
//     });
// });


//ASYNC AWAIT
// botao.addEventListener('click', async () => {
//     try {
//         const resposta = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//         );
//         const dados = await resposta.json();

//         resultado.innerHTML = '';
//         dados.forEach(usuario => {

//         resultado.innerHTML += `
//             <p>
//             <strong>${usuario.name}</strong> <br>
//             ${usuario.email}
//             </p>
//             <hr>
//         `;
//       });
//     } catch(erro) {
//         resultado.innerHTML = 'Erro ao buscar os usuários.';
//         console.log(erro);
//     }
// });

//COM CAMPO DE BUSCA
botao.addEventListener('click', async () => {

    const id = idUsuario.value;

    if(id == "") {
        resultado.innerHTML = 'Insira um ID de usuário.';
        return;
    }

    try {

        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.innerHTML += `
            <p>
            <strong>${dados.name}</strong> <br>
            Email:${dados.email}<br>
            Cidade:${dados.address.city}<br>
            Telefone:${dados.phone}
            </p>
            <hr>
        `;
      
    } catch(erro) {
        resultado.innerHTML = 'Erro ao buscar os usuários.';
        console.log(erro);
    }
});








