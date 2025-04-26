function ak(){
    console.log("object")
}

var add=function(a,ck){
    console.log(a);
    ck();
}

add(1,ak); 