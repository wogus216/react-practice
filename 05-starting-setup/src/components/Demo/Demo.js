import React from 'react';
import MyParagraph from './MyParagraph';

const Demo = (props) => {
  console.log('Demo Running');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(Demo);
