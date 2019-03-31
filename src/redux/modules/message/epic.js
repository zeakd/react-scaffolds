import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

const messageEpic = action$ => action$.pipe(
  ofType('HI'),
  helloEpic,
);

const helloEpic = action$ => action$.pipe(
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo({ type: 'HELLO' })
)

export default messageEpic;
export {
  helloEpic,
}