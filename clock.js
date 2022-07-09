class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
    const element = (
        <Clock date={new Date()} />
    );
    root.render(element);
}

setInterval(tick, 1000);