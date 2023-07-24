console.log('Before Functions');
setImmediate(
    function A(){
        console.log('A SetImmediate Run');
    }
);
setImmediate(
    function B(){
        console.log('B SetImmediate Run');
    }
);
function ew(){
    console.log('EW Function');
}
ew();
console.log('After all function');
setImmediate(
    function A(){
        console.log('A SetImmediate Run');
    }
);
