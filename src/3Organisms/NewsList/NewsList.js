import { NewsListHeaderHtml } from './../../2Molecules/ListHeader/ListHeader';
import { NewsItemHtml } from './../../2Molecules/NewsItem/NewsItem';

const NewsListHtml = `<div class="newslist">
    ${NewsListHeaderHtml}
    <div class="newslist__slider">
        <div class="newslist__items">
            <div class="newslist__item">
                ${NewsItemHtml}
            </div>
            <div class="newslist__item">
                ${NewsItemHtml}
            </div>
            <div class="newslist__item">
                ${NewsItemHtml}
            </div>
            <div class="newslist__item">
                ${NewsItemHtml}
            </div>
            <div class="newslist__item">
                ${NewsItemHtml}
            </div>
            <div class="newslist__item">
                ${NewsItemHtml}
            </div>
        </div>
    </div>
</div>`;

export { NewsListHtml };