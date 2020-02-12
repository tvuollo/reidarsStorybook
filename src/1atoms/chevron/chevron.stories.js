import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { ChevronLeft, ChevronRight } from './chevron';

export const LeftChevron = () => ChevronLeft + copyCodeBlock(ChevronLeft, cssOverrides);
export const RightChevron = () => ChevronRight + copyCodeBlock(ChevronRight, cssOverrides);

export default { title: 'Atoms/Chevron' };