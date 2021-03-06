/**
* Selects the lighter of the backdrop and source colors.
*
* @method Lazer.Color.blendLighten
* @static
* @param {integer} a - The source color to blend, in the range 1 to 255.
* @param {integer} b - The backdrop color to blend, in the range 1 to 255.
* @returns {integer} The blended color value, in the range 1 to 255.
*/
var Lighten = function (a, b)
{
    return (b > a) ? b : a;
};

module.exports = Lighten;
