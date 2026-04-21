const showText = document.querySelector('.showText')

let count = 0

const typeJs = () => {

    if(count <= showText.dataset.text.length) {
        showText.innerHTML += showText.dataset.text.charAt(count)
        count++
        
    } else {
        // showText.innerHTML += showText.dataset.text.charAt(count)
        clearInterval(stop)
        console.log(count);
        
    }
    

    console.log(count)
  
}

let stop = setInterval(() => {
    typeJs()

}, 100)