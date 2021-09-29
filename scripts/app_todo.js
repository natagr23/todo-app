const button_add = document.getElementById('button_add')

button_add.addEventListener('click', () => {
    const usr_input = document.getElementById('usr_input');

    // make a copy from div template
    const div_template = document.getElementById("div_template");
    const copy_div = div_template.cloneNode(true);

    // change the p text to user input
    const new_p = copy_div.querySelector('p');
    new_p.textContent = usr_input.value;

    const buttons = copy_div.querySelectorAll('button')

    buttons[1].addEventListener('click', () => {
        copy_div.remove();
    });

    buttons[0].addEventListener('click', () => {

        if (new_p.classList.contains('text-grey-darkest')) {
            new_p.classList.remove('text-grey-darkest');
            new_p.classList.add('text-green');
            new_p.classList.add('line-through');
            buttons[0].classList.remove('text-green');
            buttons[0].classList.remove('border-green');
            buttons[0].classList.remove('hover:bg-green');
            buttons[0].classList.add('text-grey');
            buttons[0].classList.add('border-grey');
            buttons[0].classList.add('hover:bg-grey');
            buttons[0].textContent = 'Not Done';
        } else {
            new_p.classList.add('text-grey-darkest');
            new_p.classList.remove('text-green');
            new_p.classList.remove('line-through');
            buttons[0].classList.add('text-green');
            buttons[0].classList.add('border-green');
            buttons[0].classList.add('hover:bg-green');
            buttons[0].classList.remove('text-grey');
            buttons[0].classList.remove('border-grey');
            buttons[0].classList.remove('hover:bg-grey');
            buttons[0].textContent = 'Done';
        }
    });

    // Add new div to HTML page:
    const div_container = document.getElementById('div_container');
    copy_div.classList.remove("hidden");
    copy_div.classList.add("flex");
    div_container.appendChild(copy_div);
});