const refs = {
    listItem: document.querySelector('.listItem'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
}

const images = [
    { image: './images/1-1.jpg', id: 1 },
    { image: './images/1-2.jpg', id: 2 },
    { image: './images/1.jpg', id: 3 },
    { image: './images/2-1.jpg', id: 4 },
    { image: './images/2-2.jpg', id: 5 },
    { image: './images/2.jpg', id: 6 },
    { image: './images/3-2.jpg', id: 7 },
    { image: './images/3.jpg', id: 8 },
    { image: './images/4.jpg', id: 9 },
];

//#region make markup
function markup({image, id}) {
    return `<li class="item">
          <button data-id="${id}" class="item-btn">
            <img width="360" height="200" src="${image}" alt="image">
          </button></li>`
}

function totalMarkup(array) {
    return array.map(markup).join('');
}
const result = totalMarkup(images);
refs.listItem.innerHTML = result;
//#endregion

//#region make modal
//*=========================================

function modalMarkup({image}) {
    return `<img width="1100" height="600" src="${image}" alt="image">`       
}

function modalTotalMarkup(array) {
    return array.map(modalMarkup).join('');
}

//*=========================================

refs.listItem.addEventListener('click', (e) => {
    if (!(e.target.closest('.item-btn'))) return;
    refs.backdrop.classList.remove('is-hidden');
    const btnElem = e.target.closest('.item-btn');
    const filtered = images.find((img) => img.id == btnElem.dataset.id);
    const result = modalMarkup(filtered);
    refs.modal.innerHTML = result;
})

refs.backdrop.addEventListener('click', (e) => {
    if (!(e.target === e.currentTarget)) return;
    refs.backdrop.classList.add('is-hidden');
    refs.modal.innerHTML = '';
})
//*=========================================

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        refs.backdrop.classList.add('is-hidden');
        refs.modal.innerHTML = '';
    }
})

//#endregion





