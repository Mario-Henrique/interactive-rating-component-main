const btRate = document.querySelectorAll("[data-rate]");
const rating = document.getElementById("rating")
const msg = document.getElementById("alert")

btRate.forEach(element => {
    element.addEventListener("click", () => {
        rating.textContent = element.getAttribute("data-rate")
        bgcolorButton(element)
        msg.textContent = ''
    })
})

const btSubmit = document.getElementById("btSubmit")
const rateState = document.getElementById("rateState")
const thankyouState = document.getElementById("thankYouState")
btSubmit.addEventListener("click", () => {
    if(rating.textContent != ''){
        rateState.classList.add("hidden")
        thankyouState.classList.remove("hidden")
    } else 
        msg.textContent = 'Pick a rate value!'
})

function bgcolorButton(element){
    btRate.forEach(element => {
        element.classList.remove("btActive")
    })

    element.classList.add("btActive")
}