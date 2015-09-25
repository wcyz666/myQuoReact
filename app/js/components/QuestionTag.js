/**
 * Created by ASUA on 2015/9/24.
 */
var React = require('react');
var QuestionTagList = require("./QuestionTagList.js");

module.exports = React.createClass({
    onTagSubmit: function (event) {
        event.preventDefault();
        var tag = this.refs.input.getDOMNode().value;
        this.refs.input.getDOMNode().value = "";
        this.props.onNewTag(tag);
    },
    componentDidMount: function () {
        $(this.refs.submit.getDOMNode()).height($(this.refs.input.getDOMNode()).height());
    },
    render: function (){
        return (
            <div className="col-xs-12">
                <div className="row col-xs-5 form-inline">
                    <input ref="input" required="required" type="text" className="form-control col-xs-4 pull-left" placeholder="Tag..." />
                    <button ref="submit" type="submit" onClick={this.onTagSubmit} className="btn btn-primary col-xs-3"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                </div>
                <div className="row col-xs-7">
                    <QuestionTagList onRemoveTag={this.props.onRemoveTag} tags={this.props.tags} isTagCloseable={this.props.isTagCloseable}/>
                </div>
            </div>
        );
    }
});