import Menu from "./Menu/Menu"
import PlusIcon from "../../Icons/PlusIcon"

const Header = () => {
  return (
      <div className="navbar p-0">
        <div className="navbar-start">
          <a className="btn btn-ghost pl-0 text-xl">LLA</a>
        </div>
        <div className="navbar-end">
          <Menu />
          <a className="btn">
            <PlusIcon />
          </a>
        </div>
      </div>
  )
}

export default Header