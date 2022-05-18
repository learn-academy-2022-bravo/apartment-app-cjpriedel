import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
        <h1>React in Rails with Devise</h1>
        <Nav>
          {!logged_in &&
            <NavItem>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <NavLink to="/apartmentindex" className="nav-link">Available Apartments</NavLink>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <NavLink to={sign_out_route} className="nav-link">Sign Out</NavLink>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <NavLink to={sign_in_route} className="nav-link">Sign In</NavLink>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <NavLink to={new_user_route} className="nav-link">Sign Up</NavLink>
            </NavItem>
          }

        </Nav>
      </>
    )
  }
}
export default Header