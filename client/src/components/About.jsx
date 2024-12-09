export default function About() {
  return (
    <div className="flex flex-col items-center p-4" id="about">
      <div className="p-6 rounded-lg shadow-md text-center w-full md:w-1/2">
        <h1 className="text-xl font-bold mb-4 underline">
          What is Render File?
        </h1>
        <p className="text-sm m-4">
          Render File is a bi-weekly event in Toronto exploring improvised music
          and video games. It is held every 2nd and 4th Wednesday, 8pm at Wenona
          Craft Beer Lodge.
        </p>
      </div>
    </div>
  );
}
