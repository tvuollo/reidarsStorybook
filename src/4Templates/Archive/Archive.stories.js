import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArchiveHtml } from './Archive';

export const Archive = () => ArchiveHtml + copyCodeBlock(ArchiveHtml, cssOverrides);

export default { title: 'Templates/Archive' };