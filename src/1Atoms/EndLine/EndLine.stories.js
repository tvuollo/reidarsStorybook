import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { EndLineHtml } from './EndLine';

export const EndLine = () => EndLineHtml + copyCodeBlock(EndLineHtml, cssOverrides);

export default { title: 'Atoms/EndLine' };