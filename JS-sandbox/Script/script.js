/* currency */
var usdbyn = 1.9526;
var eurbyn = 2.0765;
var rubbyn = 0.031966;
var input;
var result;
var submit_byn = document.querySelector('#submit_byn');
var input_byn = document.querySelector('#input_byn');
var output_byn_usd = document.querySelector('#output_byn_usd');
var output_byn_eur = document.querySelector('#output_byn_eur');
var output_byn_rub = document.querySelector('#output_byn_rub');
var outputbox_usd = document.querySelector('#outputusd');
var outputbox_eur = document.querySelector('#outputeur');
var outputbox_rub = document.querySelector('#outputrub');
var outputboxes = [outputbox_usd, outputbox_eur, outputbox_rub];
/* */
/* riddle */
var riddle1 = 'Где люди платят за то, что у них отнимают?';
var correct1 = 'Парикмахерская';
var riddle2 = 'У отца Мэри есть 5 дочерей: Чача, Чичи, Чече, Чочо. Как зовут 5 дочь?';
var correct2 = 'Мэри';
var riddle3 = 'На дне моря лежит сундук. В нем все есть, кроме одного. Чего в нем нет?';
var correct3 = 'Пустоты';
var riddle4 = 'Завязать можно, а развязать нельзя.';
var correct4 = 'Разговор';
var count = 0;
var button = document.querySelector('.riddle');

function insert_fancy_name_here(riddle, correct) {
    var answer = prompt(riddle);
    console.log(answer.toLowerCase());
    console.log(correct.toLowerCase());
    if (answer.toLowerCase() === correct.toLowerCase()) {
        alert('Верно. Счет: ' + (++count));
    }
    else {
        alert('Неа. Счет: ' + count);
    };
    button.innerHTML = ('Счет: ' + count);
};
button.addEventListener('click', function (ev) {
    ev.preventDefault();
    insert_fancy_name_here(riddle1, correct1);
    insert_fancy_name_here(riddle2, correct2);
    insert_fancy_name_here(riddle3, correct3);
    insert_fancy_name_here(riddle4, correct4);
});

function calccurrency(currency, output) {
    input = input_byn.value;
    result = input / currency;
    result = Math.round(result * 10) / 10;
    outputboxes.forEach(function (out) {
        out.classList.add('show');
    });
    output.innerHTML = result;
    console.log("running");
};
submit_byn.addEventListener('click', function (ev) {
    ev.preventDefault();
    calccurrency(usdbyn, output_byn_usd);
    calccurrency(eurbyn, output_byn_eur);
    calccurrency(rubbyn, output_byn_rub);
});
//submit_byn.addEventListener('click', function (ev) {
//    ev.preventDefault();
//    input = input_byn.value;
//    result = input / usdbyn;
//    result = Math.round(result * 10) / 10;
//    output_byn_usd.classList.add('show');
//    output_byn_usd.innerHTML = result;
//});
// var array = [10, 20, 30, 40];
// document.write('line 17: array = ' + array + '<br>');
// var summ = 0;
// document.write('line 19: summ = ' + summ + '<br>');
// document.write('<b>actual voodoo starts here:</b><br>')
// for (var counter = 0; counter < array.length; counter++) {
//     document.write('line 23: counter = ' + counter + '<br>');
//     document.write('line 25: summ = ' + array[counter] + '+' + summ + '<br>');
//     summ += array[counter]; //b = 0+40 ?
//     document.write('line 25: summ = ' + summ + '<br>');
// }
// document.write('<b>the result of your this voodoo is ' + summ + '</b>');
//------------------------------