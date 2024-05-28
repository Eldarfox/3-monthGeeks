const cards = async () => {
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(pers => {
                pers.forEach((pers) => {
                    const all = document.querySelector(".all");
                    const maket = document.createElement("div");
                    maket.setAttribute("class", "maket");
                    maket.innerHTML = `
                        <div class="ph">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3XeKXPIxJP-R6Hg0d2x2DCxnKV_sT04umGCOTuiNIQ&s" alt="${pers.id}">
                        </div>
                        <h2>${pers.title}</h2>
                        <span class="tbody">age: ${pers.body}</span><br>
                    `;
                    all.append(maket);
                })
            })
    }catch (e){
        console.log(e)
    }
}
cards()