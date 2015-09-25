/**
 * Created by ASUA on 2015/9/19.
 */
var React = require('react');
var QuestionItem = require('../components/QuestionItem.js');

module.exports = React.createClass({

    render: function() {
        console.log(this.props.questions);
        var self = this;
        if (!Array.isArray(this.props.questions)) throw new Error("Must provide an array");
        var questionItems = this.props.questions.map(function(question) {
            return (
                <QuestionItem key={question.key} myKey={question.key} updateVote={self.props.updateVote} questionInfo={question} />
            )
        });
        return (
            <div id="questions" className="">
                {questionItems}
            </div>
        );
    }
});
