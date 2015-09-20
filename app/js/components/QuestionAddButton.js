/**
 * Created by ASUA on 2015/9/19.
 */
var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <button onClick={this.props.toggleForm} id="add-question-btn" className="btn btn-success">Add a question</button>
        );
    }
});
