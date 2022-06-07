import monkeySvg from '../img/monkey.svg'
import monkeySound from '../img/msound.mp3'

export default function MonkeySound() {
    function playSound() {
        var audio = document.getElementsByTagName("audio")[0];
        audio.play();
    }

    return (
        <>
            <button className="btnPageMonkey" type="button" onMouseEnter={playSound}>
                <img width="48px" height="48px" src={monkeySvg} alt="Icone de macaco" />
            </button>

            <audio>
                <source src={monkeySound}></source>
                Your browser isn't invited for super fun audio time.
            </audio>
        </>
    )
}