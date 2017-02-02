
const postList = [
    
    {
        _id: 1,
        title: 'lorem1',
        description: 'qqqqqqqqqqqqqqqqqq'
    },
    {
        _id: 2,
        title: 'lorem2',
        description: 'Test 123 12312 312sadfas '
    },

];


class ArticleListController {
    constructor($scope){
        this.articles = postList;
        this.$scope = $scope;
        
    }
    
    fillForm(article){
        this.$scope.editedPost = article;
    }
    
    postArticle(article,postForm){
        if(postForm.$valid){
            postList.push({
                title: article.title,
                description: article.description,
                _id: article._id || (postList.length + 1)
            });
        }else{
            alert('Invalid post. Text should be at least 20 symbols long');
            
        }
        console.dir(postList);
    }
   

}
ArticleListController.$inject = ['$scope'];
export default ArticleListController;
