export default function Meme({ title = "No title", body = "Body goes here" }) {
    return (
        <div className="grid text-center gap-2 p-4 w-80 bg-white rounded-md">
            <span className="font-bold text-2xl">{title}</span>
            <span className="text-lg">{body}</span>
        </div>
    );
}
