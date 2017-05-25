import {Saint} from '../saint/saint';

export namespace SaintActions {
    export const ADD_SAINT = 'ADD_SAINT';

    export function addSaint(saint: Saint) {
        return mockPutSaint(saint)
            .then((saint) => {
                return {
                    type: ADD_SAINT,
                    saint: saint
                };
            });
    }
}

// This is a simulated API response
function mockPutSaint(saint: Saint): Promise<Saint> {
    return new Promise((resolve, reject) => {
        console.info('HTTP call made here');

        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.info('200', saint);
                resolve(saint);
            }
            else {
                console.error('500', saint);
                reject({status: 500});
            }
        }, 5000 * Math.random());
    });
}