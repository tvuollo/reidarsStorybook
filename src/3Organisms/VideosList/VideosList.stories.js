import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { VideosListHtml } from './VideosList';

export const VideosList = () => VideosListHtml + copyCodeBlock(VideosListHtml, cssOverrides);

export default { title: 'Organisms/VideosList' };