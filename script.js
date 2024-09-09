window.onload = async()=>{
    var dogButton = document.getElementById("getdog")

    // fetches a random dog image from API for the first time when website loads
    const dogApi="https://dog.ceo/api/breeds/image/random"
    await fetch(dogApi).then((res)=>{
        res.json().then((data)=>{
            var newdog = document.createElement("img")
            newdog.src=data.message
            document.getElementById("container").appendChild(newdog)

        })
    })

    // fetches a random dog data from API 
    dogButton.addEventListener('click',async()=>{
        document.getElementById("container").innerHTML=null
        document.getElementById("container").textContent= "Loading..."

        await fetch(dogApi).then((res)=>{
            res.json().then((data)=>{
                document.getElementById("container").textContent= ""
                var newdog = document.createElement("img")
                newdog.classList.add("h-[400px]")
                newdog.src=data.message
                document.getElementById("container").appendChild(newdog)

            })
        })
    })
}