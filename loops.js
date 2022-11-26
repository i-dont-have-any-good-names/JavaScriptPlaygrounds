var math = 1;
var k = true;

if(k = true) {
    console.log("var k =", k);
};

console.log("staring loop");
while(k == true) {
    console.log(math++);
    if(math > 100) {
        console.log("loop ended")
        var k = false;
        break;
    };
};

if(k == false) {
    console.log("var k =", k);
} else {
    console.log("var k =", k);
};

console.warn("finished");

function hello(loga, qfa){
    console.log(loga)
    console.log(qfa)
}

hello("a", true)