/**
 * Created by ASUA on 2015/9/19.
 */
var React = require('react');
var QuestionCommentItem = require('./QuestionCommentItem.js');

module.exports = React.createClass({
    ulStyle: {
        "marginTop": 10,
        "marginBottom": 0
    },
    render: function () {
        var comments = this.props.comments.map(function(element, index){
            return (
                <QuestionCommentItem key={index}>{element}</QuestionCommentItem>
            );
        });
        return (
            <ul style={this.ulStyle} className="list-group">
                {comments}
            </ul>
        );
    }
});