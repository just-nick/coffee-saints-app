export namespace MapsApiActions {
    export const UPDATE_API_STATE = 'UPDATE_API_STATE';

    let inProgress = false;
    let apiPromise: Promise<any>;

    export function setup(dispatch: any, getState: any) {
        if (getState().locationReducer.apiReady) {
            return Promise.resolve('');
        }

        if (!inProgress) {
            inProgress = true;

            apiPromise = new Promise((resolve, reject) => {
                (window as any).googleMapsCallback = (x: any) => {
                    dispatch({
                        type: UPDATE_API_STATE,
                        apiReady: true
                    });

                    resolve(x);
                };
            });

            const script = document.createElement('script');
            const apiKey = 'AIzaSyBAfxcPHyQrLQBZj8rF9AkWBYAYgk-d_1s';
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=googleMapsCallback`;
            document.body.appendChild(script);
        }

        return apiPromise;
    }
}