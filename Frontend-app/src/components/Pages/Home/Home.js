import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import "./Home.css";
import { connect } from "react-redux";

import updateMin from "../../../store/actions/numbersAction";

function Home(props) {
  console.log("props Home: ", props);

  useEffect(() => {
    props.create(29);
  }, []);

  return (
    <div className="Home-general">
      <Header></Header>

      <div className="img">
        <h3>ORQUESTRAÇÃO DE CONTAINERS COM DOCKER</h3>
        <img
          className="image"
          src="https://velog.velcdn.com/images/nimwver/post/77d4cc14-1782-4a23-9cf3-573f338ae3a5/image.webp"
        ></img>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numbers: state.numbers,
  };
};

const mapActionCreatorToProps = (dispatch) => {
  return {
    create(newNum) {
      const action = updateMin(newNum);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapActionCreatorToProps)(Home);
