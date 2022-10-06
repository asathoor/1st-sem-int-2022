/**
 * JavaScript: Multipart Form
 */
btn1.addEventListener('click', function () {

    userInfo.style.display = 'none';
    radios.style.display = 'block';

    // note: if there is a dash nomally, use camelCase (background-color)
    radios.style.backgroundColor = 'yellow';
    radios.classlist.add('groovyColors');

    // local storage
    localStorage.setItem("hello", "world");
})

btn2.addEventListener('click', function () { // userInfo.style.display = 'none';

    radios.style.display = 'none';
    checks.style.display = 'block';

})
