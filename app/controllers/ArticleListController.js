const postList = [

  {
    _id: 1,
    title: 'lorem1',
    description: 'not this time'
  }

];


class ArticleListController {
  constructor($scope, articlesService) {
    this.articles = postList;

    articlesService.setArticles(this.articles);
    console.log(this.articles);
    this.selected = this.articles[0];
    this.selectItem = (item) => {
      this.selected = item;
    };
  }


  postArticle(article, postForm) {
    if (postForm.$valid) {
      this.articles.push({
        title: article.title,
        description: article.description,
        _id: this.articles.length
      });
    } else {
      alert('Invalid post. Text should be at least 20 symbols long');

    }
  }


}
ArticleListController.$inject = ['$scope', 'articlesService'];
export default ArticleListController;
