/**
 * Created by ASUA on 2015/9/19.
 */
var React = require('react');
var QuestionComment = require("../components/QuestionComment.js");
var QuestionTagList = require("./QuestionTagList.js");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            isCommentDisplayed: false,
            comments: [
            ]
        };
    },
    toggleComment: function(event) {
        event.preventDefault();
        this.setState({
            isCommentDisplayed: !this.state.isCommentDisplayed
        });
    },
    updateVote: function(event) {
        var target = event.nativeEvent.target;
        if (target.id == "upVote" || target.parentElement.id == "upVote")
            this.props.updateVote(this.props.myKey, true);
        else if (target.id == "downVote" || target.parentElement.id == "downVote")
            this.props.updateVote(this.props.myKey, false);
    },
    onCommitSubmit: function (newComment) {
        this.state.comments.push(newComment);
        this.setState({
            comments: this.state.comments
        });
    },
    render: function() {
        return (
            <div className="media" key={this.props.myKey}>
                <div className="media-left" onClick={this.updateVote}>
                    <button id="upVote" className="btn btn-default" >
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span  className="vote-count">{this.props.questionInfo.voteCount}</span>
                    </button>
                    <button id="downVote" className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">
                        <span>{this.props.questionInfo.title}</span>
                        <QuestionTagList tags={this.props.questionInfo.tags} isTagCloseable={false}/>
                    </h4>
                    <p>{this.props.questionInfo.discription}</p>
                        <a className="mark" href="#" onClick={this.toggleComment}>comments</a>
                        <QuestionComment comments={this.state.comments} isCommentDisplayed={this.state.isCommentDisplayed} onCommitSubmit={this.onCommitSubmit}/>
                </div>
            </div>
        );
    }
});
