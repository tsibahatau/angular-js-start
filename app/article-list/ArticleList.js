class ArticleListController {
   
    constructor(ArticleList) {
        this.ArticleList = ArticleList;
        this.articles= [];
    }

}

ArticleListController.$inject = [ 'ArticleList' ];

const articlesList = {
    template: `<div>это какой то пиздец</div>`,
    controller: ArticleListController,
    controllerAs: 'vm'
};

export default articlesList;
