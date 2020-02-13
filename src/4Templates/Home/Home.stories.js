import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { HomeHtml } from './Home';

export const Home = () => HomeHtml + copyCodeBlock(HomeHtml, cssOverrides);

export default { title: 'Templates/Home' };