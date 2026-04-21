import { hoverScale } from "../styles/customStyle";

export default function Footer() {
    return (
        <footer className="bg-coffee-900 text-center text-amber-900 flex flex-col items-center justify-center rounded-lg">
            <p className={`text-amber-900 max-w-xl mx-auto mb-6 ${hoverScale}`}>
                &copy; 2026 Coffee Shop. All rights reserved.
            </p>
            <ul className="flex space-x-10 text-xl font-medium justify-center items-center">
                <li className={`${hoverScale}`}>
                    <a href="#" className="text-amber-900 hover:text-amber-700">Privacy Policy</a>
                </li>
                <li className={`${hoverScale}`}>
                    <a href="#" className="text-amber-900 hover:text-amber-700">Terms of Service</a>
                </li>
            </ul>
        </footer>
    );
}