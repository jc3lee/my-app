import Friend from "@/components/friend";

export default function Home() {
  return (
    <main className="container">
      <header>
        <h1 className="title">Hello World!</h1>
        <Friend name="JC" age={30} gender="male" />
      </header>
    </main>
  );
}
