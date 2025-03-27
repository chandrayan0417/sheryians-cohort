let per = 0;
let grow = document.getElementById('grow');
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let setInt = setInterval(() => {
        btn.innerHTML = per + "%"
        per++
        grow.style.width = per + '%'
        if (per >= 101) {
            btn.innerHTML = 'Completed'
            clearInterval(setInt)
        }
    }, 100)
})