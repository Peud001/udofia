import Link from "next/link"

const NotFound = () => {
    return(
        <div>
            <h1>Not Found</h1>
            <p>The page you are looking for does not exist</p>
            <p>Return to <Link href='/'>Home</Link></p>
        </div>
    )
}
export default NotFound