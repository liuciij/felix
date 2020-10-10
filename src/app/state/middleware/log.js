import content from "../../../content";

const log = ({ dispatch, getState }) => (next) => (action) => {
    console.log(
        { dispatch, getState, next, action },
        action.id === "cbcd32-Avengers:-4f12eb",
        action.type === content.types.TOGGLE_FAVORITE
    );

    if (action.id === "cbcd32-Avengers:-4f12eb" && action.type === content.types.TOGGLE_FAVORITE) {
        return null;
    }

    return next(action);
};

export default log;