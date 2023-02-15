export default function Button({ clicks, setClicks }) {
    return (
        <button
            className="px-6 bg-gray-200 rounded py-2"
            onClick={() => setClicks(clicks + 1)}
        >
            Click me
        </button>
    );
}
