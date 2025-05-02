// @ts-check
interface ToolbarProps {
  filters: string[];
  selected: string; 
  onSelectFilter: (filter: string) => void; 
}

const Toolbar = ({ filters, selected, onSelectFilter }: ToolbarProps) => {
  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter}
          style={{
            backgroundColor: filter === selected ? 'blue' : 'gray',
            color: 'white',
            margin: '5px',
            padding: '10px'
          }}
          onClick={() => onSelectFilter(filter)} 
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
