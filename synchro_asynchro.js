function add(){
    var a = 10,b=40,c,d=1;
    c = a+b;
    console.log(c)
    console.log("a - value is",a);
    setTimeout(function(){
        console.log("This is timeout function");
        d = 3;
        console.log("total value is ",c+d);
    },5000);
    console.log("b - value is",b);
    console.log("c - value is",c);
    console.log("d - value is" ,d)
}
add();