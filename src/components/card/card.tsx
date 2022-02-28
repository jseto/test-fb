import React, { Component } from "react";
import { Product } from "../../product/product";
import { ShopController } from "../../shop/shop-controller";


interface CardProps {
  product: Product
  controller: ShopController
}

export class Card extends React.Component <CardProps> {
  componentDidMount(): void {
    const { product } = this.props

    product.onChange( (e) => {
      console.log( e )
      this.setState({}) 
    })
  }
  
  public render() {
    const { product, controller } = this.props
    const { name, description, price, stock, img } = product

    return (
      <div className="wrapper">
        <div className="card">
          <div className="card__body">
              <label className="card__image">
                {img}
              </label>
              <h3 className="card__title">
                { name }
              </h3>
              <p className="card__descrition">
                { description }
              </p>
              <p>{ price }</p>
              <p>{ stock }</p>
          </div>
          <button className="card__btn" 
            onClick={ ()=> controller.buyProduct( product )}
          >
            Comprar
          </button>
        </div>
      </div>
    )
  }
}

