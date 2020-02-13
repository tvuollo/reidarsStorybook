import { NewsListTitleHtml } from './../../1Atoms/ListTitle/ListTitle';
import { NewsItemHtml } from './../../2Molecules/NewsItem/NewsItem';

const NewsListHtml = `<div class="newslist">
    <div class="newslist__header">
        ${NewsListTitleHtml}
    </div>
    <div class="newslist__slider">
        <div class="newslist__items">
            <div class="newslist__itemwrap">
                ${NewsItemHtml}
            </div>
            <div class="newslist__itemwrap">
                ${NewsItemHtml}
            </div>
            <div class="newslist__itemwrap">
                ${NewsItemHtml}
            </div>
            <div class="newslist__itemwrap">
                ${NewsItemHtml}
            </div>
            <div class="newslist__itemwrap">
                ${NewsItemHtml}
            </div>
            <div class="newslist__itemwrap">
                ${NewsItemHtml}
            </div>
        </div>
    </div>
</div>`;

export { NewsListHtml };