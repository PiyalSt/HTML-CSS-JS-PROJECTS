const Counter = document.querySelectorAll('.Counter')
// const bgChanger = document.querySelector('.bgChanger')

const color = ['']

const colorGanarator = () => {

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

const allCounter = Array.from(Counter)

allCounter.map((item, index) => {
    
    let counter = 0
    let target = Number(item.dataset.value)
    let speed = Number(item.dataset.speed)
    
    let counterFunc = () => {
        
        if(counter <= target) {
            item.innerHTML = counter + "K"
            
            // bgChanger.style.backgroundColor = `${colorGanarator()}`
            item.style.color = `${colorGanarator()}`
            console.log(colorGanarator())

        counter ++
    } else {
        clearInterval(stop)
    }
    // console.log(counter);
    // console.log(index);
    

}

let stop = setInterval(() => {
    counterFunc()
}, item.dataset.speed)
})