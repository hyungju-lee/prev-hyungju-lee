function styleSheet() {
    var style = '',
        flexGrow = $('.inp-grow').val().trim() === '' ? 0 : $('.inp-grow').val().trim(),
        flexShrink = $('.inp-shrink').val().trim() === '' ? 0 : $('.inp-shrink').val().trim(),
        flexBasis = $('.inp-basis').val().trim() === '' ? 'auto' : $('.inp-basis').val().trim(),
        yesScroll = $('.inp-radio2').prop('checked') === true ? true : false;

    if (yesScroll) {
        style += '.example {';
        style += '\n    overflow-y: scroll';
        style += '\n}';
    }

    style += '\n\n.flexBox {';
    style += '\n    position: relative;';
    style += '\n    background-color: #ddd;';
    if ($('.inp-txt').val().trim() !== '') {
        style += '\n    width: ' + $('.inp-txt').val() + $('.sel-unit').val() + ';';
    }
    if ($('.inp-txt2').val().trim() !== '') {
        style += '\n    height: ' + $('.inp-txt2').val() + $('.sel-unit2').val() + ';';
    }
    if ($('.sel-flex').val() === 'flex') {
        style += '\n\n    display: -webkit-box;       /* OLD - iOS 6-, Safari 3.1-6 */';
        style += '\n    display: -moz-box;          /* OLD - Firefox 19- (buggy but mostly works) */';
        style += '\n    display: -webkit-flex;      /* NEW - Chrome */';
        style += '\n    display: -ms-flexbox;       /* TWEENER - IE 10 */';
        style += '\n    display:flex;';
    } else {
        style += '\n\n    display: -webkit-inline-box;        /* OLD - iOS 6-, Safari 3.1-6 */';
        style += '\n    display: -moz-inline-box;           /* OLD - Firefox 19- (buggy but mostly works) */';
        style += '\n    display: -webkit-inline-flex;       /* NEW - Chrome */';
        style += '\n    display: -ms-inline-flexbox;        /* TWEENER - IE 10 */';
        style += '\n    display: inline-flex;';
    }
    if ($('.sel-flex-direction').val() === 'row') {
        style += '\n\n    -webkit-box-direction: normal;';
        style += '\n    -webkit-box-orient: horizontal;';
        style += '\n    -moz-box-direction: normal;';
        style += '\n    -moz-box-orient: horizontal;';
        style += '\n    -webkit-flex-direction: row;';
        style += '\n    -ms-flex-direction: row;';
        style += '\n    flex-direction: row;';
    } else if ($('.sel-flex-direction').val() === 'row-reverse') {
        style += '\n\n    -webkit-box-direction: reverse;';
        style += '\n    -webkit-box-orient: horizontal;';
        style += '\n    -moz-box-direction: reverse;';
        style += '\n    -moz-box-orient: horizontal;';
        style += '\n    -ms-flex-direction: row-reverse;';
        style += '\n    flex-direction: row-reverse;';
    } else if ($('.sel-flex-direction').val() === 'column') {
        style += '\n\n    -webkit-box-direction: normal;';
        style += '\n    -webkit-box-orient: vertical;';
        style += '\n    -moz-box-direction: normal;';
        style += '\n    -moz-box-orient: vertical;';
        style += '\n    -webkit-flex-direction: column;';
        style += '\n    -ms-flex-direction: column;';
        style += '\n    flex-direction: column;';
    } else {
        style += '\n\n    -webkit-box-direction: reverse;';
        style += '\n    -webkit-box-orient: vertical;';
        style += '\n    -moz-box-direction: reverse;';
        style += '\n    -moz-box-orient: vertical;';
        style += '\n    -webkit-flex-direction: column-reverse;';
        style += '\n    -ms-flex-direction: column-reverse;';
        style += '\n    flex-direction: column-reverse;';
    }
    if ($('.sel-flex-wrap').val() === 'nowrap') {
        style += '\n\n    -webkit-flex-wrap: nowrap;';
        style += '\n    -ms-flex-wrap: none;';
        style += '\n    flex-wrap: nowrap;';
    } else if ($('.sel-flex-wrap').val() === 'wrap') {
        style += '\n\n    -webkit-flex-wrap: wrap;';
        style += '\n    -ms-flex-wrap: wrap;';
        style += '\n    flex-wrap: wrap;';
    } else {
        style += '\n\n    -webkit-flex-wrap: wrap-reverse;';
        style += '\n    -ms-flex-wrap: wrap-reverse;';
        style += '\n    flex-wrap: wrap-reverse;';
    }
    if ($('.sel-justify-content').val() === 'flex-start') {
        style += '\n\n    -webkit-box-pack: start;';
        style += '\n    -moz-box-pack: start;';
        style += '\n    -ms-flex-pack: start;';
        style += '\n    -webkit-justify-content: flex-start;';
        style += '\n    justify-content: flex-start;';
    } else if ($('.sel-justify-content').val() === 'flex-end') {
        style += '\n\n    -webkit-box-pack: end;';
        style += '\n    -moz-box-pack: end;';
        style += '\n    -ms-flex-pack: end;';
        style += '\n    -webkit-justify-content: flex-end;';
        style += '\n    justify-content: flex-end;';
    } else if ($('.sel-justify-content').val() === 'space-between') {
        style += '\n\n    -webkit-box-pack: justify;';
        style += '\n    -moz-box-pack: justify;';
        style += '\n    -ms-flex-pack: justify;';
        style += '\n    -webkit-justify-content: space-between;';
        style += '\n    justify-content: space-between;';
    } else if ($('.sel-justify-content').val() === 'space-around') {
        style += '\n\n    -ms-flex-pack: distribute;';
        style += '\n    -webkit-justify-content: space-around;';
        style += '\n    justify-content: space-around;';
    } else {
        style += '\n\n    -webkit-box-pack: center;';
        style += '\n    -moz-box-pack: center;';
        style += '\n    -ms-flex-pack: center;';
        style += '\n    -webkit-justify-content: center;';
        style += '\n    justify-content: center;';
    }
    if ($('.sel-align-items').val() === 'stretch') {
        style += '\n\n    -webkit-box-align: stretch;';
        style += '\n    -moz-box-align: stretch;';
        style += '\n    -ms-flex-align: stretch;';
        style += '\n    -webkit-align-items: stretch;';
        style += '\n    align-items: stretch;';
    } else if ($('.sel-align-items').val() === 'flex-start') {
        style += '\n\n    -webkit-box-align: start;';
        style += '\n    -moz-box-align: start;';
        style += '\n    -ms-flex-align: start;';
        style += '\n    -webkit-align-items: flex-start;';
        style += '\n    align-items: flex-start;';
    } else if ($('.sel-align-items').val() === 'flex-end') {
        style += '\n\n    -webkit-box-align: end;';
        style += '\n    -moz-box-align: end;';
        style += '\n    -ms-flex-align: end;';
        style += '\n    -webkit-align-items: flex-end;';
        style += '\n    align-items: flex-end;';
    } else if ($('.sel-align-items').val() === 'center') {
        style += '\n\n    -webkit-box-align: center;';
        style += '\n    -moz-box-align: center;';
        style += '\n    -ms-flex-align: center;';
        style += '\n    -webkit-align-items: center;';
        style += '\n    align-items: center;';
    } else {
        style += '\n\n    -webkit-box-align: baseline;';
        style += '\n    -moz-box-align: baseline;';
        style += '\n    -ms-flex-align: baseline;';
        style += '\n    -webkit-align-items: baseline;';
        style += '\n    align-items: baseline;';
    }
    if ($('.sel-align-content').val() === 'stretch') {
        style += '\n\n    -webkit-align-content: stretch;';
        style += '\n    -ms-flex-line-pack: stretch;';
        style += '\n    align-content: stretch;';
    } else if ($('.sel-align-content').val() === 'flex-start') {
        style += '\n\n    -webkit-align-content: flex-start;';
        style += '\n    -ms-flex-line-pack: start;';
        style += '\n    align-content: flex-start;';
    } else if ($('.sel-align-content').val() === 'flex-end') {
        style += '\n\n    -webkit-align-content: flex-end;';
        style += '\n    -ms-flex-line-pack: end;';
        style += '\n    align-content: flex-end;';
    } else if ($('.sel-align-content').val() === 'center') {
        style += '\n\n    -webkit-align-content: center;';
        style += '\n    -ms-flex-line-pack: center;';
        style += '\n    align-content: center;';
    } else if ($('.sel-align-content').val() === 'space-between') {
        style += '\n\n    -webkit-align-content: space-between;';
        style += '\n    -ms-flex-line-pack: space-between;';
        style += '\n    align-content: space-between;';
    } else {
        style += '\n\n    -webkit-align-content: space-around;';
        style += '\n    -ms-flex-line-pack: space-around;';
        style += '\n    align-content: space-around;';
    }
    style += '\n}';

    style += '\n\n.flexItem {';
    style += '\n    display:inline-block;';
    if ($('.inp-min-width').val().trim() !== '') {
        style += '\n    min-width:' + $('.inp-min-width').val().trim() + ';';
    }
    if ($('.inp-margin').val().trim() !== '') {
        style += '\n    margin:' + $('.inp-margin').val().trim() + ';';
    }
    if ($('.inp-padding').val().trim() !== '') {
        style += '\n    padding:' + $('.inp-padding').val().trim() + ';';
    }
    style += '\n    background-color: #0b2e13;';
    style += '\n    color: #fff;';
    style += '\n\n    -webkit-box-flex:' + flexGrow + ';';
    style += '\n    -moz-box-flex:' + flexGrow + ';';
    style += '\n    -webkit-flex-grow:' + flexGrow + ';';
    style += '\n    flex-grow:' + flexGrow + ';';
    style += '\n\n    -webkit-flex-shrink:' + flexShrink + ';';
    style += '\n    -moz-flex-shrink:' + flexShrink + ';';
    style += '\n    flex-shrink:' + flexShrink + ';';
    style += '\n\n    -webkit-flex-basis:' + flexBasis + ';';
    style += '\n    flex-basis:' + flexBasis + ';';
    style += '\n\n    /* 다음은 위 속성을 합친 속성입니다.(IE10에서는 아래 속성만 적용됩니다.) */';
    style += '\n    -webkit-flex:' + flexGrow + ' ' + flexShrink + ' ' + flexBasis + ';';
    style += '\n    -ms-flex:' + flexGrow + ' ' + flexShrink + ' ' + flexBasis + ';';
    style += '\n    flex:' + flexGrow + ' ' + flexShrink + ' ' + flexBasis + ';';
    style += '\n}';

    for (var i = 1; i <= $('.flexItem').length; i++) {
        var alignItem = $('.sel-align-self' + i).val(),
            order = $(".inp-order" + i).val().trim(),
            individualGrow = $('.inp-grow' + i).val().trim(),
            individualShrink = $('.inp-shrink' + i).val().trim(),
            individualBasis = $('.inp-basis' + i).val().trim(),
            individualWidth = $('.inp-item-width' + i).val().trim(),
            individualHeight = $('.inp-item-height' + i).val().trim();

        style += '\n\n.flexItem.item-num' + i + ' {';
        if (individualWidth !== '') {
            individualWidth = individualWidth === ''? 'auto' : individualWidth;
            style += '\n    width:' + individualWidth + ';';
        }
        if (individualHeight !== '') {
            individualHeight = individualHeight === ''? 'auto' : individualHeight;
            style += '\n    height:' + individualHeight + ';';
        }
        if (order !== '') {
            style += '\n\n    -webkit-box-ordinal-group: ' + order + ';';
            style += '\n    -moz-box-ordinal-group: ' + order + ';';
            style += '\n    -webkit-order: ' + order + ';';
            style += '\n    -ms-flex-order: ' + order + ';';
            style += '\n    order: ' + order + ';';
        }
        if (individualGrow !== '' || individualShrink !== '' || individualBasis !== '') {
            individualGrow = individualGrow === '' ? 0 : individualGrow;
            individualShrink = individualShrink === '' ? 0 : individualShrink;
            individualBasis = individualBasis === '' ? 'auto' : individualBasis;
            style += '\n\n    -webkit-box-flex:' + individualGrow + ';';
            style += '\n    -moz-box-flex:' + individualGrow + ';';
            style += '\n    -webkit-flex-grow:' + individualGrow + ';';
            style += '\n    flex-grow:' + individualGrow + ';';
            style += '\n\n    -webkit-flex-shrink:' + individualShrink + ';';
            style += '\n    -moz-flex-shrink:' + individualShrink + ';';
            style += '\n    flex-shrink:' + individualShrink + ';';
            style += '\n\n    -webkit-flex-basis:' + individualBasis + ';';
            style += '\n    flex-basis:' + individualBasis + ';';
            style += '\n\n    /* 다음은 위 속성을 합친 속성입니다.(IE10에서는 아래 속성만 적용됩니다.) */';
            style += '\n    -webkit-flex:' + individualGrow + ' ' + individualShrink + ' ' + individualBasis + ';';
            style += '\n    -ms-flex:' + individualGrow + ' ' + individualShrink + ' ' + individualBasis + ';';
            style += '\n    flex:' + individualGrow + ' ' + individualShrink + ' ' + individualBasis + ';';
        }
        if (alignItem === 'flex-start') {
            style += '\n\n    -webkit-align-self: flex-start;';
            style += '\n    -ms-flex-item-align: start;';
            style += '\n    align-self: flex-start;';
        } else if (alignItem === 'flex-end') {
            style += '\n\n    -webkit-align-self: flex-end;';
            style += '\n    -ms-flex-item-align: end;';
            style += '\n    align-self: flex-end;';
        } else if (alignItem === 'center') {
            style += '\n\n    -webkit-align-self: center;';
            style += '\n    -ms-flex-item-align: center;';
            style += '\n    align-self: center;';
        } else if (alignItem === 'baseline') {
            style += '\n\n    -webkit-align-self: baseline;';
            style += '\n    -ms-flex-item-align: baseline;';
            style += '\n    align-self: baseline;';
        } else if (alignItem === 'stretch') {
            style += '\n\n    -webkit-align-self: stretch;';
            style += '\n    -ms-flex-item-align: stretch;';
            style += '\n    align-self: stretch;';
        }
        style += '\n}';
    }

    if ($('.inp-radio[name="layout"]').eq(0).prop('checked') === true && $('.inp-min-width').val().trim() !== "") {
        for (var j = 0; j < $('.flexItem').length - 1; j++) {
            var media,
                margin = $('.inp-margin').val().trim().split(' '),
                padding = $('.inp-padding').val().trim().split(' '),
                column,
                reminder,
                diff,
                marginTop,
                marginRight,
                marginBottom,
                marginLeft,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                minWidth = parseInt($('.inp-min-width').val().trim()),
                scrollWidth = $('.inp-radio2').eq(0).prop('checked') === true ? 17 : 0;

            if (margin.length === 1) {
                marginTop = margin[0] === "" ? 0 : margin[0];
                marginRight = margin[0] === "" ? 0 : margin[0];
                marginBottom = margin[0] === "" ? 0 : margin[0];
                marginLeft = margin[0] === "" ? 0 : margin[0];
            } else if (margin.length === 2) {
                marginTop = margin[0] === "" ? 0 : margin[0];
                marginRight = margin[1] === "" ? 0 : margin[1];
                marginBottom = margin[0] === "" ? 0 : margin[0];
                marginLeft = margin[1] === "" ? 0 : margin[1];
            } else if (margin.length === 3) {
                marginTop = margin[0] === "" ? 0 : margin[0];
                marginRight = margin[1] === "" ? 0 : margin[1];
                marginBottom = margin[2] === "" ? 0 : margin[2];
                marginLeft = margin[1] === "" ? 0 : margin[1];
            } else if (margin.length === 4) {
                marginTop = margin[0] === "" ? 0 : margin[0];
                marginRight = margin[1] === "" ? 0 : margin[1];
                marginBottom = margin[2] === "" ? 0 : margin[2];
                marginLeft = margin[3] === "" ? 0 : margin[3];
            }

            if (padding.length === 1) {
                paddingTop = padding[0] === "" ? 0 : padding[0];
                paddingRight = padding[0] === "" ? 0 : padding[0];
                paddingBottom = padding[0] === "" ? 0 : padding[0];
                paddingLeft = padding[0] === "" ? 0 : padding[0];
            } else if (margin.length === 2) {
                paddingTop = padding[0] === "" ? 0 : padding[0];
                paddingRight = padding[1] === "" ? 0 : padding[1];
                paddingBottom = padding[0] === "" ? 0 : padding[0];
                paddingLeft = padding[1] === "" ? 0 : padding[1];
            } else if (margin.length === 3) {
                paddingTop = padding[0] === "" ? 0 : padding[0];
                paddingRight = padding[1] === "" ? 0 : padding[1];
                paddingBottom = padding[2] === "" ? 0 : padding[2];
                paddingLeft = padding[1] === "" ? 0 : padding[1];
            } else if (margin.length === 4) {
                paddingTop = padding[0] === "" ? 0 : padding[0];
                paddingRight = padding[1] === "" ? 0 : padding[1];
                paddingBottom = padding[2] === "" ? 0 : padding[2];
                paddingLeft = padding[3] === "" ? 0 : padding[3];
            }

            media = (($('.flexItem').length - j) * (minWidth + parseInt(marginRight) + parseInt(marginLeft))) - 1;

            column = Math.floor(media / (minWidth + parseInt(marginRight) + parseInt(marginLeft)));
            reminder = $('.flexItem').length % column;
            diff = column === 1 ? 0 : column - reminder;

            if (margin.length === 1) {
                marginTop = reminder === 0 ? 0 : marginTop;
                marginRight = reminder === 0 ? 0 : marginRight;
                marginBottom = reminder === 0 ? 0 : marginBottom;
                marginLeft = reminder === 0 ? 0 : marginLeft;
            } else if (margin.length === 2) {
                marginTop = reminder === 0 ? 0 : marginTop;
                marginRight = reminder === 0 ? 0 : marginRight;
                marginBottom = reminder === 0 ? 0 : marginBottom;
                marginLeft = reminder === 0 ? 0 : marginLeft;
            } else if (margin.length === 3) {
                marginTop = reminder === 0 ? 0 : marginTop;
                marginRight = reminder === 0 ? 0 : marginRight;
                marginBottom = reminder === 0 ? 0 : marginBottom;
                marginLeft = reminder === 0 ? 0 : marginLeft;
            } else if (margin.length === 4) {
                marginTop = reminder === 0 ? 0 : marginTop;
                marginRight = reminder === 0 ? 0 : marginRight;
                marginBottom = reminder === 0 ? 0 : marginBottom;
                marginLeft = reminder === 0 ? 0 : marginLeft;
            }

            if (padding.length === 1) {
                paddingTop = reminder === 0 ? 0 : paddingTop;
                paddingRight = reminder === 0 ? 0 : paddingRight;
                paddingBottom = reminder === 0 ? 0 : paddingBottom;
                paddingLeft = reminder === 0 ? 0 : paddingLeft;
            } else if (margin.length === 2) {
                paddingTop = reminder === 0 ? 0 : paddingTop;
                paddingRight = reminder === 0 ? 0 : paddingRight;
                paddingBottom = reminder === 0 ? 0 : paddingBottom;
                paddingLeft = reminder === 0 ? 0 : paddingLeft;
            } else if (margin.length === 3) {
                paddingTop = reminder === 0 ? 0 : paddingTop;
                paddingRight = reminder === 0 ? 0 : paddingRight;
                paddingBottom = reminder === 0 ? 0 : paddingBottom;
                paddingLeft = reminder === 0 ? 0 : paddingLeft;
            } else if (margin.length === 4) {
                paddingTop = reminder === 0 ? 0 : paddingTop;
                paddingRight = reminder === 0 ? 0 : paddingRight;
                paddingBottom = reminder === 0 ? 0 : paddingBottom;
                paddingLeft = reminder === 0 ? 0 : paddingLeft;
            }

            style += '\n\n@media screen and (max-width: ' + (media + scrollWidth) + 'px){';
            style += '\n    .flexBox:after{';
            style += '\n        display:inline-block;';
            style += '\n        min-width:' + (minWidth * diff - (parseInt(paddingRight) + parseInt(paddingLeft)) * diff) + 'px;';
            style += '\n        margin:' + marginTop + ' ' + ((parseInt(marginRight) + parseInt(marginLeft)) * diff / 2) + 'px ' + marginBottom + ';';
            style += '\n        padding:' + paddingTop + ' ' + ((parseInt(paddingRight) + parseInt(paddingLeft)) * diff / 2) + 'px ' + paddingBottom + ';';
            style += '\n        -webkit-flex:' + diff + ' 1 0px;';
            style += '\n        -ms-flex:' + diff + ' 1 0px;';
            style += '\n        flex:' + diff + ' 1 0px;';
            style += '\n        content:"";';
            style += '\n    }';
            style += '\n}';
        }
    }
    return style;
}