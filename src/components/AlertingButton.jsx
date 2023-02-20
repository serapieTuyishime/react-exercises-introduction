export default function AlertingButton({ number }) {
    return (
        <button
            className="px-6 py-2 bg-gray-200 border border-black rounded "
            onClick={() => alert(`You clicked button ${number}`)}
        >
            Button {number}
        </button>
    );
}
