import { EntropicComponent, persistent, registerPersistentClass } from "entropic-bond"

@registerPersistentClass('User')
export class User extends EntropicComponent {

	set name( value: string ) {
		if ( value !== this._name ) {
			this._name = value
			this.notify({ name: value } as any )
		}
	}

	get name() {
		return this._name
	}

	set address( value: string ) {
		// esto cambia la propiedad address y notifica el cambio
		this.changeProp( 'address', value )
	}

	get address() {
		return this._address
	}
 
	@persistent private _name: string
	@persistent private _address: string
}