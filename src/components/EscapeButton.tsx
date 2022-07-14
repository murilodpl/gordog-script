export default function EscapeButton() {
    // https://jsfiddle.net/trusktr/CmAuZ/

    var caller = document.querySelector("#escapeBtn");

    function foo() {
        var randX = Math.floor(Math.random() * (window.innerWidth - 100));
        var randY = Math.floor(Math.random() * (window.innerHeight - 100));
        console.log([randX, randY]);
        caller.stop().animate({ "left": randX + "px", "top": randY + "px" });
    }

    window.onload = function() {
        caller.on('mouseenter', foo);
        caller.on('click', function () {
            alert('clicked!');
        });
    };

    return (
        <button id="escapeBtn">Me clica</button>
    )
}