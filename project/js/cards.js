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
                            <img src="https://avatars.dzeninfra.ru/get-zen_doc/1077599/pub_61c87ca64d08f2221db20ecb_61ca0105763d9601ffc09cad/scale_1200" alt="${pers.id}">
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