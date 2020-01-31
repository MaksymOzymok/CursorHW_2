
function getNumber() {
    let n;
    do {
        n = prompt('Please, enter int number');
    } while (isNaN(n) !== false || parseFloat(n)-parseInt(n)!==0);
    return n;
}
let n = parseInt(getNumber());
let m = parseInt(getNumber());

let isNeedEvenSkip = confirm('Do you need skip a even numbers?');

let  s = 0;
 function isEven(n) {
    return n % 2 === 0;
 }
if (isNeedEvenSkip) {
    for (let i = n; i <= m; i++) {
        if (!isEven(i))
            s += i;
    }
}else {
    for (let i = n; i <= m; i++) {
            s += i;
    }
}
document.writeln(`N = : ${n}`);
document.writeln('<br>');
document.writeln(`M = : ${m}`);
document.writeln('<br>');
document.writeln(`Sum from ${n} to ${m} and skipEven is ${isNeedEvenSkip} : ${s}`);