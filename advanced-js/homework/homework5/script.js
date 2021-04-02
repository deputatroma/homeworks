const btn = document.querySelector('button');
      btn.addEventListener('click', getIp);

async function getIp() {

    const ip = await fetch('https://api.ipify.org/?format=json');
    const getIp = await ip.json();

    const ipData = await fetch(`http://ip-api.com/json/${getIp.ip}?fields=continent,country,regionName,city,district,zip`);
    const getData = await ipData.json();   

    let div = document.createElement('div');
        div.innerHTML = `<h3>IP Address: ${getIp.ip}</h3>`;
        document.body.append(div);

    let ul = document.createElement('ul');
        ul.innerHTML = `<li>Continent: <b>${getData.continent}</b></li>
                        <li>Country: <b>${getData.country}</b></li>
                        <li>Region: <b>${getData.regionName}</b></li>
                        <li>City: <b>${getData.city}</b></li>
                        <li>District: <b>${getData.district}</b></li>
                        <li>ZIP Code: <b>${getData.zip}</b></li>`;
        div.append(ul);
}

//      Обьясните своими словами, как вы понимаете асинхронность в Javascript
/* 
Оголошення async function визначає асинхронну функцію.
Асинхронні функції мають окремий від решти функцій порядок виконання, через цикл подій, вертаючи неявний проміс в якості результату.
Cинтаксис та структура коду, який використовують асинхронні функції, виглядають, як стандартні синхронні функції.
 */