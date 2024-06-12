// que es lo que quiero renderizar y como segundo tengo que poner a donde lo quiero renderizar
// en este caso es un h1 que dice "Hello, everyone" y lo quiero renderizar
// en el elemento con id "root" que se encuentra en el archivo index.html
/* ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById("root"))
ReactDOM.render(
<ul><li>Item 1</li><li>Item 2</li></ul>,
 document.getElementById("root"))

 */
/*  function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
function MainContent(){
    return (
        <h1>Hello world!</h1>)
}

ReactDOM.render(
    <div>
            <Navbar />
            <MainContent/>
    </div>,

    document.getElementById("root")
)
 */

// challenge 3
// Imperative ways to program
/* - Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root */
/* const root = document.getElementById("root")
const h1 = document.createElement("h1")
h1.textContent = "Hello World!"
h1.className = "header"
root.appendChild(h1)
 */

//with React
/* ReactDOM.render(<h1 className="header">Hello world!</h1>, document.getElementById("root"))
 */

//JSX
/* ReactDOM.render(<h1>JSX</h1>, document.getElementById("root"))


Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now

 */
/* const navbar = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root")) */
