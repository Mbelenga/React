/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root")).render(
        <ul>
            <li>It willmake me be job ready</li>
            <li>Its very good </li>
            <li>It will make me make good ui's</li>
        </ul>
);