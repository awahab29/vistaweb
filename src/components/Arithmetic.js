/**
 * Created by VD on 1/21/2016.
 */
import React, {Component, PropTypes} from 'react';
import lazyCache from 'react-lazy-cache';


export default class Arithmetic extends Component {


  componentWillMount() {

    // create cache
    this.cache = lazyCache(this, {

      sum: {
        params: ['a', 'b'],
        fn: (a,b) => a + b
      },
      difference: {
        params: ['a', 'b'],
        fn: (a, b) => a - b
      },
      product: {
        params: ['a', 'b'],
        fn: (a, b) => a * b
      },
      quotient: {
        params: ['a', 'b'],
        fn: (a, b) => a / b
      },
      sumSquared: {
        params: ['sum'],
        fn: (sum) => sum * sum
      }
    });
  }

  componentWillReceiveProps(nextProps){console.log(this.cache);
    this.cache.componentWillReceiveProps(nextProps);

  }


  render() {
    const {assign,sum, difference, product, quotient, sumSquared} = this.cache;
    console.log(this.cache);
    return (<div>
      <div>Sum: {sum}</div>
      <div>Difference: {difference}</div>
      <div>Product: {product}</div>
      <div>Quotient: {quotient}</div>
      <div>Sum Squared: {sumSquared}</div>

    </div>);
  }
}
module.exports = Arithmetic;