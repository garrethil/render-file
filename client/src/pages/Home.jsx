import Schedule from "../components/Schedule";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <Schedule />
      <h3 className="my-5 p-3">It will look like this</h3>
      <img
        src="/renderFile3.png"
        alt="Render File Event"
        className="mx-5 mb-4 border-4 border-gray-300 rounded md:w-1/2 justify-center"
      />
    </div>
  );
}
