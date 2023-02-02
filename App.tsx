import Navigation from './src/navigation/index';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  return (
    
  <Navigation />
  );
};



export default (App);
