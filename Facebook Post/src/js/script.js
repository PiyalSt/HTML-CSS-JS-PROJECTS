// userInput
const nickName = document.querySelector("#nickName");
const publishBtn = document.querySelector("#publishBtn");
const textArea = document.querySelector("#textArea");
const showImg = document.querySelector("#showImg")
// const showImg2 = document.querySelector("#showImg2")
const imgFile = document.querySelector("#imgFile")

// display - innerHTML
const displayName = document.querySelector("#displayName");
const displayDate = document.querySelector("#displayDate");
const displayResults = document.querySelector("#displayResults");

// Post Cart Container
const postCartContainer = document.querySelector("#postCartContainer");

const postCart = [];

// Delete Button
const deleteBtn = document.querySelector('#deleteBtn')


const renderPosts = () => {

    postCartContainer.innerHTML = "";

    postCart.forEach((item, index) => {
        postCartContainer.innerHTML += `
        <div id="postCart" class="mt-20 mb-10 border-t border-gray-300 pt-6">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <div>
                        <div class="w-12 h-12 bg-gray-400 rounded-full overflow-hidden">
                            <img src="./src/assets/profile1.png" alt="">
                        </div>
                    </div>
                    <div class="flex gap-4 text-base sm:text-lg md:text-xl lg:text-2xl">
                        <span id="displayName" class="font-semibold">${item.nickName.toLocaleUpperCase()}</span>
                        <span id="displayDate" class="text-gray-500 text-base">${item.date}</span>
                    </div>
                </div>
                <div class="text-xl">
                    <i class="fa-solid fa-ellipsis-vertical cursor-pointer relative"></i>
                </div>
            </div>

            <div class="my-6 sm:my-6 lg:my-10 ml-15">
                <div id="displayResults" class="text-2xl">${item.someText}</div>
                ${item.image ? `
                    <div class="w-full h-auto bg-gray-200 rounded-lg mt-2">
                        <img src="${item.image}" class="w-full h-auto object-cover  rounded-lg" />
                    </div>
                    ` : ""}
            </div>

            <div class="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center ">
                <div class="flex justify-evenly sm:gap-24 md:gap-30 lg:gap-40 lg:ml-20 text-gray-600">
                    <li onclick="likePost(${index})" class="list-none text-2xl cursor-pointer">
                        <i class="fa-regular fa-heart"></i>
                        ${item.likes}
                    </li>
                    <li class="list-none text-2xl cursor-pointer">
                        <i class="fa-regular fa-comment"></i>
                    </li>
                    <li class="list-none text-2xl cursor-pointer">
                        <i class="fa-solid fa-share-nodes"></i>
                    </li>
                </div>
                <div class="flex items-center gap-5">
                    <button onclick="deletePost(${index})" class="w-full sm:w-auto py-2 px-4 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 duration-300">Delete</button>
                    <p onclick="editPost(${index})" class="w-full sm:w-auto py-2 px-4 bg-gray-600 text-white rounded cursor-pointer hover:bg-gray-700 duration-300">Edit Post</p>
                </div>
            </div>
        </div>
    `;
    })

}

const deletePost = (index) => {
    postCart.splice(index, 1)
    renderPosts()
}

const likePost = (index) => {
    postCart[index].likes++;
    renderPosts()
}

const editPost = (index) => {

    const newText = prompt("Edit your post: ")

    if(newText) {
        postCart[index].someText = newText
        renderPosts()
    }
}

imgFile.onchange = () => {
    const file = imgFile.files[0];
    if (file) {
        imageURL = URL.createObjectURL(file);
    }
    showImg.src = URL.createObjectURL(imgFile.files[0])
};


publishBtn.addEventListener("click", () => {

    const newPost = {
        nickName: nickName.value,
        someText: textArea.value,
        date : new Date().toLocaleString(),
        likes : 0,
        image: imageURL
    }

    postCart.unshift(newPost);
  
    if(!nickName.value) {
        alert("Enter Nick Name")
        return;
    } 
    
    if (!textArea.value) {
        alert("Enter Some Text")
        return;
    }
    
    renderPosts()

    

});
