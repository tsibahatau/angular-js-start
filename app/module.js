import { module } from 'angular';
import articlesList  from './article-list/ArticleList'

export default module('blog-app',[])
    .component('articles-list', articlesList)
    .name;
