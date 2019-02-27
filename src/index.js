import React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RootRouter from './urls';
import store from './redux/store/configStore';
import {Provider} from 'react-redux';
import './asset/css/styles.css';
import JssRegistry from './JssRegistry';

ReactDOM.render(
	<JssRegistry>
		<Provider store={store}>
			<RootRouter />
		</Provider>
	</JssRegistry>,
	document.getElementById('root')
);

registerServiceWorker();
