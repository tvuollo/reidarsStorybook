import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { VideoItemHtml } from './VideoItem';

export const VideoItem = () => VideoItemHtml + copyCodeBlock(VideoItemHtml, cssOverrides);

export default { title: 'Molecules/VideoItem' };