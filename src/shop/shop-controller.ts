import { Store } from "entropic-bond"
import { Product } from "../product/product"

// type OnBuyCallback = ( product: Product ) => void

export class ShopController {
	// private _onBuy: Observable

	// constructor() {
	// 	this._onBuy = new Observable()
	// }

	// onBuy( callback: OnBuyCallback ) {
	// 	this._onBuy.connect( callback )
	// }

	// disconnectOnBuy( callback: OnBuyCallback ) {
	// 	this._onBuy.disconnect( callback )
	// }

	buyProduct( product: Product ) {
		this.descontarStock( product )
		// this._onBuy.notify( product )
	}

	descontarStock( product: Product ) {
		product.stock = product.stock - 1
	}

	getProducts() {
		return this.model.find().get()
	}

	get model() {
		return Store.getModel<Product>( 'Product' )
	}


}

// const shop = new ShopController()

// shop.onBuy( e => {
// 	addToShoppingChart( e )
// })