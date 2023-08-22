import { skills } from './data/skills.js'
import { projects } from './data/projects.js'
import { records } from './data/journey.js'

let _stats_card = document.querySelector('.section_rating');
async function addCard(_card) {
  let leetcode = await fetch('https://leetcard.jacoblin.cool/ritvikbilla?animation=false&theme=light&border=0');
  _card.innerHTML = `
  <img src="${leetcode.url}" class="leetcode-card" onclick="location.href='https://leetcode.com/ritvikbilla/'"></img>`;
}

addCard(_stats_card);

let _records = document.querySelector('[data-class="journey"]');
let _r_text = "";
records.forEach(_record => {
  if (_record.type === "education") {
    _r_text += `
      <div class="details-container record">
        <img src="./images/${_record.type}.png" alt="${_record.name} icon" class="icon" />
        <h3>${_record.name}</h3>
        <p>${_record.data}<br />${_record.rank}</p>
        <p style="font-weight:bold; padding: 5px">${_record.syear}-${_record.eyear}</p>
    `;
    if (Object.keys(_record.extra).length) {
      _r_text += `<p>${_record.extra.data}<br />${_record.extra.rank}</p>
      <p style="font-weight:bold">${_record.extra.syear}-${_record.extra.eyear}</p>`;
    }
    _r_text += `</div>`
  }
  else if (_record.type === "certificate") {
    _r_text += `
      <div class="details-container record" onclick="location.href='${_record.extra.url}'">
        <img src="./images/${_record.type}.png" alt="${_record.name} icon" class="icon""/>
        <h3>${_record.name}</h3>
        <p>${_record.company}<br />${_record.title}</p>
        <p style="font-weight:bold">${_record.year}</p>
      </div>
      `
  }
  else if (_record.type === "paper") {
    _r_text += `
      <div class="details-container record" onclick="location.href='${_record.extra.url}'">
        <img src="./images/${_record.type}.png" alt="${_record.type} icon" class="icon" style="1.5rem; height: 1.5rem;"/>
        <h3>${_record.name}</h3>
        <p>${_record.journal}<br />${_record.title}</p>
        <p style="font-weight:bold">${_record.year}</p>
      </div>
    `;
  }
})

_records.innerHTML = _r_text;


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let _tech_skills = document.querySelector('.skills-container');
let _s_text = "";
skills.forEach(_type => {
  _s_text += `
  <div class="details-container">
  <h2 class="experience-sub-title">${_type.type}</h2>
  <div class="article-container">
      ${_type.data.map(ele => {
    return `  
          <article>
          <img
            src="./images/checkmark.png"
            alt="Experience icon"
            class="icon"
          />
          <div>
            <h3>${ele.name}</h3>
            <p>${ele.level}</p>
          </div>
        </article>`
  }).join("")}
  </div>
  </div>
  `;
})

_tech_skills.innerHTML = _s_text;

let _projects = document.querySelector('.projects-container');
let _p_text = "";

projects.forEach(_prj => {
  _p_text += `
  <div class="details-container color-container project">
  <div class="article-container">
  <img
  src="./images/${_prj.id}.png"
  alt="${_prj.name}"
  class="project-img"
  />
  </div>
  <h2 class="experience-sub-title project-title">${_prj.name}</h2>
  <h4>${_prj.tools.map(_ele => {
    return `${_ele}`;
  }).join(", ")}</h4>
  <p>${_prj.desc} </p>
  <div class="btn-container">
  <button
  class="btn btn-color-2 project-btn"
  onclick="location.href='${_prj.github}'"
  >
  Github
  </button>
  </div>
  </div>
  `;
})


_projects.innerHTML = _p_text;



let _skill_content = document.getElementById('skills');
let _project_content = document.getElementById('projects');
let _js_btn_skills = document.querySelector('.js-btn-skills');
let _js_btn_projects = document.querySelector('.js-btn-projects');

_js_btn_skills.addEventListener('click', event => {

  _js_btn_skills.classList.add("btn-color-1");
  _js_btn_projects.classList.remove("btn-color-1");
  _project_content.classList.add("iactive");
  _skill_content.classList.remove("iactive");

})

_js_btn_projects.addEventListener('click', event => {

  _js_btn_projects.classList.add("btn-color-1");
  _js_btn_skills.classList.remove("btn-color-1");

  _skill_content.classList.add("iactive");
  _project_content.classList.remove("iactive");
})



