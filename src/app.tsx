import React, { Component } from 'react'
import { ContactUsForm } from './components/contact/contact'
import { HomePage } from './components/home/home-page'
import { NavBar } from './components/nav-bar/nav-bar'
import './css/styles.css'
import { ShopViewer } from './shop/shop-viewer'
import { UserView } from './user/user-view'

interface AppState {
	activeComponent: JSX.Element
}

interface AppProps {}



const components = [
	<HomePage />,
	<ShopViewer/>,
	<ContactUsForm />,
	<div>
			
	</div>,
	<div></div>,
	<UserView/>
]

export class App extends Component<AppProps, AppState> {
	constructor( props ) {
		super( props )
		this.state = {
			activeComponent: <div></div>
		}
	}
	
	menuHasBeenClicked( menuId ) {

		this.setState({
			activeComponent: components[ menuId ]
		})
	}

 	render() {
		const { activeComponent } = this.state 

		return (
			<div className="app">
				<NavBar onMenuClicked={ (menuId) => this.menuHasBeenClicked( menuId ) }/>
				{ activeComponent }
				
			</div>
			
		)		
	}
}
