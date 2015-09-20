/**
 * Created by ASUA on 2015/9/19.
 */

var React = require('react');

module.exports = React.createClass({
    newQuestionItem: function(event) {
        event.preventDefault();
        var title = this.refs.title.getDOMNode().value;
        var disc = this.refs.disc.getDOMNode().value;
        console.log(disc);
        this.refs.title.getDOMNode().value = "";
        this.refs.disc.getDOMNode().value = "";

        this.props.updateQuestionList({
            title: title,
            voteCount: 0,
            discription: disc
        })
    },
    render: function() {
        var style = {
            display: this.props.ifShow ? "block":"none"
        };

        return (
            <form style={style} name="addQuestion" className="clearfix">
                <div className="form-group">
                    <label htmlFor="qtitle">Question</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="Question Title" />
                </div>
                <textarea ref="disc" className="form-control" rows="3" placeholder="discription"></textarea>
                <input  type="submit" className="btn btn-success pull-right" onClick={this.newQuestionItem} value="Confirm" />
                <input  type="submit" className="btn btn-default pull-right"  onClick={this.props.hideForm} value="Cancel" />

            </form>
        );
    }
});
