import MarkdownComponent from '../components/getting-started.md';

export default function GettingStarted(props) {
  return (
    <>
      <header>This is header</header>
      <main>
        <MarkdownComponent></MarkdownComponent>
      </main>
      <footer>This is footer</footer>
    </>
  );
}
