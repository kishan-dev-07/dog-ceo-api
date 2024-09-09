window.onload = async()=>{

    // fetches breeds of dog from data.json and displays them
    const dogApi="data.json"
    await fetch(dogApi).then((res)=>{
        res.json().then((data)=>{
            var container = document.querySelector(".breed-container");
            container.innerHTML = null;
            data.forEach(breed => {
                container.innerHTML += `<div class="bg-white rounded-lg shadow-lg p-5">
                <img src="${breed.imageUrl}" alt="" class="w-full h-48 object-cover rounded-t-lg">
                <h2 class="text-xl font-semibold mt-3">${breed.breedName}</h2>
                <p class="text-gray-600">${breed.description}</p>
                <ul class="mt-2 text-gray-500">
                    <li><strong>Size:</strong> ${breed.size}</li>
                    <li><strong>Life Span:</strong> ${breed.lifeSpan}</li>
                    <li><strong>Origin:</strong> ${breed.origin}</li>
                </ul>
            </div>`
            })
        })
    })
}