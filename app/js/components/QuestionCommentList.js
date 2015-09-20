/**
 * Created by ASUA on 2015/9/19.
 */
var React = require('react');
var QuestionCommentItem = require('./QuestionCommentItem.js');

module.exports = React.createClass({
    ulStyle: {
        "margin-top": 10,
        "margin-bottom": 0
    },
    render: function () {
        return (
            <ul style={this.ulStyle} className="list-group">
                <QuestionCommentItem />
            </ul>
        );
    }
});