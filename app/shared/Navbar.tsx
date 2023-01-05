import Link from "next/link"
import styles from "../../styles/Navbar.module.css"

const routes = [
    {id: 1, name: "tea", path: "/tea"},
    {id: 2, name: "deseart", path: "/deseart"},
    {id: 3, name: "coffee", path: "/coffee"}
]

function Navbar() {
  return (
    <>
    {routes.map((el) => 
    <Link className={styles.navlinks} key={el.id} href={el.path} >{el.name}</Link>)}
    </>
  )
}

export default Navbar