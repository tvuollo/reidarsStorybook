import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ChevronLeftHtml, ChevronRightHtml } from './Chevron';

export const ChevronLeft = () => ChevronLeftHtml + copyCodeBlock(ChevronLeftHtml, cssOverrides);
export const ChevronRight = () => ChevronRightHtml + copyCodeBlock(ChevronRightHtml, cssOverrides);

export default { title: 'Atoms/Chevron' };