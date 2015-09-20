/**
 * Created by ASUA on 2015/9/19.
 */
var React = require('react');
var QuestionComment = require("../components/QuestionComment.js");


module.exports = React.createClass({
    updateVote: function(event) {
        var target = event.nativeEvent.target;
        if (target.id == "upVote" || target.parentElement.id == "upVote")
            this.props.updateVote(this.props.myKey, true);
        else if (target.id == "downVote" || target.parentElement.id == "downVote")
            this.props.updateVote(this.props.myKey, false);
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
                    <h4 className="media-heading">{this.props.questionInfo.title}</h4>
                    <p>{this.props.questionInfo.discription}</p>
                        <a className="mark" href="#">comments</a>
                        <QuestionComment />
                </div>
            </div>
        );
    }
});
