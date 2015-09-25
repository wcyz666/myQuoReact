/**
 * Created by ASUA on 2015/9/20.
 */
var React = require('react');

module.exports = React.createClass({
    onCommitSubmit: function (event) {
        event.preventDefault();
        var comment = this.refs.comment.getDOMNode().value;
        this.refs.comment.getDOMNode().value = "";

        this.props.onCommitSubmit(comment);
    },
    render: function () {
        return (
            <form onSubmit={this.onCommitSubmit} method="POST">
                <div className="input-group">
                    <input ref="comment" type="text" className="form-control" placeholder="Comment..." />
                        <span className="input-group-btn">
                            <input value="submit" className="btn btn-default" type="submit" />
                        </span>
                 </div>
            </form>
        );
    }
});