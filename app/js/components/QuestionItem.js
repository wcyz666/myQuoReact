/**
 * Created by ASUA on 2015/9/19.
 */
var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="media">
                <div className="media-left">
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.props.questionInfo.voteCount}</span>
                    </button>
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.questionInfo.title}</h4>
                    <p>{this.props.questionInfo.discription}</p>
                </div>
            </div>
        );
    }
});
