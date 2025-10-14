import Link from "next/link";

const fakeArticles = [
  { id: 1, title: "Introduction à React" },
  { id: 2, title: "Découvrir Next.js" },
  { id: 3, title: "Comprendre le routage dynamique" },
];

export default function Articles() {
  return (
    <main>
      <h1>Liste des articles</h1>
      <ul>
        {fakeArticles.map((a) => (
          <li key={a.id}>
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
