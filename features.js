/* eslint-disable no-plusplus */

//  menu

const menumobile = document.querySelector('#menumobile');
const menubutton = document.querySelector('.menu');

const clickHandler = () => {
  if (event.target !== menumobile && !event.target.classList.contains('spanline1') && !event.target.classList.contains('menu') && !menumobile.classList.contains('dnone')) { // eslint-disable no-restricted-globals
    menumobile.classList.toggle('dnone');
    document.removeEventListener('click', clickHandler);
  }
};

menubutton.addEventListener('click', () => {
  if (menumobile.classList.contains('dnone')) {
    menumobile.classList.toggle('dnone');
    document.addEventListener('click', clickHandler);
  }
});

//  comedians

const comediancontainer = document.querySelectorAll('.comediancontainer');
const comedians = {
  'Matt Rife': [
    'Comedian',
    'mattrife.png',
    'https://www.instagram.com/mattrife/',
    '"Standup Comedian/Actor/Person. Stop taking the internet so seriously❤️ TOUR DATES 👇🏼 <br> mattrifeofficial.com"',
  ],
  'Jeff Arcuri': [
    'Comedian',
    'jeffacuri.png',
    'https://www.instagram.com/jarcuri/',
    'New Clips M/W/F <br> Booking: KValentine <br> @wmeagency.com <br> MLevy@wmeagency.com <br> Email list/Ticket links👇 <br> linktr.ee/jeffarcuri',
  ],
  'Luke Kidgell': [
    'Comedian',
    'lukekidgell.png',
    'https://www.instagram.com/lukekidgell/',
    'Half of @luke.and.meg <br> Touring Aus 2023 🇦🇺 <br> ⬇️ <br> linktr.ee/lukekidgell',
  ],
  'Reuben Solo': [
    'Comedian',
    'reubensolo.png',
    'https://www.instagram.com/reubensolo/',
    '🇦🇺 Aus and 🇬🇧 UK tour on sale <br> Next up: Melbourne <br> TICKETS ⤵️ <br> www.reubensolo.com',
  ],
};

function createcomedian(i) {
  return ''
+ `<a href="${comedians[Object.keys(comedians)[i]][2]}" target="_blank" rel="noopener"><img class="instagramicon" src="img/${comedians[Object.keys(comedians)[i]][1]}" alt="Instagram"></a>`
+ '<div class="comediantext dflex flexcolumn">'
  + `<h2 class="comedianname">${Object.keys(comedians)[i]}</h2>`
  + `<h2 class="mp0">${comedians[Object.keys(comedians)[i]][0]}</h2>`
  + `<p class="mp0">${comedians[Object.keys(comedians)[i]][3]}</p>`
+ '</div>';
}

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < Object.keys(comedians).length; i++) {
    const div1 = document.createElement('div');
    div1.classList.add('Comedian', 'dflex');
    div1.innerHTML = createcomedian(i);
    if (i % 2 === 0) comediancontainer[0].appendChild(div1);
    else comediancontainer[1].appendChild(div1);
  }
});