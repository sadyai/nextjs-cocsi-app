import AppWelcome from "./components/AppWelcome";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <AppWelcome headTitle="Big O" isShow={true} />
    </div>
  );
}
