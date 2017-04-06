import React, { Component, PropTypes } from "react";
import {connect} from "react-redux";
import "./App.css";
import {increment, decrement, undo, redo} from "./ducks/counter";




export class App extends Component {
	render() {
		const {
				count
			,	decrement
			, futureValues
			, increment
			, previousValues
			, undo
			, redo
		} = this.props
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ this.props.count }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={() => increment(1)}
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={() => increment(5)}
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={() => decrement(1)}
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={() => decrement(5)}
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ previousValues.length == 0 }
							onClick={ undo }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ futureValues.length == 0 }
							onClick={ redo}
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}

App.propTypes = {
	count: PropTypes.number.isRequired
	, decrement: PropTypes.func.isRequired
	, increment: PropTypes.func.isRequired
	, futureValues: PropTypes.arrayOf(PropTypes.number).isRequired
	, previousValues: PropTypes.arrayOf(PropTypes.number).isRequired
	, undo: PropTypes.func.isRequired
	, redo: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return state;
}

const decorator = connect(mapStateToProps, {decrement, increment, undo, redo});

const decoratedComponent = decorator(App);

export default decoratedComponent;
