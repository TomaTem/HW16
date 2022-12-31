function hw() {
let arr1 = ['js', 'css', 'html'];
document.querySelector('#task1').innerHTML = arr1[0];

let arr2 = [0, 1, false, 2, undefined, '', 3, null];
let filtered = arr2.filter(Boolean);
document.querySelector('#task2').innerHTML = filtered;

let arr3 = [[1,2], [1,2,3], [1,2,3,4]];
const longelem = (element) => element.length > 3;
document.querySelector('#task3').innerHTML = arr3.findIndex(longelem);
}