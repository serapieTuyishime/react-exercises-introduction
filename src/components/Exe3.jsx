export default function Exe3() {
    return (
        <div className="main">
            <div className="flex gap-2">
                <button
                    className="bg-gray-200 px-6 py-2 rounded border border-black
            "
                    onClick={() => alert("You clicked button 1")}
                >
                    Button 1
                </button>
                <button
                    className="bg-gray-200 px-6 py-2 rounded border border-black
            "
                    onClick={() => alert("You clicked button 2")}
                >
                    Button 2
                </button>
                <button
                    className="bg-gray-200 px-6 py-2 rounded border border-black
            "
                    onClick={() => alert("You clicked button 3")}
                >
                    Button 3
                </button>
            </div>
        </div>
    );
}
