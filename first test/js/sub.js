const ClassName = "-visible";
const header_ul = ""
const TimeOut = 1500;
const Delay = 100;
const $target1 = $(".title");

$(window).on('load', function() {
    $target1.addClass(ClassName);
});
console.log($target1);