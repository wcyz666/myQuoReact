/**
 * Created by ASUA on 2015/9/24.
 */
var React = require('react');

module.exports = React.createClass({
    style: {
        fontSize: 22,
        marginTop: 3,
        marginLeft: 5,
        display: "inline-block",
        position:"relative"
    },
    tagStyle: {
        lineHeight: "24px"
    },
    closeStyle: {
        fontSize: 12,
        position:"absolute",
        top: -4,
        right: -2,
        color: "black",
        backgroundColor: "white"
    },
    onRemoveTag: function(event) {
        event.preventDefault();
        this.props.onRemoveTag(event.nativeEvent.target.previousSibling.innerHTML.trim());
    },
    render: function (){
        var isTagCloseable = {
                visibility: this.props.isTagCloseable ? "visibility": "hidden"
            },
            tagList = this.props.tags.map(function(tag, index) {
            tag += "   ";
            return (
                <div  key={index} style={this.style}>
                    <span style={this.tagStyle} className="label label-default">
                        {tag}
                    </span>
                    <span style={Object.assign(this.closeStyle, isTagCloseable)} className="small glyphicon glyphicon-remove" onClick={this.onRemoveTag} aria-hidden="true">
                    </span>
                </div>
            );
        }.bind(this));
        return (
            <div style={this.style}>
                {tagList}
            </div>
        );
    }
});