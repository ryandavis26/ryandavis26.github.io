const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const visitButton = document.querySelector('.visit-btn');
const project1Btn = document.querySelector('#project-1-btn')
const project2Btn = document.querySelector('#project-2-btn')
const project3Btn = document.querySelector('#project-3-btn')



menuIcon.onClick = () => {
  navLinks.classList.toggle('active'); 
}

visitButton.addEventListener('click', () => {
    window.location.href = 'https://github.com/ryandavis26'
})
project1Btn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=iushWXrmKXc&ab_channel=RyanDavis'
})
project2Btn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/embed/y6dVWXbnfBU?si=fS75TWleyO8MxKAu'
})
project3Btn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/embed/yBOC6zRX7wk?si=nLInOT1G9shnWidu'
})