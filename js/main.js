const root = document.querySelector("#root");

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

const frame = document.createElement("div"); //общий контейнер
const cards = document.createElement("div"); // контейнер для карточек
const triggers = document.createElement("div"); //контейнер для кнопок

const left = document.createElement("button"); //кнопка вправо
const right = document.createElement("button"); // кнопка влево

frame.classList.add("frame");
cards.classList.add("cards");
triggers.classList.add("triggers");

triggers.append(left, right);

left.textContent = "<";
right.textContent = ">";

root.append(frame);
frame.append(cards, triggers);

images.forEach((imageUrl) => {
  const card = document.createElement("div"); //карточка
  card.classList.add("card");
  card.style.backgroundImage = `url("${imageUrl}")`;
  cards.append(card);
});

left.addEventListener("click", goLeft);
right.addEventListener("click", goRight);

let sleiderIndex = 0;

function goRight() {
  if (sleiderIndex < images.length - 1) {
    const allRounds = roundsContainer.children;
    sleiderIndex++;
    cards.style.left = `${sleiderIndex * -1 * 500}px`;
    for (let i = 0; i < allRounds.length; i++) {
      allRounds[i].classList.remove("active");
    }
    allRounds[sleiderIndex].classList.add("active");
  }
}

function goLeft() {
  if (sleiderIndex > 0) {
    const allRounds = roundsContainer.children;
    sleiderIndex--;
    cards.style.left = `${sleiderIndex * -1 * 500}px`;
    for (let i = 0; i < allRounds.length; i++) {
      allRounds[i].classList.remove("active");
    }
    allRounds[sleiderIndex].classList.add("active");
  }
}

const roundsContainer = document.createElement("div");
roundsContainer.classList.add("rounds");
frame.append(roundsContainer);

images.forEach((_, ind) => {
  const button = document.createElement("button");
  roundsContainer.append(button);

  if (ind === 0) {
    button.classList.add("active");
  }

  const allRounds = roundsContainer.children;

  button.addEventListener("click", () => {
    sleiderIndex = ind;
    cards.style.left = `${ind * -1 * 500}px`;

    for (let i = 0; i < allRounds.length; i++) {
      allRounds[i].classList.remove("active");
    }

    button.classList.add("active");
  });
});
//обработка событий, перемещение, стили, создание кнопки - декомпозировать
// два форыча по масииву images пересмотреть
//декомпозиция больших функций
//две функции gorith left
//весь проэкт обернуть в функцию и вызывать функцю с передачей документов

// class Slider {
//   constructor() {} // массив- assets, передавать left reight извне, стили, размеры

//   //метод прототипа и конструктор
//   applayRadio() {}
//   setStyleType() {}
// }
// const navigation = { left: "left", right: "right" };
