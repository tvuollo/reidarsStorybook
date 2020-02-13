import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArchiveListHtml } from './ArchiveList';

export const ArchiveList = () => ArchiveListHtml + copyCodeBlock(ArchiveListHtml, cssOverrides);

export default { title: 'Organisms/ArchiveList' };