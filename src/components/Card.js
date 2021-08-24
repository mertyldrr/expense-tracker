import React from 'react';
import styles from './Card.module.css';

// React Composition is a development pattern based on React's original component model where we build components from other components using explicit defined props or the implicit children prop.

// In terms of refactoring, React composition is a pattern that can be used to break a complex component down to smaller components, and then composing those smaller components to structure and complete your application.

const Card = ({ className, children }) => {
  // const classes = 'card ' + className
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}

export default Card;