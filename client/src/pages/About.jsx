export default function About() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="p-6 rounded-lg shadow-md text-center w-full md:w-1/2">
        <h1 className="text-xl font-bold mb-4 underline">
          What is Render File?
        </h1>
        <p className="text-sm text-gray-700 m-4">
          Render File is a weekly event in Toronto exploring improvised music
          and video games. It is held every Wednesday, 8pm at Wenona Craft Beer
          Lodge.
        </p>
        <img
          src="/renderFile1.png"
          alt="Render File Event"
          className="mx-auto mb-4 border-4 border-gray-300 rounded"
        />
      </div>
    </div>
  );
}
