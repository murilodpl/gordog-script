import { useNavigate } from 'react-router-dom';
export default function EscapeButton() {
    // https://jsfiddle.net/trusktr/CmAuZ/

    const navigate = useNavigate();
    var caller = document.getElementById("escapeBtn");

    function foo(e: any) {
        var randX = Math.floor(Math.random() * (window.innerWidth - 100));
        var randY = Math.floor(Math.random() * (window.innerHeight - 100));
        // console.log([randX, randY]);
        e.target.style.top = randY + "px";
        e.target.style.left = randX + "px";
    }

    return (
        <button id="escapeBtn" onClick={() => navigate('/parabens')} onMouseEnter={foo}>Me clica</button>
    )
}
