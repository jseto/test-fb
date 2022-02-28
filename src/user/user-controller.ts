import { Store, Observable, Callback } from "entropic-bond";
import { User } from "./user";

type UserChangeEvent = {
	user: User
}

export class UserController {
     
	private _user: User 
	private _onChange: Observable<UserChangeEvent>


	constructor() {
		this._user = new User()
		this._onChange = new Observable()
	} 

	newUser() {
		this._user = new User()
		this._onChange.notify({ user: this.user })
	}

	onChange( cb: Callback<UserChangeEvent> ) {
		return this._onChange.subscribe( cb )
	} 

	 get user() {
		 return this._user
	 }

	 getAllUsers() {
			return this.model.find().get()
	 }

	 save() {
     this.model.save(this.user)
		 this._onChange.notify({ user: this.user })
   }

	 get model() {
		 return Store.getModel<User>( 'User' )
	 }
}