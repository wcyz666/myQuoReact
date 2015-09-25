/**
 * Created by ASUA on 2015/9/19.
 */

var React = require('react');
var QuestionTag = require('./QuestionTag.js');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            tags: []
        }
    },
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
            discription: disc,
            tags: this.state.tags
        })
        this.setState({
            tags: []
        })
    },
    onNewTag: function (tag) {
        this.setState(function (prevState, nextState) {
            prevState.tags.push(tag);
            return prevState;
        }.bind(this));
    },
    onRemoveTag: function(tag) {
        this.setState(function (prevState, nextState) {
            return {
                tags: prevState.tags.filter(function (element) {
                    console.log(element);
                    console.log(tag);
                    if (element === tag) {
                        return false;
                    }
                    return true;
                })
            };
        }.bind(this));
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
                <br />
                <QuestionTag onRemoveTag={this.onRemoveTag} onNewTag={this.onNewTag} tags={this.state.tags} isTagCloseable={true}/>
                <div className="clearfix"></div>
                <input type="submit" className="btn btn-success pull-right" onClick={this.newQuestionItem} value="Confirm" />
                <input type="submit" className="btn btn-default pull-right"  onClick={this.props.hideForm} value="Cancel" />
            </form>
        );
    }
});
