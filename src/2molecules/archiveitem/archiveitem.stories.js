import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import ArchiveitemHtml from './archiveitem';

export const Archiveitem = () => ArchiveitemHtml + copyCodeBlock(ArchiveitemHtml, cssOverrides);

export default { title: 'Molecules/Archiveitem' };