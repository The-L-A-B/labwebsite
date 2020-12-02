export const isSticky = (e) => {
    const body = e.target.body;
    const header = body.querySelector('.is-sticky');
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? header.classList.add('sticky') : header.classList.remove('sticky');
};