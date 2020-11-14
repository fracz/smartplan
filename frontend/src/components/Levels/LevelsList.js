import React from 'react';
import '../../App.css';
import mAxios from '../../utils/API';
import '../../new_css/levels_list_css/LevelsList.css';

const LevelsList = ({creator, location, activeLevel, setActiveLevel, changeDisplayedLevel, setShowAddLevelModal, setShowDeleteLevelModal}) => {

  const levels = location ? location.levels.slice(0).map(level => {
    return <div class="level" key={level.order} onClick={() => { 
      changeDisplayedLevel(level);
      setActiveLevel(level.order);
      mAxios.get('/devices?levelId=' + level.order)
        .then(response => {
            creator.setAddedDevices(response.data);
            creator.drawCanvas();
        })
        .catch(error => console.log(error));
     }} onContextMenu={(event) => {
      event.preventDefault();
      setShowDeleteLevelModal(true)
     }}>{level.name}</div>
  }) : null;

  const levelsMapped = <div class="dropdown">
    <button class="drop-btn">{location ? location.levels[activeLevel].name : ""}<span class="caret"/></button>
    <div class="dropdown-content">
      {levels}
      {setShowAddLevelModal ? <div className="level add-level" onClick={() => { setShowAddLevelModal(true) }}>DODAJ POZIOM</div> : null}
    </div>
  </div>

  return (
    <div className="levels">
        {levelsMapped}
    </div>
  );
}

export default LevelsList;
