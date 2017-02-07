import { module } from 'angular';
import articleListController from './controllers/ArticleListController'

export default module('blog-app',[])
    .component('articles', {
        templateUrl: "../templates/articleList.html",
        bindings: {
            selectItem: "&",
            articleList: "<"
            
        }

    })
    .component('rootComponent', {
        templateUrl: "../templates/compose.html",
        controllerAs: 'articleListCtrl',
        controller: articleListController
    })
    .directive('articleForm', function(){
        return {
            templateUrl: "../templates/articleForm.html",
            scope: {
                selectedItem: "<"
            },
            controller: articleListController,
            controllerAs: 'articleListCtrl'
        }
    }).
    controller('articleListController',articleListController)
    .name;
