
const SidebarMenu = ({toggleMenu}) => {

  return (
    <div className="sidebar-container" onClick={toggleMenu}>
        <div className="sidebar-header"></div>
    <div className="sidebar-body">
      Sidebar
    </div>
    </div>
  )
}

export default SidebarMenu