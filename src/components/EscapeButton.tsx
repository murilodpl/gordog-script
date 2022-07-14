export default function EscapeButton() {
    // https://jsfiddle.net/trusktr/CmAuZ/

    var caller = document.getElementById("escapeBtn");

    function foo(e: any) {
        var randX = Math.floor(Math.random() * (window.innerWidth - 100));
        var randY = Math.floor(Math.random() * (window.innerHeight - 100));
        console.log([randX, randY]);
        e.stop().animate({ "left": randX + "px", "top": randY + "px" });
    }

    return (
        <button id="escapeBtn" onClick={() => alert('clicked!')} onMouseEnter={foo}>Me clica</button>
    )
}