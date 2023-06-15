let isAdmin = () => !!localStorage.getItem("token")

const main = async () => {
	const admin = document.getElementById("admin")
	const user = document.getElementById("user")

  if (!!admin && !!user) 
  if (!isAdmin()) {
    admin.style.display = "none"
  } else {
    user.style.display = "none"
  }


  const nome = document.getElementById("nome")
  const idade = document.getElementById("idade")
  const data_nascimento = document.getElementById("data_nascimento")

  const curso = document.getElementById("curso")

  const lingua_1 = document.getElementById("lingua_1")
  const lingua_2 = document.getElementById("lingua_2")
  const lingua_3 = document.getElementById("lingua_3")
  const lingua_4 = document.getElementById("lingua_4")

  const trabalho_1 = document.getElementById("trabalho_1")
  const trabalho_2 = document.getElementById("trabalho_2")
  
  const habilidade_1 = document.getElementById("habilidade_1")
  const habilidade_2 = document.getElementById("habilidade_2")
  const habilidade_3 = document.getElementById("habilidade_3")
  const habilidade_4 = document.getElementById("habilidade_4")


  const data = await fetch("http://localhost:3333/perfil")
  const json = await data.json()

  console.log(json);

  nome.innerHTML = json.nome
  idade.innerHTML = json.idade
  data_nascimento.innerHTML = json.data_nascimento

  curso.innerHTML = json.curso

  lingua_1.innerHTML = json.lingua_1
  lingua_2.innerHTML = json.lingua_2
  lingua_3.innerHTML = json.lingua_3
  lingua_4.innerHTML = json.lingua_4

  trabalho_1.innerHTML = json.trabalho_1
  trabalho_2.innerHTML = json.trabalho_2

  habilidade_1.innerHTML = json.habilidade_1
  habilidade_2.innerHTML = json.habilidade_2
  habilidade_3.innerHTML = json.habilidade_3
  habilidade_4.innerHTML = json.habilidade_4
  
  const save = document.getElementById("save")

  save.addEventListener("click", async () => {
    const data = {
      nome: nome.value,
      idade: idade.value,
      data_nascimento: data_nascimento.value,

      curso: curso.value,

      lingua_1: lingua_1.value,
      lingua_2: lingua_2.value,
      lingua_3: lingua_3.value,
      lingua_4: lingua_4.value,
      
      trabalho_1: trabalho_1.value,
      trabalho_2: trabalho_2.value,

      habilidade_1: habilidade_1.value,
      habilidade_2: habilidade_2.value,
      habilidade_3: habilidade_3.value,
      habilidade_4: habilidade_4.value,
    }

    const token = localStorage.getItem("token")
  
    const response = await fetch("http://localhost:3333/perfil", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "PATCH",
      body: JSON.stringify(data)
    })
     window.location.href = '/';
  })
  



}

document.addEventListener("DOMContentLoaded", main)
