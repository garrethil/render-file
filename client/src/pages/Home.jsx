import Schedule from "../components/Schedule";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center p-4 md:p-6 lg:p-8">
      <Schedule />
      <h3 className="my-5 p-3 text-lg sm:text-xl lg:text-2xl text-center">
        It will look like this
      </h3>
      <img
        src="/renderFile3.png"
        alt="Render File Event"
        className="mx-5 mb-4 border-4 border-gray-300 rounded w-full md:w-2/3 lg:w-1/2"
      />
    </div>
  );
}
