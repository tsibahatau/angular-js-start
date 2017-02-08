import { module } from 'angular';
import articleListController from './controllers/ArticleListController'
import config from './config';

export default module('blog-app',[])
  .factory('articlesService', function($http) {
      return {
          setArticles(articles) {
            return $http.get(config.articlePostsURL).then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                  articles[i] = response.data[i];
              }
            }, (error) => {
              console.log(error);
            });
          }
      }
  })
    .component('articles', {
        template: `<h1>Topic list</h1>
                        <div class="articles">
                              <div ng-repeat= "article in $ctrl.articleList" ng-click="$ctrl.selectItem({item: article})" >
                                    <h4>{{article.title}}</h4>
                                    <div>{{article.description}}</div>
                              </div>
                        </div>
                        `,
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
    controller('articleListController', articleListController)
    .name;
