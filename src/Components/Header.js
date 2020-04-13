import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            //this value in state is so we can toggle between viewing the dropdown menu and
            //not viewing it. It is set to false by default. This pairs with the conditional 
            //rendering that we have in our JSX.
            dropdownView: false
        }
    }

    //This is the function that will invoke on the click of the dropdown button. It will allow
    //for the toggling of our dropdownView state value so our conditional rendering below will
    //work properly.
    handleToggle = () => {
        this.setState({dropdownView: !this.state.dropdownView})
    }

    render(){
        return (
            <div className='header'>
                <img src='https://s3.amazonaws.com/media-p.slid.es/uploads/75809/images/1730601/DevMtnLogo.png' alt='devmountain' className='header-logo'/>
                <div className='dropdown-button' onClick={this.handleToggle}>
                    Menu
                </div>
                {/* When working with two menu's (one for mobile and one for desktop), you need to
                create the JSX for both (done below). */}
                {this.state.dropdownView
                ? (<nav className='dropdown-menu'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                   </nav>)
                : null}
                <nav className='desktop-links'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                </nav>
            </div>
        )
    }
}

export default Header;