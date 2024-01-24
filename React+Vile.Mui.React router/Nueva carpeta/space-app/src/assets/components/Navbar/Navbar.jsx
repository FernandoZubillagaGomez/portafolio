import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = ({links}) => {
  
return (
    <div className="nav-container">
        <div className="navbar">
            {
                links.map(link => (
                    <Button key={link.id} {...link} />
                ))
            }
        </div>
    </div>
)
}
// const linksBtn = props.lonks.map((link, index)=> {
    
// })

//     return (
//     <div className="nav-container">
// <div className= "navbar">

// {
//     props.links.map((link => (
//         <Button txt= { ... link} />
//     ))
// }

// </div>
// </div>
//   )
// }
export default Navbar;