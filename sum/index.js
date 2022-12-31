
function all1() {
    let message = document.querySelector('#sum').value;
    let arrstr = message.split(' ');
    
    let arrnumpr  = arrstr.map(function(item, index, arr) {
        let number = Number(item);
        return isNaN(number)? 0 : number;
    });
    
    let arrnum = arrnumpr.filter(Boolean);
    
    arrnum.sort(function(a, b) { return a - b; });
    document.querySelector('#arrsort').innerHTML = arrnum;
    
    function sumarr() {
        let sum = 0;
        for (let i = 0; i < arrnum.length; i++){
            sum += arrnum[i];
        }
        return sum;
    }
    document.querySelector('#sumres').innerHTML = sumarr();
}
