import "../css/launch.css"
import { Link } from 'react-router-dom'

const Launch = () => {
  return (
    <div>
      <nav className="navbar" id="navbar">
        <div className="flex row-between">
          <div className="logo">
            <Link to='/'>sidis</Link>
          </div>
        </div>
      </nav>
      <div className="launch-page mt-5">
        <div className="container">
          <div className="launch-content flex column-start">
            <div className="launch-heading">the sidis site is still under construction</div>
            <div className="launch-emphasis"> Hi there <i className="fas fa-hand-peace"></i><br></br> We are still in the process of developing Sidis. That doesn't mean we don't have anything ready for you. <br></br> Head back to our homepage and look for whatever school resource you need right now;<br></br> <i>I am pretty sure we've got it.</i> </div>
            <Link to='/' className="launch-link">head back <i className="fas fa-external-link-alt icon"></i></Link>
            <span className="launch-note"> <em>PS:</em> Just incase we don't have what you need at the moment, you are allowed to <em>drop a request</em> for the resource to be uploaded. </span>
          </div>
          <div className="launch-icons-container">
            <div className="container">
              <div className="launch-icon-a">
                <i className="fas fa-cog icon"></i>
              </div>
              <div className="launch-icon-b">
                <i className="fas fa-cog icon"></i>
              </div>
              <div className="launch-icon-c">
                <i className="fas fa-cog icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Launch
