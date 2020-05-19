function scopeTest(){
    var is = true;
    if(is){
        var is = false;
    }
    for(var i=0; i<=5; i++){
        var inFor = i;
    }
    console.log(inFor); // 출력되는 값은?
    console.log(is);
}