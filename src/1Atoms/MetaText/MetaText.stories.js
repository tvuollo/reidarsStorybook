import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import { MetaTextHtml, BigMetaTextHtml, WhiteMetaTextHtml, VideoMetaTextHtml } from './MetaText';

export const MetaText = () => MetaTextHtml + copyCodeBlock(MetaTextHtml, cssOverrides);
export const BigMetaText = () => BigMetaTextHtml + copyCodeBlock(BigMetaTextHtml, cssOverrides);
export const WhiteMetaText = () => WhiteMetaTextHtml + copyCodeBlock(WhiteMetaTextHtml, cssOverrides);
export const VideoMetaText = () => VideoMetaTextHtml + copyCodeBlock(VideoMetaTextHtml, cssOverrides);

export default { title: 'Atoms/MetaText' };