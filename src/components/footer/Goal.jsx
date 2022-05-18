const Goal = () => {
  return (
    <div className="goal col-9">
      {/* PLAYER 1 */}
      <div class="wrapper P1">
        <div class="head"></div>
        <div class="torso"></div>
        <div class="rightarm">
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-tennis-racket-tennis-flaticons-lineal-color-flat-icons-10.png"
            height="64"
            width="64"
            className="raqueta"
          />
        </div>
        <div class="leftleg"></div>
        <div class="rightleg"></div>
      </div>
      <img src="https://img.icons8.com/emoji/30/000000/tennis-emoji.png" className="ball"/>
      {/* NET */}
      <div className="net">
        <div className="grid"></div>
      </div>
      
      {/* PLAYER 2 */}
      <div class="wrapper P2">
        <div class="head"></div>
        <div class="torso"></div>
        <div class="rightarm">
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-tennis-racket-tennis-flaticons-lineal-color-flat-icons-10.png"
            height="64"
            width="64"
          />
        </div>
        <div class="leftleg"></div>
        <div class="rightleg"></div>
      </div>
    </div>
  );
};
export default Goal;
