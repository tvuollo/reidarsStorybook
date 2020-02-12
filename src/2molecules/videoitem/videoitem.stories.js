import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import VideoitemHtml from './videoitem';

export const Videoitem = () => VideoitemHtml + copyCodeBlock(VideoitemHtml, cssOverrides);

export default { title: 'Molecules/Videoitem' };