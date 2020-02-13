import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ChevronsHtml } from './Chevrons';

export const Chevrons = () => ChevronsHtml + copyCodeBlock(ChevronsHtml, cssOverrides);

export default { title: 'Molecules/Chevrons' };