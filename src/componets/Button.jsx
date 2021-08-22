import React from 'react';
import classNames from 'classnames'

{/* <a href="/cart.html" className="button button--cart"/> */}



// class Button extends React.Component {
//     render() {
//         return (
//             //   <button className="button button--cart">{this.props.text||this.props.children }</button>          
//             //   <button className={!!this.props.outline ? `button button--outline` : null }>{this.props.text||this.props.children }</button>          
//             //   <button className={`button ${!!this.props.outline ? `button button--outline` : null}` }>{this.props.text||this.props.children }</button>    
//             // <button className={classNames('button', { 'button--outline': this.props.outline})}> { this.props.children } </button >
//         )
//     }
// }

// function Button (props) {
//     return (
//             <button className={classNames('button', { 'button--outline': props.outline})}> { props.children } </button >
//         )
// }

function Button({ outline, children,className,...props }) {
    return (

        <button className={classNames('button', className, { 'button--outline': outline })}> {children} </button >
        
    )
}




export default Button