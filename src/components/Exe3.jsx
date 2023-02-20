import AlertingButton from "./AlertingButton";

export default function Exe3() {
    return (
        <div className="main">
            <div className="flex gap-2">
                <AlertingButton number={1} />
                <AlertingButton number={2} />
                <AlertingButton number={3} />
            </div>
        </div>
    );
}
