/**
 * Created by ASUA on 2015/9/19.
 */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <form name="addQuestion" className="clearfix">
                <div className="form-group">
                    <label htmlFor="qtitle">Question</label>
                    <input type="text" className="form-control" id="qtitle" placeholder="Question Title" />
                </div>
                <textarea className="form-control" rows="3" placeholder="discription"></textarea>
                <button className="btn btn-success pull-right">Confirm</button>
                <button className="btn btn-default pull-right">Cancel</button>
            </form>
        );
    }
});
