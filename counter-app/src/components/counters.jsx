import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button className="btn btn-primary m-2" onClick={props.onReset}>
        Reset
      </button>
      {props.counters.map((counter) => (
        <div>
          <Counter
            key={counter.id}
            value={counter.value}
            onIncrement={() => props.onIncrement(counter.id)}
            onDecrement={() => props.onDecrement(counter.id)}
            onDelete={() => props.onDelete(counter.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Counters;
