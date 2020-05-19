const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const list = document.querySelectorAll('.list');
const pagination = document.querySelector('.pagination');

console.log(list)

for(i=0;i<list.length;i++){
	const pageBtn = document.createElement('button');
	pageBtn.classList.add("page");
	pageBtn.classList.add("page"+(i+1));
	pageBtn.innerHTML = '<span>'+(i+1)+'</span>';
	pagination.append(pageBtn); 
}

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());

const btn = document.querySelectorAll('.page');
function btn_click(idx){
	btn[idx].onclick = function(){
		mySiema.goTo(idx);
	}
}
for(i=0;i<btn.length;i++){
	btn_click(i);
}

function connectionIndex() {
	var num = this.currentSlide;
	for(e=0;e<btn.length;e++){
			btn[e].classList.remove('active');
			list[e].classList.remove('active');
		}
	btn[num].classList.add('active');
	list[num].classList.add('active');
	document.querySelector('.js-index').innerHTML = num+1;
}

const mySiema = new Siema({
	loop: true,
	onInit: connectionIndex,
	onChange: connectionIndex 
});