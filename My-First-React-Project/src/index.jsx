import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

function Page() {
    return(
        <ol>
            <li>I am learning react</li>
        </ol>
    )
}
root.render(
    <page/>
)