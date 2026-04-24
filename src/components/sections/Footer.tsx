import { hoverScale } from "../../styles/customStyle";

export default function Footer() {
    return (
        <footer className="bg-coffee-900 text-center text-amber-900 flex flex-col items-center justify-center rounded-lg px-4 py-6">
            <p className={`text-amber-900 max-w-xl mx-auto mb-6 text-sm sm:text-base ${hoverScale}`}>
                &copy; 2026 Coffee Shop. All rights reserved.
            </p>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-10 text-lg lg:text-xl font-medium justify-center items-center">
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