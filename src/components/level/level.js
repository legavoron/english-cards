import './level.css';

const Level = ({value, key}) => {
    return (
        <li className="level" key={key}>
            <button className='levelBtn'>{value}</button>
        </li>
    )
}

export default Level;