import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import styles from './Header.scss'
import CSSModules from 'react-css-modules'

class Header extends React.Component {
	render () {
		return (
			<div>
				<div className="header">
					<p className="logo">Aura</p>
				</div>
				<div className="links-container">
					<p className="links">About</p>
					<p className="links">FAQ</p>
					<p className="links">Support</p>
				</div>
			</div>

		);
	}
}
export default CSSModules(Header, styles)
