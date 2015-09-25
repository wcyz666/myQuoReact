/**
 * Created by ASUA on 2015/9/18.
 */
var React = require("react");
var QuestionAddButton = require('../components/QuestionAddButton.js');
var QuestionAddForm = require('../components/QuestionAddForm.js');
var QuestionList = require('../components/QuestionList.js');


module.exports = React.createClass({

    getInitialState: function () {
        var questions = [
            {
                key: 0,
                title: "C++: Is there a simple way of 'mapping' the hex colour `0xff2a2620` to a more readable string 'lovelyBrown'?",
                discription: "I'm using the Juce Framework that has a setColour method like so: g.setColour (Colour (0xff2a2620)).I instead would like to write something like more readable like: g.setColour (Colour (lovelyBrown));, 'mapping' 0xff2a2620 to 'lovelyBrown'.",
                voteCount: 22,
                tags: [
                    "C++",
                    "hex"
                ]
            },
            {
                key: 1,
                title: "Build Composable Components",
                discription: "React is all about building reusable components. In fact, with React the only thing you do is build components." +
                " Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.",
                voteCount: 122,
                tags: [
                ]
            }
        ];

        return {
            ifShow: true,
            questions: questions
        };
    },
    toggleForm: function () {
        this.setState(function(previousState){
            return {
                ifShow: !previousState.ifShow
            }
        });
    },
    hideForm: function(event) {
        event.preventDefault();
        this.setState({
            ifShow: false
        });
    },
    updateQuestionList: function(newItem) {
        var prev = this.state.questions;
        newItem.key = prev[prev.length - 1].key + 1;
        prev.push(newItem);

        this.setState({
            questions: this.sortQuestion(this.state.questions)
        });
    },
    sortQuestion: function (questions) {
        questions.sort(function(a, b){
            return b.voteCount - a.voteCount
        });
        return questions;
    },
    updateVote: function(key, isAdd) {
        this.state.questions.forEach(function (element, index){
            if (element.key == key) {
                element.voteCount += isAdd ? 1: -1;
            }
        });
        this.setState({
            questions: this.sortQuestion(this.state.questions)
        });
    },
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React QA</h1>
                        <QuestionAddButton toggleForm={this.toggleForm} />
                    </div>
                </div>
                <div className="main container">
                        <QuestionAddForm ifShow={this.state.ifShow} updateQuestionList={this.updateQuestionList} hideForm={this.hideForm} ref="questionForm"/>
                        <QuestionList updateVote={this.updateVote} questions={this.state.questions}/>
                    </div>
            </div>
        );
    }
});