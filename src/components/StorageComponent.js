var React = require('react');
var LocalStorageMixin = require('react-localstorage');

var Storage = module.exports = React.createClass({
  displayName: 'DefaultComponent',
  // This is all you need to do
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {counter: 0};
  },

  onClick: function() {
    this.setState({counter: this.state.counter + 1});
  },

  render: function() {
    return (
        <div className='three'>
          <h4>Counter Page</h4>
          <h5 onClick={this.onClick}>Counter using local storage: {this.state.counter}</h5>
        </div>
    );
  }
});

module.exports = Storage;