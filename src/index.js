import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Foo extends React.Component {
	render() {
		return <div>foo</div>
	}
}

class Bar extends React.Component {
	render() {
		return <div>bar</div>
	}
}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Route path="/foo" component={Foo}/>
				<Route path="/bar" component={Bar}/>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
