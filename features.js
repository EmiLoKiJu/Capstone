/* eslint-disable no-plusplus */

//  menu

const menumobile = document.querySelector('#menumobile');
const menubutton = document.querySelector('.menu');

const clickHandler = () => {
  // eslint-disable-next-line no-restricted-globals
  if (event.target !== menumobile && !event.target.classList.contains('spanline1') && !event.target.classList.contains('menu') && !menumobile.classList.contains('dnone')) {
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

const comediansection = document.querySelector('.comediansection');
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
+ '<div class="Comedian dflex">'  
  + `<a href="${comedians[Object.keys(comedians)[i]][2]}" target="_blank" rel="noopener"><img class="instagramicon" src="img/${comedians[Object.keys(comedians)[i]][1]}" alt="Instagram"></a>`
  + '<div class="comediantext dflex flexcolumn">'
    + `<h2 class="comedianname">${Object.keys(comedians)[i]}</h2>`
    + `<h2 class="mp0">${comedians[Object.keys(comedians)[i]][0]}</h2>`
    + `<p class="mp0">${comedians[Object.keys(comedians)[i]][3]}</p>`
  + '</div>'
+ '</div>';
}

document.addEventListener('DOMContentLoaded', () => {
  let comediancontainerstr = '';
  const div1 = document.createElement('div');
  for (let i = 0; i < Object.keys(comedians).length; i+=2) {
    if (window.innerWidth < 768 && i >=2) comediancontainerstr += '<div class="comediancontainer dflex flexcolumn dnone">';
    else comediancontainerstr += '<div class="comediancontainer dflex flexcolumn">';
    div1.classList.add('featuredcomedians', 'dflex', 'flexcolumn', 'py64');
    comediancontainerstr += createcomedian(i);
    if (i+1 < Object.keys(comedians).length) comediancontainerstr += createcomedian(i+1);
    comediancontainerstr += '</div>';
    if (window.innerWidth > 768 && i >=2) comediancontainerstr += '</div>';
  }
  div1.innerHTML = ''
  + '<p class="alignselfcenter">Featured Comedians</p>'
  + '<span class="spanline1 alignselfcenter"></span>'
  + comediancontainerstr
  comediansection.appendChild(div1);
});