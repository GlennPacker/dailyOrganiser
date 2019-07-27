import {
    take,
    put,
    select
} from 'redux-saga/effects';

import * as mutations from './mutations';
import uuid from 'uuid';


export function* taskCreateionSaga() {
    while (true) {
        const { groupId } =  yield take(mutations.REQUEST_TASK_CREATION);
        const ownerId = 'u1';
        const taskId = uuid();
        yield put(mutations.createTask(taskId, groupId, ownerId))
        console.log("Got group id", groupId);
    }
}
