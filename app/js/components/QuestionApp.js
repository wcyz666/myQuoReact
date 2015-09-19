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
                key: 1,
                title: "React",
                discription: "React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.",
                voteCount: 22
            },
            {
                key: 2,
                title: "Build Composable Components",
                discription: "React is all about building reusable components. In fact, with React the only thing you do is build components." +
                " Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.",
                voteCount: 12
            }
        ];

        return {
            questions: questions
        };
    },
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React QA</h1>
                        <QuestionAddButton />
                    </div>
                </div>
                <div className="main container">
                        <QuestionAddForm />
                        <QuestionList questions={this.state.questions}/>
                    </div>
            </div>
        );
    }
});