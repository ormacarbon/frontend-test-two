function CompareInfo({ prop }) {
  return (
    <div className="compareInfo-container">
      <p className="compareInfo-name">{prop?.name}</p>
      <div>
        <label>HP: {prop?.hp} </label>
        <label className={prop?.comparison?.hpClass}>
          {prop?.comparison?.hp}
        </label>
      </div>
      <div>
        <label>ATA: {prop?.atk} </label>
        <label className={prop?.comparison?.atkClass}>
          {prop?.comparison?.atk}
        </label>
      </div>
      <div>
        <label>DEF: {prop?.def} </label>
        <label className={prop?.comparison?.defClass}>
          {prop?.comparison?.def}
        </label>
      </div>
      <div>
        <label>VEL: {prop?.speed} </label>
        <label className={prop?.comparison?.speedClass}>
          {prop?.comparison?.speed}
        </label>
      </div>
      <div>
        <label>Media: </label>
        <label>{prop?.comparison?.media}</label>
      </div>
    </div>
  );
}

export default CompareInfo;
