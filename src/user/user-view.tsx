import React, { Component } from 'react'
import { User } from './user'
import { UserController } from './user-controller'

interface UserViewProps {}
interface UserViewState {
	userList: User[] 
}

export class UserView extends Component<UserViewProps, UserViewState> {
	// instanciar un user controller como en ShopView

	private userController = new UserController()

	constructor (props: UserViewProps) {
		super(props)
		this.state = {
			userList: []
		}
	}

	async componentDidMount() {
		// registrarse al evento onChange de User
		// como? ver metodo componentDidMount de ShopViewer
		this.userController.onChange( async () => {
			this.userController.user.onChange( () => {
				this.setState({})
			})

			this.setState({
				userList: await this.userController.getAllUsers()
			})
		})

		this.userController.user.onChange( () => {
			this.setState({})
		})

		try {
			this.setState({
				userList: await this.userController.getAllUsers()
			})
		}
		catch( e ) {
			console.log( e )
		}
	}
	
	saveUser() {
		this.userController.save()
		this.userController.newUser()
	}

	render() {
		const { user } = this.userController
		const { userList } = this.state

		return (
			<div className="user-view">
				<div className="user-form">
					<input 
						onChange={ e => user.name = e.target.value }
						value={ user.name || '' }
						placeholder="Enter user name"
					/>
					<button onClick={ ()=> this.saveUser() }>
						Save
					</button>
				</div>
				<div className="users-list">
					{
						userList.map( user =>(
							<div key={ user.id } className="user">
								{ user.name }
							</div>
						))
					}
				</div>
			</div>
		)		
	}
}
