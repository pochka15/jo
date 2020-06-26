/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Yegor Bugayenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var field = {
    init: function (doc) {
        doc.addEventListener(
            'keydown',
            function (evt) {
                if (evt.keyCode === 37) {
                    field.move_laser(doc, -15);
                }
                if (evt.keyCode === 39) {
                    field.move_laser(doc, +15);
                }
            }
        );
    },
    move_laser: function (doc, dx) {
        let div = doc.getElementById('laser');
        let parentRect = div.parentNode.getBoundingClientRect();
        let laserRect = div.getBoundingClientRect();

        if (dx > 0) {
            let rightBorder = parentRect.right;
            let predictedRightValue = laserRect.right + dx;
            if (predictedRightValue > rightBorder) {
                div.style.right = rightBorder + 'px'; // TODO (@pochka15): this doesn't work!?
            } else {
                div.style.left = laserRect.left + dx + 'px';
            }
        } else if (dx < 0) {
            let leftBorder = parentRect.left;
            let predictedLeftValue = laserRect.left + dx;
            if (predictedLeftValue < leftBorder) {
                div.style.left = leftBorder + 'px';
            } else {
                div.style.left = laserRect.left + dx + 'px';
            }
        }
    }
};
