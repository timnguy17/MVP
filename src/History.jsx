import React from 'react';

const History = (props) => {

  return (
    props.history.map((char) => {
      let data = char.data;
      return (
        <div key={data.platformInfo.platformUserHandle}>
          <h3>
            {data.platformInfo.platformUserHandle}
          </h3>
        </div>
      )
    })
  )
};

export default History;