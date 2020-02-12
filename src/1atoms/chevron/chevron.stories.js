import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';

const LeftHtml = `<a class="chevron chevron--left" href="#">Taaksep&auml;in</a>`;
export const Left = () => LeftHtml + copyCodeBlock(LeftHtml, cssOverrides);

const RightHtml = `<a class="chevron chevron--right" href="#">Eteenp&auml;</a>`;
export const Right = () => RightHtml + copyCodeBlock(RightHtml, cssOverrides);

export default { title: 'Atoms/Chevron' };