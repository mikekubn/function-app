import { articles, authors, teams } from './_mock_';

const getTeamArticlesDescription = (teamId: number): string | null => {

  const authorsInTeam = teams.find((item) => item.id === teamId)?.members
    .map((member) => 
      authors.filter((author) => author.id === member))
    .flat();

  const authorsOfBooks = authorsInTeam?.map((item) => ({
    id: item.id,
    name: item.name,
    articleId: articles.flatMap((article) => article.authors?.map((val) => { if (val === item.id) return article.id; } )).filter((val) => val !== undefined),
    text: articles.flatMap((article) => article.authors?.map((val) => { if (val === item.id) return article.text; })).filter((val) => val !== undefined),
  }));

  const print = authorsOfBooks?.map((author) => {
    if (!author.articleId.length) {
      return `${author.name} wrote 0 articles.\n`;
    } else if (author.articleId.length <= 1) {
      return `${author.name} wrote an article ${author.text.toString().replace(',', ', ')}.\n`;
    } else if (author.articleId.length <= 2) {
      return `${author.name} wrote articles ${author.text.shift()?.toString().replace(',', '')} and ${author.text.pop()}.\n`;
    } else if (author.articleId.length <= 3) {
      return `${author.name} wrote articles ${author.text.slice(0, -1).toString().replace(',', ', ')} and 1 more.\n`;
    } else if (author.articleId.length <= 4 ) {
      return `${author.name} wrote articles ${author.text.slice(0, -2).toString().replace(',', ', ')} and 2 more.\n`;
    }
  });

  const withoutCommas = print?.join('');

  if (withoutCommas === undefined) {
    return null;
  }

  return withoutCommas;
};

export { getTeamArticlesDescription };
