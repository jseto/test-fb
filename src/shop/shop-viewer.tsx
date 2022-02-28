import React, { Component } from 'react'
import { Card } from '../components/card/card'
import { Product } from '../product/product'
import { ShopController } from './shop-controller'

interface ShopViewerProps {}
interface ShopViewerState {
	productList: Product[]
}


export class ShopViewer extends Component<ShopViewerProps, ShopViewerState> {
	private shopController = new ShopController()
	
	constructor( props: ShopViewerProps ) {
		super( props )
		this.state = {
			productList: []
		}
	}

	async componentDidMount() {
		this.setState({
			productList: await this.shopController.getProducts()
		})

	}

	render() {
		const { productList } = this.state

		return (
			<div className="">
				{ 
					productList?.map( product => 
						<Card controller={ this.shopController } product={ product } key={ product.id } />
					)
				}
			</div>
		)		
	}
}
