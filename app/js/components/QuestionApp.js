/**
 * Created by ASUA on 2015/9/18.
 */
var React = require("react");
module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React QA</h1>
                        <button id="add-question-btn" className="btn btn-success">Add a question</button>
                    </div>
                </div>
                <div className="main container">
                    <form name="addQuestion" className="clearfix">
                        <div className="form-group">
                            <label htmlFor="qtitle">Question</label>
                            <input type="text" className="form-control" id="qtitle" placeholder="Question Title" />
                            </div>
                            <textarea className="form-control" rows="3" placeholder="discription"></textarea>
                            <button className="btn btn-success pull-right">Confirm</button>
                            <button className="btn btn-default pull-right">Cancel</button>
                        </form>
                        <div id="questions" className="">
                            <div className="media">
                                <div className="media-left">
                                    <button className="btn btn-default">
                                        <span className="glyphicon glyphicon-chevron-up"></span>
                                        <span className="vote-count">22</span>
                                    </button>
                                    <button className="btn btn-default">
                                        <span className="glyphicon glyphicon-chevron-down"></span>
                                    </button>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">React</h4>
                                    <p>React is a JavaScript l library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.</p>

                                    <p>We built React to solve one problem: building large applications with data that changes over time.</p>
                                </div>
                            </div>

                            <div className="media">
                                <div className="media-left">
                                    <button className="btn btn-default">
                                        <span className="glyphicon glyphicon-chevron-up"></span>
                                        <span className="vote-count">12</span>
                                    </button>
                                    <button className="btn btn-default">
                                        <span className="glyphicon glyphicon-chevron-down"></span>
                                    </button>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Build Composable Components</h4>
                                    <p>
                                        React is all about building reusable components. In fact, with React the only thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        );
    }
});