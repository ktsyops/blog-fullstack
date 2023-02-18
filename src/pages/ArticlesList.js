import ReusableArticlesList from "../components/ReuseableArticlesList";
import articles from "./ArticleContent";

const ArticlesList = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ReusableArticlesList articles={articles}/>
    </div>
  );
};

export default ArticlesList;
