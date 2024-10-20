const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animaged-bg')
const animated_bg_texts = document.querySelectorAll('.animaged-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://media.istockphoto.com/id/1993457536/photo/man-using-a-blank-screen-laptop-at-home-he-is-sitting-on-the-sofa-with-a-coffee.jpg?s=2048x2048&w=is&k=20&c=oXp1SmCWLQkolQk1SSwQyti93GJSJ2srxGjM9VAPTJQ=" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, numquam.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
}