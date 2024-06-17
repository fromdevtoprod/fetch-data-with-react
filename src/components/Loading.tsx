export default function Loading() {
  const throwAnError = () => {
    throw new Error("An error occurred");
  };
  return (
    <>
      <p>Loading...</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={throwAnError}
      >
        Reject
      </button>
    </>
  );
}
