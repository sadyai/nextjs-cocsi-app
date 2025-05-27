import AppWelcome from "./components/AppWelcome";

export default function Home() {
  const title = 'Welcome to cosci';
  const currentYear = <p>2025</p>;
  const isShow = true;

  return (
    <div>
      <h1>Homepage</h1>
      <AppWelcome />
      <p>{title.toUpperCase()}</p>
      {currentYear}
      {
      isShow && <p>Date: 10/10/1988</p>
      }
      {
        isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>
      }
    </div>
  );
}
