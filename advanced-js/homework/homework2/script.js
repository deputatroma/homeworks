const books = [
  {
      author: "Скотт Бэккер",
      name: "Тьма, что приходит прежде",
      price: 70
  },
  {
      author: "Скотт Бэккер",
      name: "Воин-пророк",
  },
  {
      name: "Тысячекратная мысль",
      price: 70
  },
  {
      author: "Скотт Бэккер",
      name: "Нечестивый Консульт",
      price: 70
  },
  {
      author: "Дарья Донцова",
      name: "Детектив на диете",
      price: 40
  },
  {
      author: "Дарья Донцова",
      name: "Дед Снегур и Морозочка",
  }
];

function booksArr(arr) {

  const booksBox = document.getElementById('root');
  const booksList = document.createElement('ul');

  function createElement (item, i){
    const {author, name: title, price} = item;
    const numberBook = i + 1;
        if (!author) {
            throw new Error(`In the book #${numberBook} the author name is omitted`);
        } else if (!title) {
            throw new Error(`In the book #${numberBook} the book title is omitted`);
        } else if (!price) {
            throw new Error(`In the book #${numberBook} the book price is omitted `);
        }
        const bookList = document.createElement('li');
        booksList.append(bookList);
        bookList.innerText = (`Author: ${author}, Name: "${title}", Price: ${price}₴`);
        return bookList;
  }
  arr.forEach((item, i) => {
    try {
        const bookListElement = createElement(item, i);
        booksList.append(bookListElement);
    } catch (err) {
        console.error(err);
    }
  });
  return booksBox.append(booksList);
}

booksArr(books);

//    Приведите пару примеров, когда уместно использовать в коде конструкцию `try...catch`
/*
В разі помилки в скрипті, код «падає» (виконання скрипта зупиняється).
При використанні в коді синтаксичної конструкції try..catch, яка дозволяє «ловити» помилки,
в разі помилки і при зупинки виконання коду в блоці try, виконується блок catch.
*/