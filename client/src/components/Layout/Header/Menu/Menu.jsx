import MenuIcon from "../../../Icons/MenuIcon"

const Menu = () => {
  return (
    <div className="dropdown mr-2">
      <label tabIndex={0} className="px-5 btn">
        <MenuIcon />
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] right-0 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  )
}

export default Menu