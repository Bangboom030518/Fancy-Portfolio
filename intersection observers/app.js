const sections = document.querySelectorAll('section')
const options = {
    threshold: 0.75,
    rootMargin: '0%'
};
const observer = new IntersectionObserver(
    (entries, observer) => {
        for (x of entries) {
            if (!x.isIntersecting) {
                continue;
            }
            observer.unobserve(x.target);
            let img = document.createElement('img');
            img.src = './image.jpg';
            x.target.append(img);
        }
    }, options
)
for (x of sections) {
    observer.observe(x);
}
