const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")



btnOpen.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', handleResetClick)

function handleOpenClick(){
  screen1.classList.add("hide")
  screen2.classList.remove("hide")

  
  const sentences = [
    "Agora é a hora de surpreender aqueles que duvidaram de você.",
    "Avante! Para começar, você só precisa dar o primeiro passo.",
    "Abandone suas dores e não a esperança em dias melhores.",
    "Lutar sempre, vencer às vezes, desistir nunca. 🍀",
    "Seus medos morrerão de fome se você alimentar a sua motivação.",
    "Tentar é a única maneira de saber se vai dar certo.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Não faça sempre o mesmo se está procurando resultados diferentes.",
    "Você só vai vencer amanhã se não desistir hoje."
  ]
  const randomNumber = Math.round(Math.random() * (sentences.length -1))
  
    document.querySelector(".screen2 h3").innerText = `${sentences[randomNumber]}`
    console.log(randomNumber)

}

function handleResetClick (){
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}