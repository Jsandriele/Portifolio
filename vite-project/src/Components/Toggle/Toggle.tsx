import "./Toggle.css";






export const Toggle = () => {

 

  return (
    <div
      className="toggle"
     
      >
      <input 
        type="checkbox" 
        id="Chk"      
        />
      <label htmlFor="Chk" className="switch">
        <span className="slider"></span>
      </label>
    </div>
  );
};
