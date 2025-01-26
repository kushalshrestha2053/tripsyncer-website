export function Newsletter() {
  return (
    <div className="flex min-h-[200px] mt-7 flex-col items-center justify-center bg-[#0A0F1C] px-4 py-16 w-[80%] mx-auto rounded-lg mb-8">
      <h2 className="mb-6 text-center text-4xl font-extrabold tracking-tight text-[#E4E4E7]">
        Sign up for our newsletter!
      </h2>
      <button
        className="w-full max-w-md rounded-lg bg-[#0057D9] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0041A8]"
        type="button"
      >
        Subscribe
      </button>
    </div>
  );
}
