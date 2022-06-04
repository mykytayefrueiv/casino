import GAMES_MOCK from './gamesMock.json';

export const fetchGames = () => {
    // mocking api request
    return Promise.resolve(GAMES_MOCK)
};
