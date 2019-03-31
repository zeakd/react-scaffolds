import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { delay, mapTo, mergeMap, switchMap, map, take, concat, race } from 'rxjs/operators';
import { of, defer, merge } from 'rxjs';
import { helloEpic } from '../message/epic'

const pingEpic = action$ => action$.pipe(
  ofType('PING'),
  pongEpic,
);

const pongEpic = action$ => action$.pipe(
  delay(1000),
  mapTo({ type: 'PONG' })
)

const pingWithHiEpic = (action$, store$) => action$.pipe(
  ofType('PING_WITH_HI'),
  switchMap(() =>
    merge(
      of({ type: 'PING' }), 
      action$.pipe(
        ofType('PONG'),
        take(1),
        mapTo({ type: 'HI' }),
      ),
    ),
  )
  //   // race(
  //   //   action$.pipe(
  //   //     ofType('PONG'),
  //   //     take(1),
  //   //   ),
  //   //   action$.pipe(
  //   //     ofType('PONG'),
  //   //     take(1),
  //   //   ),
  //   // )
  // ),
  // mergeMap(
  //   () => race(
  //     action$.pipe(
  //       ofType('PONG'),
  //       take(1),
  //     ),
  //     action$.pipe(
  //       ofType('PONG'),
  //       take(1),
  //     ),
  //   )
  // ),
  // // defer(() => pongEpic(action$, store$)),
  // mapTo({ type: 'here'}),
  // mapTo(() => pongEpic(action$, store$))
  // concat(defer(() => helloEpic(action$, store$))),
  // mergeMap(() => {
  //   return action$.pipe(pongEpic, take(1))
  // })
  // pongEpic,
  // helloEpic,
  
  // concat(pongEpic, helloEpic),

  // mapTo({ type: 'PING' }),
  // mergeMap(() => {
  //   // dispatch({ type: 'PING' })
  //   console.log(action$, store$)
  //   return [
  //     action$.pipe(mapTo({ type: 'PING' })),
  //     // action$.pipe(
  //     //   ofType('PONG'),
  //     //   take(1),
  //     // ),
  //   ]
  // }),
  // switchMap((action) => {
  //   console.log(action)
  //   // return action$.pipe(
  //   //   mapTo({ type: 'PING'}),
  //   // )
  //   return of({ type: 'PING' })
  // })
)

export default combineEpics(pingEpic, pingWithHiEpic);