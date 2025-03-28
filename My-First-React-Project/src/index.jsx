import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById('root'))

function Page() {
    return(
        <ol>Hello There</ol>
    )
}

root.render(
    <Page/>
)