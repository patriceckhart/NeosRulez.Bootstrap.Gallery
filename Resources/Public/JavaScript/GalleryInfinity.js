console.log('infinity');

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const next = document.getElementById('next');
const spinner = document.getElementsByClassName('infinity--Spinner')[0];

var loading = false;

next.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    var hrefLink = next.href;
    console.log(hrefLink);
    spinner.style.display = 'none';
});

document.addEventListener('scroll', function () {
    if(isInViewport(next)) {
        if(!loading) {
            console.log('in viewport');
            next.click();
            spinner.style.display = 'block';
            loading = true;
        }
    }
}, {
    passive: true
});
