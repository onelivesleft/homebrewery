var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var SheetEditor = React.createClass({
	getDefaultProps: function() {
		return {
			code : '',
			onChange : function(){}
		};
	},

	handleCodeChange : function(e){
		this.props.onChange(e.target.value);
	},

	render : function(){
		return <div className='sheetEditor'>
			SheetEditor Ready!

			<textarea value={this.props.code} onChange={this.handleCodeChange} />

		</div>
	}
});

module.exports = SheetEditor;
