import { VideosListHeaderHtml } from './../../2Molecules/ListHeader/ListHeader';
import { VideoItemHtml } from './../../2Molecules/VideoItem/VideoItem';

const VideosListHtml = `<div class="videoslist">
    ${VideosListHeaderHtml}
    <div class="videoslist__slider">
        <div class="videoslist__items">
            <div class="videoslist__item">
                ${VideoItemHtml}
            </div>
            <div class="videoslist__item">
                ${VideoItemHtml}
            </div>
            <div class="videoslist__item">
                ${VideoItemHtml}
            </div>
            <div class="videoslist__item">
                ${VideoItemHtml}
            </div>
            <div class="videoslist__item">
                ${VideoItemHtml}
            </div>
            <div class="videoslist__item">
                ${VideoItemHtml}
            </div>
        </div>
    </div>
</div>`;

export { VideosListHtml };