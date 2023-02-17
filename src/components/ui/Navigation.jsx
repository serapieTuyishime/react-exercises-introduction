export default function Navigation() {
    return (
        <div className="absolute top-0 flex justify-center w-screen gap-2 py-4">
            {[
                ["/intro", "exercise 1"],
                ["/click1", "exercise 2"],
                ["/3clicks", "exercise 3"],
                ["/counter", "exercise 4"],
                ["/mapping", "exercise 6"],
                ["/form", "exercise 7"],
                ["/memes", "exercise 8"],
                ["/flipper", "exercise 9"],
            ].map((el, index) => {
                return (
                    <a
                        href={el[0]}
                        key={index}
                        className="px-4 py-2 bg-gray-100 border border-black rounded-md"
                    >
                        {el[1]}
                    </a>
                );
            })}
        </div>
    );
}
