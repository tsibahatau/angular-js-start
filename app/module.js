import { module } from 'angular';
import articleListController from './controllers/ArticleListController'

export default module('blog-app',[])
    .component('articles', {
        templateUrl: "../templates/articleList.html",
        controllerAs: 'articleListCtrl',
        controller: articleListController
    })
    .directive('articleForm', function(){
        return {
            templateUrl: "../templates/articleForm.html",
            controllerAs: 'articleListCtrl',
            controller: 'articleListController'
        }
    }).
    controller('articleListController',articleListController)
    .name;
