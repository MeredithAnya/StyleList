import ArticleActions from '../actions/articleActions'
import OutfitActions from '../actions/outfitActions'

const ApiUtil = {
  fetchArticles: () => {
    $.ajax({
      url: 'api/articles',
      method: 'GET',
      success: (articles) => {
        ArticleActions.receiveArticles(articles);
      },
      error: (response) => {
        // debugger;
      }
    });
  },
  fetchOutfits: () => {
    $.ajax({
      url: 'api/outfits',
      method: 'GET',
      success: (outfits) => {
        OutfitActions.receiveOutfits(outfits);
      },
      error: (response) => {
        // debugger;
      }
    });
  }
}

export default ApiUtil