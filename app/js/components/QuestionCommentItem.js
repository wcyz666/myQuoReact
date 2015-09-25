/**
 * Created by ASUA on 2015/9/20.
 */
var React = require('react');

module.exports = React.createClass({
    shouldComponentUpdate: function(){
        console.log("Update Item");
        return true;
    },
    render: function () {
        return (
            <li className="list-group-item">{this.props.children}</li>
        );
    }
});