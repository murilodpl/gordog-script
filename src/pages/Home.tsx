import Convert from "../components/Convert";
import EscapeButton from '../components/EscapeButton';

export default function Home() {
    return (
        <div className="w-full">
            <Convert />
            <EscapeButton />
        </div>
    )
}