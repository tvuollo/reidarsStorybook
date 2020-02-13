import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ArchiveItemHtml } from './ArchiveItem';

export const ArchiveItem = () => ArchiveItemHtml + copyCodeBlock(ArchiveItemHtml, cssOverrides);

export default { title: 'Molecules/ArchiveItem' };