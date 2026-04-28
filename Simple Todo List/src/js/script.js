// dom menipulation
const postBtn = document.querySelector('.postBtn')
const resultsSection = document.querySelector('#resultsSection')
const userName = document.querySelector('#userName')
const userCaption = document.querySelector('#userCaption')

// todo array 
const todoArray = []

const render = () => {

    resultsSection.innerHTML = ''

    todoArray.forEach((item, index) => {

        resultsSection.innerHTML += `<div class="rltsCont">
                                        <h2>${item.userName}</h2>
                                        <div class="rltsInfo">
                                            <div class="info">
                                                <input type="checkbox">
                                                <p>${item.task}</p>
                                            </div>
                                                
                                            <div class="btn">
                                                <button onclick="updateFunc(${index})" class="updateBtn">Update</button>
                                                <button onclick="deleteFunc(${index})" class="deleteBtn">Delete</button>
                                            </div>
                                        </div>
                                    </div>`

    })
}

// function
const deleteFunc = (index) => {
    todoArray.splice(index, 1)
    
    render()
}

const updateFunc = (index) => {
    const update = prompt("Update your task")

    if (update) {
        todoArray[index].task = update;
    }

    render()
}

// click function
postBtn.addEventListener('click', () => {

    if(!userName.value) {
        alert("Please Write some text")

    } else if (!userCaption.value) {
        alert("Please enter caption")
    } else {

        const newData = {
            userName : userName.value,
            task : userCaption.value
        }

        todoArray.unshift(newData)

        render()
        
    }
     
})