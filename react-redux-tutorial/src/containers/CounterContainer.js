import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  // return <Counter number={number} onIncrease={() => dispatch(increase())} onDecrease={() => dispatch(decrease())} />;
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

// const CounterContainer = ({ number, increase, decrease }) => {
//   return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
// };

//처음 방법
// const mapStateProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchProps = (dispatch) => ({
//   //임시함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// 두번 째 방법
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch
//     )
// )(CounterContainer);

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CounterContainer);
export default CounterContainer;
