import React from 'react';
import ReactDOM from 'react-dom';

class WelcomeComponent extends React.Component {

	on_click() {
		alert('クリックされたよ');
	}

	on_mouse_over() {
		alert('mouse_overされたよ');
	}

	render() {
		return (
			<div>
				<h2>{this.props.post_id}：カピバラのいる場所 {this.props.place_name}</h2>
				<ul>
					<li onClick={this.on_click}>長崎バイオパーク</li>
					<li onMouseOver={this.on_mouse_over}>神戸動物王国</li>
					<li>伊豆しゃぼてん公園</li>
				</ul>
			</div>
		)
	}
}

// Rendering
ReactDOM.render(
	<WelcomeComponent
		place_name="温泉"
	    post_id="11"
	/>,
	document.querySelector('.content')
);