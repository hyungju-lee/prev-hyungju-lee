var es = [];
for(var i=0; i<10; i++){
    es[i] = function(){
        console.log("ECMAScript is ES" + i);
    };
}
es[6](); // 출력되는 값은?