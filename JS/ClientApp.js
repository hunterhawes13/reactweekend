var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
      div(null,
      MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
      React.createElement(MyTitle, {title: 'Use Props everywhere!', color: 'mediumaquamarine'}),
      ce(MyTitle, {title: 'Props r da best', color: 'peru'})
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
