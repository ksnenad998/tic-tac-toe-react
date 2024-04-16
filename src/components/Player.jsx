import {useState} from 'react';

export default function Player({initialName, symbol, isActive}) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function clickHandler() {
        setIsEditing((editing) => !editing);
    }

    function changeHandler(event) {
        console.log(event);
        setName(event.target.value);
    }

    let playerName = <span className='player-name'>{name}</span>;

    if (isEditing) {
        playerName = (
            <input type='text' required value={name} onChange={changeHandler} />
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={clickHandler}>
                {!isEditing ? 'Izmeni' : 'Sacuvaj'}
            </button>
        </li>
    );
}
