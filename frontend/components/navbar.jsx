import React from 'react'
import { Link } from 'react-router'
import ApiUtil from '../util/apiUtil'

export default class Navbar extends React.Component {

  constructor(props, context){
    super(props, context)
    context.router
  }

  _signOut() {
    ApiUtil.logOutUser()
  }

  render() {
    return (
      <div className='navbar'>
        <ul className='navbar-options'>
          <p className='navbar-logo'>StyleList</p>
          <li className='navbar-item'><Link to={'/articles'} activeStyle={{ weight: 'bold' }}>View Wardrobe</Link></li>
          <li className='navbar-item'><Link to={'/newarticle'}>Add Article</Link></li>
          <li className='navbar-item'><Link to={'/outfits'} activeStyle={{ color: 'yellow' }}>View Outfits</Link></li>
          <li className='navbar-item signout' onClick={this._signOut}>Sign Out</li>
        </ul>
      </div>
    )
  }
}
Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
