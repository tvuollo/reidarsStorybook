import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import LinkHtml from './link';

export const Link = () => LinkHtml + copyCodeBlock(LinkHtml, cssOverrides);

export default { title: 'Atoms/Link' };