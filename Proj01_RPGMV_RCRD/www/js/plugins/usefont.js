Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
        return 'GameFont';
    } else if ($gameSystem.isKorean()) {
        return 'Dotum, AppleGothic, sans-serif';
    } else {
        return 'GameFont';
    }
};