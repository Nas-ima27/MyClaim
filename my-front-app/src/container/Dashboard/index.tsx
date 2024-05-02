import logo from "../home/img/logo.png"

const Dashboard = () => {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" width="20%" height="20%" className="d-inline-block align-text-top"/>  
      </a>
    </div>
  </nav>
  )
}

export default Dashboard;