function parallax(event){
	this.querySelectorAll('.img1').forEach(img1 => {
		img1.style.transform = `translateX(${event.clientX/100}px)`
	})
}
document.addEventListener('mousemove', parallax)
