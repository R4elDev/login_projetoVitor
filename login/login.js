"use strict"

const loginContainer = document.querySelector('.container')
const bottonProsseguir = document.getElementById('Prosseguir')


// Função para exibir a tela de login
function mostrarTelaLogin() {
    loginContainer.style.display = 'flex'
    telaRegistro.style.display = 'none'
}

const login = async () => {

    const loginUsuario = document.getElementById('loginUsuario').value
    const senhaUsuario = document.getElementById('senhaUsuario').value

        
    if (loginUsuario != " " && senhaUsuario != "") {


    const url = "https://back-spider.vercel.app/login"

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: loginUsuario,
            senha: senhaUsuario
        })
    }

    const response = await fetch(url, options)
    const data = await response.json()

<<<<<<< HEAD
    const data = await response.json()

    console.log(response);

    if(response.status == 200){
        alert('Login bem-sucedido!')
        localStorage.setItem('idUser', JSON.stringify(data.user.id))
        window.location.replace('../home/home.html')
=======
    console.log(data)

    if(response.status == 200){
        alert('Login bem-sucedido!')
        localStorage.setItem('idUsuario', JSON.stringify(data.user.id))

>>>>>>> ebe131c73566f9c569801d3bbdf4d6b455e35f0c
    } else{
        alert('Credenciais Inválidas!')
    }


    
} else {
    alert('Usuário ou senha incorretos.')
}

}
