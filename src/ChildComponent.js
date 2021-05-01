// import { useState, useEffect } from "react";

export const ChildComponent = (props) => {
  // const [state, setState] = useState([]);

  // useEffect( () => {
  //    setState(props.val);
  // }, []);

  return (
    <div>
      {props.val.map((userData) => {
        return <li>{userData.body}</li>;
      })}
    </div>
  );
};
