document.addEventListener('DOMContentLoaded' , function(){
const pokemomInput = document.getElementById ('pokemomInput')
const fetchPokemomButton = document.getElementById ('fetchPokemomButton')
const pokemomDetails = document.getElementById ('pokemomDetails')

fetchPokemomButton.addEventListener('click' , function(){
    const pokemomNameOrId = pokemomInput.value().trim().tolowrCase()

    if(pokemomNameOrId === '') {
        alert('Por favor digite o nome ou Id do Pokémom.')
        return 
    }

})


})