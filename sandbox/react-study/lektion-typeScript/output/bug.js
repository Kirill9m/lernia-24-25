"use strict";
function bug() {
    let i = 0;
    let name = 'Ki';
    i = 5;
    return i + name;
}
console.log(bug());
