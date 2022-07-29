import monkeyFace01 from '../assets/img/monkeyFaces/monkey01.svg'
import monkeyFace02 from '../assets/img/monkeyFaces/monkey02.svg'
import monkeyFace03 from '../assets/img/monkeyFaces/monkey03.svg'
import monkeyFace04 from '../assets/img/monkeyFaces/monkey04.svg'
import monkeyFace05 from '../assets/img/monkeyFaces/monkey05.svg'
import monkeyFace06 from '../assets/img/monkeyFaces/monkey06.svg'
import monkeyFace07 from '../assets/img/monkeyFaces/monkey07.svg'
import monkeyFace08 from '../assets/img/monkeyFaces/monkey08.svg'
import monkeyFace09 from '../assets/img/monkeyFaces/monkey09.svg'
import monkeySound from '../assets/img/msound.mp3'

export default function MonkeySound() {
    var arrImg = [monkeyFace01, monkeyFace02, monkeyFace03, monkeyFace04, monkeyFace05, monkeyFace06, monkeyFace07, monkeyFace08, monkeyFace09]

    function playSound() {
        var audio = document.getElementsByTagName("audio")[0];
        audio.play();
    }

    return (
        <>
            <button type="button" onClick={playSound}>
                <img width="48px" height="48px" src={arrImg[Math.floor(Math.random() * 9)]} alt="Icone de macaco" />
            </button>

            <audio>
                <source src={monkeySound}></source>
                Your browser isn't invited for super fun audio time.
            </audio>
        </>
    )
}