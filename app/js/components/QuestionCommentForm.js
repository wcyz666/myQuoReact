/**
 * Created by ASUA on 2015/9/20.
 */
var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <form method="POST">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Comment..." />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Comment</button>
                        </span>
                 </div>
            </form>
        );
    }
});