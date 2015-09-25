/**
 * Created by ASUA on 2015/9/20.
 */
var React = require('react');
var QuestionCommentList = require("../components/QuestionCommentList.js");
var QuestionCommentForm = require('../components/QuestionCommentForm.js');

module.exports = React.createClass({
    ulStyle: {
        "margin-top": 10,
        "margin-bottom": 0
    },
    shouldComponentUpdate: function(){
        console.log("Update comment");
        return true;
    },
    render: function () {
        var style = {
            display: this.props.isCommentDisplayed ? "block":"none"
        };
        return (
            <div style={style}>
                <QuestionCommentList comments={this.props.comments}/>
                <QuestionCommentForm onCommitSubmit={this.props.onCommitSubmit}/>
            </div>
        );
    }
});

