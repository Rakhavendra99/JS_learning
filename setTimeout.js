var timeout;
function action(){
    timeout = setTimeout(print,3000);
}
function print(){
    console.log("Welcome");
}
action();
