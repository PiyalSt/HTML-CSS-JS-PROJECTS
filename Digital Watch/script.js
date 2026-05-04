const dateString = document.querySelector('.years')
const localTime = document.querySelector('.times')


const digitalWatch = () => {
    let date = new Date()
    
    let month = date.toDateString()
    let time = date.toLocaleTimeString()

    dateString.innerHTML = `${month}`
    localTime.innerHTML = `${time}`

    console.log(1);
    console.log(time);
}



setInterval(() => {
    digitalWatch()
    
    
}, 1000)



console.log(date.toDateString());
console.log(date.toLocaleTimeString()); // use this