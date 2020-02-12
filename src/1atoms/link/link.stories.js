import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';

const LinkHtml = `<a class="link" href="#">Kaikki uutiset</a>`;
export const Link = () => LinkHtml + copyCodeBlock(LinkHtml, cssOverrides);

export default { title: 'Atoms/Link' };