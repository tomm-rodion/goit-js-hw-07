const appleGadget = [
  {
    id: 1,
    img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png",
    name: "MacBooc Pro",
    price: 2800,
  },
  {
    id: 2,
    img: "https://i.citrus.world/imgcache/size_800/uploads/shop/6/7/6737e169ab2b08ee71f5910666b43b40.jpg",
    name: "iPhone 14 Pro",
    price: 1300,
  },
  {
    id: 3,
    img: "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083559646887/220908140013965815.png@webp",
    name: "AirPods Pro2",
    price: 400,
  },
  {
    id: 4,
    img: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
    name: "iPhone 14 Pro",
    price: 600,
  },
];

const list = document.querySelector(".list");

const markup = appleGadget
  .map(({ id, img, name, price }) => {
    return `<li class="js-gadget" data-id = "${id}">
    <img src="${img}" alt="${name}" height = "250px"/>
    <h2>${name}</h2>
    <p>${price}$</p>
    <div><button class = "js-add-gadget">Buy Now</button>
    <button class = "js-favorites">Add to favorites</button>
    <button class = "js-delete" disabled = true >Delete</button></div>
    </li>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", onClick);

const bucket = [];
const favorites = [];

function onClick(evt) {
  if (evt.target.classList.contains("js-add-gadget")) {
    const idAddGadget = Number(evt.target.closest("li").dataset.id);

    const currentGadget = {
      ...appleGadget.find(({ id }) => id === idAddGadget),
    };

    const inBucket = bucket.find(({ id }) => id === idAddGadget);
    if (!inBucket) {
      currentGadget.amount = 1;
      bucket.push(currentGadget);
      evt.target.parentElement.lastElementChild.removeAttribute("disabled");
    } else {
      inBucket.amount += 1;
    }
  }

  if (evt.target.classList.contains("js-favorites")) {
    const idFavoritGadget = Number(evt.target.closest("li").dataset.id);
    const currentFavoritGadget = appleGadget.find(
      ({ id }) => id === idFavoritGadget
    );

    const inFavorit = favorites.some(({ id }) => id === idFavoritGadget);

    if (!inFavorit) {
      favorites.push(currentFavoritGadget);
    } else {
      alert(
        "The product has already been added to the list of favorite products! 🤗"
      );
    }
  }

  if (evt.target.classList.contains("js-delete")) {
    const idDeleteElem = Number(evt.target.closest("li").dataset.id);
    console.log("idDeleteElem", idDeleteElem);
    const indexDeleteElem = bucket.findIndex(({ id }) => id === idDeleteElem);
    console.log("indexDeleteElem:", indexDeleteElem);
    if (indexDeleteElem !== -1) {
      bucket.splice(indexDeleteElem, 1);

      evt.target.setAttribute("disabled", true); //...element.setAttribute(name, value);
    }
  }
  // console.log(bucket);
  // console.log(favorites);
}
