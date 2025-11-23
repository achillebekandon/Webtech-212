export default function Article({ params }) {
  const { articleId } = params;

  return (
    <main>
      <h1>Article #{articleId}</h1>
      <p>Ceci est le contenu de l’article {articleId}.</p>
    </main>
  );
}
