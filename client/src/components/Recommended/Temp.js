import { Link } from "react-router-dom";

function Temp() {

      // less 75 pixels to compensate for the navbar
  const windowHeight = document.documentElement.clientHeight - 75;

    const styles = {
        div: {
          height: windowHeight
        },
        img: {
            borderRadius: "5px",
            maxHeight: '400px'
        },
        button: {
            
            fontSize: '10px'
          }
    }

  return (
    <>
<div className="container d-flex justify-content-center align-items-center" style={styles.div}>
    <div>
      <h2>Recommendation</h2>
        <p>Given current hardware prices we currently recommend picking up a current generation console if possible as they represent significantly better value for money.</p>
        <p>If you would still like a PC we recommend trying to stretch your budget to this option
        <Link to="/products/617f57b6b74fe67bf452e45e"><button 
            className="btn btn-outline-warning"
            type="button" 
            style={styles.button}
            >Recommendation</button></Link></p>
        <img style={styles.img} src='./images/ps5.png' alt="ps5"></img>
        <img style={styles.img} src='./images/xbox.jpg' alt="xbox series x"></img>
    </div>
</div>

    </>
  );
}

export default Temp;
