let h3More = document.querySelector('.read-more-h3');
let divMore = document.querySelector('.read-more-div');
let heMin = document.querySelector('.read-min-h3');

h3More.onclick = ()=>{
    divMore.style.display = 'block';
}
heMin.onclick = ()=>{
    divMore.style.display = 'none';

}