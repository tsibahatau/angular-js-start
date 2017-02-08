import blogApp from '../app/module';

describe('Component: articleList', function () {

  beforeEach(angular.mock.module(blogApp));

  let element;
  const articlesList = [{_id: 1, title: 'lor', description: 'test' },{_id: 2, title: 'lor2', description: 'test2' }];

  beforeEach(inject(function($rootScope, $compile){

    element = $compile('<articles article-list="articles"/>')($rootScope);

    $rootScope.articles = articlesList;

    $rootScope.$digest();
  }));

  it('should render article for any entity in array', function() {
    expect(element.find('h4').length).toBe(articlesList.length);
  });
  it('should render each entity correctly', function() {
    expect(element.find('h4').eq(0).text()).toBe('lor');
  });
});