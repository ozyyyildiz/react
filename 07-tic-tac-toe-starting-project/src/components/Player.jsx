import { useState } from "react";

export default function Player({ name, symbol, isActivePlayer, onRename }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function editName() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onRename(symbol, playerName);
    }
  }

  function nameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={nameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editName}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
