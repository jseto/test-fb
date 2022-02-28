import React, { Component } from "react";
import '../../css/styles.css'
import { UserView } from "../../user/user-view";

interface NavBarProps {
    onMenuClicked: ( menuId: number ) => void
}

export class NavBar extends Component<NavBarProps> {
    menuCliked( menuId ) {
        this.props.onMenuClicked( menuId )
    }

    render() {
        return (
           <div className="centreText">
                <button onClick={ ()=>this.menuCliked( 0 )}>
                    Iconografía
                </button>

                <button onClick={ ()=>this.menuCliked( 1 )}>
                    Tienda
                </button>

                <button onClick={ ()=>this.menuCliked( 2 )}>
                    Contacto
                </button>

                <button onClick={ ()=>this.menuCliked( 3 )}>
                    Glosario
                </button>

                <button onClick={ ()=>this.menuCliked( 4 )}>
                    Carrito
                </button>

                <button onClick={ ()=>this.menuCliked( 5 )}>
                    Users
                </button>
            </div> 
        )
    }
}