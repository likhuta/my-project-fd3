import React, {Component} from 'react'
import {connect} from 'react-redux';
import LoginBar from '../../components/LoginBar'
import FormAuthLayer from '../../components/FormAuthLayer'
import {isLogin} from '../../store/action/stateApp'

class Layout extends Component {
  state = {
    menu: false,
    newUser:false,
    loginStatus:false,
  }

  toggleFormHandler=()=>{
    this.setState({
      menu: !this.state.menu
    })
  }

  formCloseHandler = () => {
    this.setState({
      menu: false
    })
  }
  toggleRegistrUser=()=>{
    this.setState({
      newUser:!this.state.newUser,
    })
  }
  toggleLoginStatus=()=>{
    this.setState({
      loginStatus:!this.state.loginStatus,
    }, ()=>this.props.isLogin(this.state.loginStatus) )
    
  }
  render() {
   console.log('Layout---', this.props)

    return (
      <React.Fragment>
      <FormAuthLayer  onClose={this.formCloseHandler} isOpen={this.state.menu} 
        newUser={this.state.newUser} onToggleRegistrUser={this.toggleRegistrUser}
        onToggleLoginStatus={this.toggleLoginStatus}  loginStatus={this.state.loginStatus} />

      <LoginBar onToggle={this.toggleFormHandler} isOpen={this.state.menu}
         loginStatus={this.state.loginStatus} onToggleLoginStatus={this.toggleLoginStatus} />
        <main>
          { this.props.children }
        </main>


      </React.Fragment>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    stateApp:state.stateApp
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    isLogin:(status)=>dispatch(isLogin(status)) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Layout)