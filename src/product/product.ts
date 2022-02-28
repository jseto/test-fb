import { EntropicComponent, persistent, registerPersistentClass } from 'entropic-bond'

// type ProductType = 'icon' | 'antique'

@registerPersistentClass( 'Product' )
export class Product extends EntropicComponent {
	constructor( product?: any ) {
		super()
		if (product) {
			this.name = product.name
			this.description = product.description
			this.img = product.img
			this.price = product.price
			this.stock = product.stock
		}
	}

	set name( value: string ) {
		this._name = value
	}

	get name() {
		return this._name
	}

	set description( value: string ) {
		this.changeProp( 'description', value )
	}

	get description() {
		return this._description
	}

	set img( value: string ) {
		this.changeProp( 'img', value )
	}

	get img() {
		return this._img
	}

	set price( value: number ) {
		this.changeProp( 'price', value )
	}

	get price() {
		return this._price
	}

	set stock( value: number ) {
		this.changeProp( 'stock', value )
	}

	get stock() {
		return this._stock
	}

	@persistent private _name: string
	@persistent private _description: string
	@persistent private _img: string
	@persistent private _price: number
	@persistent private _stock: number
	// productType: ProductType
}