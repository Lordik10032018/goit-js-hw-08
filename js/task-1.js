'use strict'
const categoryElem = document.querySelectorAll('.item')
const listCategoryElem = document.querySelector('ul[id="categories"]')
listCategoryElem.classList.add('list-category')
console.log(`Number of categories: ${categoryElem.length}`);

const res = categoryElem.forEach((el) => {

    const listInnerItem = el.querySelector('ul');
    listInnerItem.classList.add('list-inner-item')

    const title = el.querySelector('h2');
    title.classList.add('second-title')

    console.log(`Category: ${title.textContent}`);
    const items = el.querySelectorAll('li')
    
    items.forEach(el => el.classList.add('inner-item'))
    console.log(`Elements: ${items.length}`);
})



