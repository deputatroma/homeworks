fetch("https://swapi.dev/api/films/")
    .then(response => response.json())
    .then(result => result.results)
    .then(data => {
        let div = document.createElement("div");
        data.forEach(item => {
            let divItem = document.createElement("div");
            divItem.innerHTML = `
                <h2>${item.title}</h2>
                <span>EPISODE: ${item.episode_id}</span>
                <p>${item.opening_crawl}</p>`;
            document.body.append(div);
            div.append(divItem);
            let ul = document.createElement("ul");
                ul.innerHTML = 
                    `<div class="loader">
                        <img src="img/loader.gif" alt="loader">
                    </div>`;
            let characters = item.characters;
            let charactersList = characters.map(item => {
                return fetch(item)
                    .then(responsive => responsive.json())
                    .then(name => name.name)
            })
            Promise.all(charactersList)
                .then(data => {
                        ul.innerHTML = ``;
                    data.forEach(name => {
                        const li = document.createElement("li");
                        li.innerHTML = `${name}`;
                        ul.append(li);
                    });
                })
            divItem.append(ul)
        });
    });

//      Обьясните своими словами, что такое AJAX и чем он полезен при разработке на Javascript.
/* 
AJAX це асинхронний JavaScript і XML - набір методів веб-розробки, які дозволяють веб-додаткам працювати асинхронно.
При цьому вебсторінка, не перезавантажуючись, у фоновому режимі надсилає запити на сервер і сама звідти довантажує потрібні користувачу дані.
 */