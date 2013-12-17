var RemotePlayer = function() {
    var id;
    var session;
    var letters = [];
    var playedTiles = [];
    var turn;
    var client;

    var getId = function() {
        return id;
    };

    var getClient = function() {
        return client;
    };

    var getSession = function() {
        return session;
    };

    var getLetters = function() {
        return letters;
    };

    var getPlayedTiles = function() {
        return playedTiles;
    };

    var getTurn = function() {
        return turn;
    };

    var setId = function(newId) {
        id = newId;
    };

    var setSession = function(newSession) {
        session = newSession;
    };

    var setLetters = function(newLetters) {
        letters = newLetters;
    };

    var setPlayedTiles = function(newPlayedTiles) {
        playedTiles = newPlayedTiles;
    };

    var setTurn = function(newTurn) {
        turn = newTurn;
    };

    return {
        getClient: getClient,
        getId: getId,
        getSession: getSession,
        getLetters: getLetters,
        getPlayedTiles: getPlayedTiles,
        setId: setId,
        setSession: setSession,
        setLetters: setLetters,
        setPlayedTiles: setPlayedTiles
    }
};

exports.RemotePlayer = RemotePlayer;