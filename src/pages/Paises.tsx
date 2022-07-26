import ConvertPaises from '../components/ConvertPaises';
import EscapeButton from '../components/EscapeButton';

export default function Home() {
    return (
        <div className="w-full">
            <EscapeButton />
            <ConvertPaises />
        </div>
    )
}