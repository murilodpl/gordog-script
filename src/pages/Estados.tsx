import ConvertEstados from '../components/ConvertEstados';
import EscapeButton from '../components/EscapeButton';

export default function Home() {
    return (
        <div className="w-full">
            <EscapeButton />
            <ConvertEstados />
        </div>
    )
}