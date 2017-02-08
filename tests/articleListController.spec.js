import blogApp from '../app/module';
import config from '../app/config';

describe('articles controller tests', function() {
  let $scope = {};
  let $httpBackend;
  let articlesCtrl;
  const articlesList = [{_id: 1, title: 'lor', description: 'test' }];


  beforeEach(angular.mock.module(blogApp));

  beforeEach(inject((_$controller_, _$httpBackend_) => {
    articlesCtrl = _$controller_('articleListController', { $scope: $scope });
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET(config.articlePostsURL).respond(200, articlesList);
  }));

  it('should load articles', function() {
    $httpBackend.flush();
    expect(articlesCtrl.articles).toEqual(articlesList);
  });


});