var RemotePlayer = function(i) {
    var id = i;
    var letters = [];
    var playedTiles = [];
    var client;
    var score = 0;
    var passed = 0;

    var getScore = function() {
        return score;
    };

    var getId = function() {
        return id;
    };

    var getClient = function() {
        return client;
    };

    var getLetters = function() {
       return letters;
    };

    var getPlayedTiles = function() {
        return playedTiles;
    };

    var setId = function(newId) {
        id = newId;
    };

    var addLetters = function(newLetters) {
        for (var i in newLetters) {
            letters.push(newLetters[i]);
        }
    };

    var addPlayedTiles = function(newPlayedTiles) {
        for (var i in newPlayedTiles) {
            playedTiles.push(newPlayedTiles[i]);
        }
    };

    var addScore = function(value) {
        score += value;
    };

    var substractScore = function(value) {
        score -= value;
    };

   var setClient = function(c)
   {
       client = c;
   }

    var setPassed = function(count)
    {
        passed = count;
    }

    var addPassed = function()
    {
        passed++;
    }

    var getNoPasses = function()
    {
        return passed;
    }

    return {
        getScore: getScore,
        getClient: getClient,
        getId: getId,
        getLetters: getLetters,
        getPlayedTiles: getPlayedTiles,
        setId: setId,
        addLetters: addLetters,
        addPlayedTiles: addPlayedTiles,
        setClient: setClient,
        addScore: addScore,
        addPassed: addPassed,
        setPassed: setPassed,
        substractScore: substractScore,
        getNoPasses: getNoPasses
    }
};

exports.RemotePlayer = RemotePlayer;