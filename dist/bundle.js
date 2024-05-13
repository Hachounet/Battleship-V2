(() => {
  'use strict';
  var e = {
      11: (e, t, s) => {
        s.d(t, { A: () => o });
        var r = s(601),
          a = s.n(r),
          n = s(314),
          i = s.n(n)()(a());
        i.push([
          e.id,
          '*{margin:0;padding:0;box-sizing:border-box}html{height:100vh;width:100vw}body{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:80% 1fr;width:100%;height:100%;background-image:linear-gradient(to right top, #000000, #131213, #1f1e1f, #2b2a2c, #363639, #363639, #363639, #363639, #2b2a2c, #1f1e1f, #131213, #000000)}body button{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:14px;min-width:8rem;height:2.5rem;font-weight:500;background:#1f2733;color:#fff;border:none;position:relative;overflow:hidden;border-radius:.6em;cursor:pointer}body .gradient{position:absolute;width:100%;height:100%;left:0;top:0;border-radius:.6em;margin-top:-0.25em;background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))}body .label{position:relative;top:-1px}body .transition{transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:600ms;background-color:rgba(16,138,97,.6);border-radius:9999px;width:0;height:0;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}body button:hover .transition{width:16.5em;height:16.5em}body button:active{transform:scale(0.95)}body #menu-part{height:100%;width:100%;grid-column:1/3;padding:1rem;display:grid;grid-template-columns:2fr 1fr 2fr;align-items:center}body #menu-part #message-div{width:100%;border-radius:12px;grid-column:2;grid-row:1;text-align:center;justify-self:center;align-self:baseline;border:1px solid #fff;color:#fff;font-size:1.25rem;padding:.5rem 3rem}body #menu-part #menu-options{grid-column:2;display:flex;justify-self:center;align-self:baseline;width:100%;justify-content:space-evenly}body .player-parts{width:100%;height:100%;display:flex;flex-direction:column;gap:2rem;align-items:center;justify-content:center}body .player-parts p{color:#fff;font-size:1.8rem}body .player-parts #GBP1,body .player-parts #GBP2{display:grid;grid-template-columns:repeat(10, 1fr);width:500px;height:500px}body .player-parts #GBP1 .cells,body .player-parts #GBP2 .cells{border:1px solid rgba(8,6,6,.123);background-color:#000}body .player-parts #GBP1 .empty,body .player-parts #GBP2 .empty{background-color:rgba(61,172,172,.993)}body .player-parts #GBP1 .empty:hover,body .player-parts #GBP2 .empty:hover{background-color:rgba(53,207,207,.993)}body .player-parts #GBP1 .ships,body .player-parts #GBP2 .ships{background-color:#d1b088}body .player-parts #GBP1 .ships:hover,body .player-parts #GBP2 .ships:hover{background-color:#ecc08b}body .player-parts #GBP1 .touched,body .player-parts #GBP2 .touched{background-color:#8b2222}body .player-parts #GBP1 .touched:hover,body .player-parts #GBP2 .touched:hover{background-color:#bd2222}body .player-parts #GBP1 .w-touched,body .player-parts #GBP2 .w-touched{background-color:#9b9109}body .player-parts #GBP1 .w-touched:hover,body .player-parts #GBP2 .w-touched:hover{background-color:#c9bc09}body .player-parts #GBP1 .finished,body .player-parts #GBP2 .finished{background-color:#5f9ea0}',
          '',
        ]);
        const o = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var s = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (s += '@supports ('.concat(t[4], ') {')),
                  t[2] && (s += '@media '.concat(t[2], ' {')),
                  r &&
                    (s += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (s += e(t)),
                  r && (s += '}'),
                  t[2] && (s += '}'),
                  t[4] && (s += '}'),
                  s
                );
              }).join('');
            }),
            (t.i = function (e, s, r, a, n) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var c = this[o][0];
                  null != c && (i[c] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && i[l[0]]) ||
                  (void 0 !== n &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = n)),
                  s &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = s))
                      : (l[2] = s)),
                  a &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = a))
                      : (l[4] = ''.concat(a))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var t = [];
        function s(e) {
          for (var s = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              s = r;
              break;
            }
          return s;
        }
        function r(e, r) {
          for (var n = {}, i = [], o = 0; o < e.length; o++) {
            var c = e[o],
              d = r.base ? c[0] + r.base : c[0],
              l = n[d] || 0,
              h = ''.concat(d, ' ').concat(l);
            n[d] = l + 1;
            var p = s(h),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(u);
            else {
              var y = a(u, r);
              (r.byIndex = o),
                t.splice(o, 0, { identifier: h, updater: y, references: 1 });
            }
            i.push(h);
          }
          return i;
        }
        function a(e, t) {
          var s = t.domAPI(t);
          return (
            s.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                s.update((e = t));
              } else s.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var n = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < n.length; i++) {
              var o = s(n[i]);
              t[o].references--;
            }
            for (var c = r(e, a), d = 0; d < n.length; d++) {
              var l = s(n[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            n = c;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, s) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var s = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                s instanceof window.HTMLIFrameElement
              )
                try {
                  s = s.contentDocument.head;
                } catch (e) {
                  s = null;
                }
              t[e] = s;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(s);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, s) => {
        e.exports = function (e) {
          var t = s.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (s) {
              !(function (e, t, s) {
                var r = '';
                s.supports && (r += '@supports ('.concat(s.supports, ') {')),
                  s.media && (r += '@media '.concat(s.media, ' {'));
                var a = void 0 !== s.layer;
                a &&
                  (r += '@layer'.concat(
                    s.layer.length > 0 ? ' '.concat(s.layer) : '',
                    ' {'
                  )),
                  (r += s.css),
                  a && (r += '}'),
                  s.media && (r += '}'),
                  s.supports && (r += '}');
                var n = s.sourceMap;
                n &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, s);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function s(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var n = (t[r] = { id: r, exports: {} });
    return e[r](n, n.exports, s), n.exports;
  }
  (s.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return s.d(t, { a: t }), t;
  }),
    (s.d = (e, t) => {
      for (var r in t)
        s.o(t, r) &&
          !s.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s.nc = void 0),
    (() => {
      class e {
        constructor(e, t, s) {
          (this.P1keys = Object.keys(e)),
            (this.P2Keys = Object.keys(t)),
            (this.controller = s),
            (this.body = document.querySelector('body')),
            this.generatePlayerParts(),
            (this.leftPart = document.getElementById('left-part')),
            (this.rightPart = document.getElementById('right-part')),
            this.generateInputsPlayers(),
            this.createGBDiv(),
            (this.GBDivP1 = document.getElementById('GBP1')),
            (this.GBDivP2 = document.getElementById('GBP2')),
            this.generateGB1(),
            this.generateGB2(),
            this.generateMenuPart(),
            (this.menuPart = document.getElementById('menu-part')),
            this.generateMessageBox(),
            this.generateMenuOptions();
        }
        changeMessage(e) {
          document.getElementById('message-div').textContent = e;
        }
        createGBDiv() {
          const e = document.createElement('div'),
            t = document.createElement('div');
          (e.id = 'GBP1'),
            (t.id = 'GBP2'),
            this.leftPart.append(e),
            this.rightPart.append(t);
        }
        sortArray(e) {
          let t = e[0],
            s = 0;
          const r = [];
          for (r.push(t); 'J10' !== t; ) {
            const a = e.indexOf(t) + 10;
            (t = e.at(a)),
              void 0 === t
                ? ((s += 1), (t = e[s]), r.push(t))
                : ((t = e.at(a)), r.push(t));
          }
          return r;
        }
        generateGB1() {
          this.sortArray(this.P1keys).forEach((e) => {
            const t = document.createElement('div');
            t.classList.add('cells'),
              (t.id = 'GB1'.concat(e)),
              this.GBDivP1.append(t);
          });
        }
        generateGB2() {
          const { GBDivP2: e } = this,
            t = e;
          this.sortArray(this.P2Keys).forEach((e) => {
            const s = document.createElement('div');
            s.classList.add('cells'), (s.id = 'GB2'.concat(e)), t.append(s);
          });
        }
        generatePlayerParts() {
          const e = document.createElement('div'),
            t = document.createElement('div');
          (e.id = 'left-part'),
            (t.id = 'right-part'),
            e.classList.add('player-parts'),
            t.classList.add('player-parts'),
            this.body.append(e, t);
        }
        generateInputsPlayers() {
          const e = document.createElement('p');
          (e.textContent = 'Player 1'), this.leftPart.append(e);
          const t = document.createElement('p');
          (t.textContent = 'Opponent'), this.rightPart.append(t);
        }
        generateMenuPart() {
          const e = document.createElement('div');
          (e.id = 'menu-part'), this.body.append(e);
        }
        generateMessageBox() {
          const e = document.createElement('div');
          e.id = 'message-div';
          const t = document.createElement('p');
          (t.textContent = 'Once done, click on a cell to begin the fight !'),
            e.append(t),
            this.menuPart.append(e);
        }
        generateMenuOptions() {
          const e = document.createElement('div');
          e.id = 'menu-options';
          const t = document.createElement('button'),
            s = document.createElement('span'),
            r = document.createElement('span'),
            a = document.createElement('span');
          s.classList.add('transition'),
            r.classList.add('gradient'),
            a.classList.add('label'),
            (a.textContent = 'Randomize Ships / (Re)start'),
            t.append(s, r, a),
            e.append(t),
            this.menuPart.append(e),
            t.addEventListener('click', () => {
              this.controller.restart();
            });
        }
        destroy() {
          document.querySelector('body').innerHTML = '';
        }
      }
      class t {
        constructor(e, t = 0, s = !1) {
          (this.length = e),
            (this.hitNumb = t),
            (this.sunk = s),
            (this.hitFn = this.hit),
            (this.sunkFn = this.isSunk),
            (this.id = `id${Math.random().toString(16).slice(2)}`);
        }
        hit() {
          this.hitNumb += 1;
        }
        isSunk() {
          return this.hitNumb === this.length && ((this.sunk = !0), !0);
        }
      }
      function r(e, t) {
        const s = Math.ceil(e),
          r = Math.floor(t);
        return Math.floor(Math.random() * (r - s + 1) + s);
      }
      function a() {
        const e = r(65, 74),
          t = r(1, 10);
        return String.fromCharCode(e).concat(t.toString());
      }
      class n {
        constructor(e = new Set(), t = []) {
          (this.missedLogs = e),
            (this.shipsLogs = t),
            (this.adjacencyList = {}),
            this.populateGraph(),
            this.populateEdge(),
            this.randomizedShips();
        }
        randomizedShips() {
          const e = [2, 2, 3, 3, 3, 3, 4, 4, 6];
          for (; 0 !== e.length; ) {
            const s = a(),
              n = 1 === r(1, 2) ? 'row' : 'col',
              i =
                0 === (t = e).length
                  ? 'Error'
                  : t[Math.floor(Math.random() * t.length)];
            if (
              'col' === n &&
              !0 === this.checkColPosForRandomPlacements(s, i)
            ) {
              this.placeShip(s, i, 'col');
              const t = e.indexOf(i);
              e.splice(t, 1);
            }
            if (
              'row' === n &&
              !0 === this.checkRowPosForRandomPlacements(s, i)
            ) {
              this.placeShip(s, i, 'row');
              const t = e.indexOf(i);
              e.splice(t, 1);
            }
          }
          var t;
        }
        checkRowPosForRandomPlacements(e, t) {
          const s = e.slice(0, 1).charCodeAt(0),
            r = e.slice(1),
            a = [];
          let n = 0;
          for (; n !== t; )
            this.adjacencyList.hasOwnProperty(
              String.fromCharCode(s)
                .concat(Number(r) + n)
                .toString()
            ) &&
            null ===
              this.adjacencyList[
                String.fromCharCode(s)
                  .concat(Number(r) + n)
                  .toString()
              ].slot
              ? a.push(!0)
              : a.push(!1),
              (n += 1);
          return a.every((e) => !0 === e);
        }
        checkColPosForRandomPlacements(e, t) {
          const s = e.slice(0, 1).charCodeAt(0),
            r = e.slice(1),
            a = [];
          let n = 0;
          for (; n !== t; )
            this.adjacencyList.hasOwnProperty(
              String.fromCharCode(s + n).concat(r)
            ) &&
            null ===
              this.adjacencyList[String.fromCharCode(s + n).concat(r)].slot
              ? a.push(!0)
              : a.push(!1),
              (n += 1);
          return a.every((e) => !0 === e);
        }
        placeShip(e, s, r) {
          const a = new t(s, 0),
            n = e.slice(0, 1),
            i = e.slice(1);
          if (s > 1) {
            if ('row' === r)
              for (let e = s - 1; e > 0; e -= 1) {
                if (
                  void 0 ===
                  this.adjacencyList[n.concat(Number(Number(i) + e).toString())]
                )
                  throw new Error('Cannot be outer bounds');
                this.adjacencyList[
                  n.concat(Number(Number(i) + e).toString())
                ].slot = a;
              }
            if ('col' === r)
              for (let e = s - 1; e > 0; e -= 1) {
                if (
                  void 0 ===
                  this.adjacencyList[
                    String.fromCharCode(n.charCodeAt() + e).concat(i.toString())
                  ]
                )
                  throw new Error('Invalid position, cannot be outer bounds.');
                this.adjacencyList[
                  String.fromCharCode(n.charCodeAt() + e).concat(i.toString())
                ].slot = a;
              }
          }
          (this.adjacencyList[e].slot = a), this.shipsLogs.push(a);
        }
        receiveAttack(e) {
          let t;
          if (null === this.adjacencyList[e].slot)
            return (
              this.missedLogs.add(e),
              (t = !1),
              (this.adjacencyList[e].status = 'Wtouched'),
              t
            );
          if ('Wtouched' === this.adjacencyList[e].status) return (t = !1), t;
          if (this.adjacencyList[e].slot.sunkFn()) return (t = !0), t;
          if ('Stouched' === this.adjacencyList[e].status) return (t = !1), t;
          if (
            (this.adjacencyList[e].slot.hitFn(),
            (this.adjacencyList[e].status = 'Stouched'),
            null !== this.adjacencyList[e].slot &&
              !0 === this.adjacencyList[e].slot.sunkFn())
          ) {
            const e = this.shipsLogs.findIndex((e) => !0 === e.sunk);
            return this.shipsLogs.splice(e, 1), (t = 'SUNK'), t;
          }
          return (t = !0), t;
        }
        allSunk() {
          let e = !1;
          return 0 === this.shipsLogs.length ? ((e = !0), e) : e;
        }
        addVertex(e) {
          this.adjacencyList[e] ||
            (this.adjacencyList[e] = {
              neighbors: new Set(),
              slot: null,
              status: null,
            });
        }
        addEdge(e, t) {
          return this.adjacencyList[e]
            ? this.adjacencyList[t]
              ? (this.adjacencyList[e].neighbors.add(t),
                this.adjacencyList[t].neighbors.add(e),
                !0)
              : "This vertex2 doesn't exists"
            : "This vertex1 doesn't exists";
        }
        populateGraph() {
          for (let e = 65; e < 75; e += 1)
            for (let t = 1; t < 11; t += 1) {
              const s = String.fromCharCode(e).concat(t.toString());
              this.addVertex(s);
            }
        }
        populateEdge() {
          Object.keys(this.adjacencyList).forEach((e) => {
            const t = e.slice(0, 1),
              s = e.slice(1),
              r = String.fromCharCode(t.charCodeAt() + 1),
              a = (Number(s) + 1).toString(),
              n = r.concat(s),
              i = t.concat(a);
            this.addEdge(e, n), this.addEdge(e, i);
          });
        }
      }
      class i {
        constructor(e = []) {
          (this.allLogs = new Set()),
            (this.queue = e),
            (this.lastMove = null),
            (this.lastResult = !1);
        }
        play(e, t) {
          let s = 0;
          if (!0 === e) {
            for (s = a(); this.allLogs.has(s); ) s = a();
            return this.allLogs.add(s), (this.lastMove = s), s;
          }
          return !1 === e
            ? (this.allLogs.add(t), (this.lastMove = t), (s = t), s)
            : s;
        }
        logic(e) {
          let t = 0;
          if (!1 === this.lastResult && 0 === this.queue.length)
            return (t = this.play(!0)), t;
          if (!0 === this.lastResult && 0 === this.queue.length) {
            e[this.lastMove].neighbors.forEach((e) => {
              this.allLogs.has(e) || this.queue.push(e);
            });
            const s = this.queue.shift();
            return (t = this.play(!1, s)), t;
          }
          if (!1 === this.lastResult && 0 !== this.queue.length) {
            const e = this.queue.shift();
            return (t = this.play(!1, e)), t;
          }
          if (!0 === this.lastResult && 0 !== this.queue.length) {
            const s = this.queue.shift();
            return (
              e[this.lastMove].neighbors.forEach((e) => {
                this.allLogs.has(e) || this.queue.push(e);
              }),
              (t = this.play(!1, s)),
              t
            );
          }
          return 'SUNK' === this.lastResult
            ? ((this.queue = []), (t = this.play(!0)), t)
            : t;
        }
      }
      class o {
        constructor(e) {
          (this.Gameboard = new n()),
            (this.player = e),
            (this.gamemode = !1),
            this.switchAI();
        }
        switchAI() {
          'AI' === this.player
            ? (this.gamemode = new i())
            : (this.gamemode = !1);
        }
      }
      class c {
        constructor(e, t, s, r, a, n, i) {
          (this.p1entries = e),
            (this.p2entries = t),
            (this.p1missedLogs = s),
            (this.p2missedLogs = r),
            (this.playerTurn = a),
            (this.addEvent = n),
            (this.controller = i),
            this.renderBattlefield(this.p1entries, this.p2entries),
            this.checkBeforeAddEvent();
        }
        checkBeforeAddEvent() {
          !0 === this.addEvent && this.addEventGBP2();
        }
        addEventGBP2() {
          document
            .getElementById('GBP2')
            .querySelectorAll('*')
            .forEach((e) => {
              e.addEventListener(
                'click',
                (e) => {
                  this.controller.receiveAttackPos(
                    e.target.id.toString().slice(3)
                  );
                },
                { once: !0 }
              );
            });
        }
        endRender() {
          document.querySelectorAll('.cells').forEach((e) => {
            e.classList.remove('empty', 'ships', 'touched', 'w-touched'),
              e.classList.add('finished');
          });
        }
        renderBattlefield(e, t) {
          const s = t;
          e.forEach((e) => {
            const { slot: t } = e[1],
              s = e[0],
              r = document.getElementById('GB1'.concat(s));
            null === t ? r.classList.add('empty') : r.classList.add('ships'),
              this.p1missedLogs.has(s)
                ? r.classList.add('w-touched')
                : 'Stouched' === e[1].status && r.classList.add('touched');
          }),
            s.forEach((e) => {
              const t = e[0],
                s = document.getElementById('GB2'.concat(t));
              s.classList.add('empty'),
                this.p2missedLogs.has(t)
                  ? s.classList.add('w-touched')
                  : 'Stouched' === e[1].status && s.classList.add('touched');
            });
        }
      }
      var d = s(72),
        l = s.n(d),
        h = s(825),
        p = s.n(h),
        u = s(659),
        y = s.n(u),
        m = s(56),
        g = s.n(m),
        f = s(540),
        b = s.n(f),
        v = s(113),
        L = s.n(v),
        P = s(11),
        G = {};
      (G.styleTagTransform = L()),
        (G.setAttributes = g()),
        (G.insert = y().bind(null, 'head')),
        (G.domAPI = p()),
        (G.insertStyleElement = b()),
        l()(P.A, G),
        P.A && P.A.locals && P.A.locals,
        new (class {
          constructor(t = 'Player 1') {
            (this.playerTurn = t),
              (this.player1 = new o('Player 1')),
              (this.player2 = new o('AI')),
              (this.p1keys = this.player1.Gameboard.adjacencyList),
              (this.p2keys = this.player2.Gameboard.adjacencyList),
              (this.p1entries = Object.entries(
                this.player1.Gameboard.adjacencyList
              )),
              (this.p2entries = Object.entries(
                this.player2.Gameboard.adjacencyList
              )),
              (this.GRender = new e(this.p1keys, this.p2keys, this)),
              (this.render = new c(
                this.p1entries,
                this.p2entries,
                this.player1.Gameboard.missedLogs,
                this.player2.Gameboard.missedLogs,
                this.playerTurn,
                !0,
                this
              ));
          }
          restart() {
            (this.player1 = new o('Player 1')),
              (this.player2 = new o('AI')),
              (this.p1keys = this.player1.Gameboard.adjacencyList),
              (this.p2keys = this.player2.Gameboard.adjacencyList),
              (this.p1entries = Object.entries(
                this.player1.Gameboard.adjacencyList
              )),
              (this.p2entries = Object.entries(
                this.player2.Gameboard.adjacencyList
              )),
              this.GRender.destroy(),
              (this.GRender = new e(this.p1keys, this.p2keys, this)),
              (this.render = new c(
                this.p1entries,
                this.p2entries,
                this.player1.Gameboard.missedLogs,
                this.player2.Gameboard.missedLogs,
                this.playerTurn,
                !0,
                this
              ));
          }
          switchTurn() {
            this.playerTurn =
              'Player 1' === this.playerTurn ? 'AI' : 'Player 1';
          }
          callGeneralRenderCellStatus() {
            this.GRender.messageInfos();
          }
          callGeneralRenderSwitchTurnMsg(e) {
            !0 === e && (e = "You've hit something !"),
              !1 === e && (e = 'Deep in water, Captain !'),
              'SUNK' === e && (e = ' We got one ! For democracy !'),
              this.GRender.changeMessage(e);
          }
          receiveAttackPos(e) {
            if ('Player 1' === this.playerTurn) {
              const t = this.player2.Gameboard.receiveAttack(e);
              this.callGeneralRenderSwitchTurnMsg(t), this.endOfTurn();
            }
            if ('AI' === this.playerTurn) {
              const t = this.player1.Gameboard.receiveAttack(e);
              (this.player2.gamemode.lastResult = t), this.endOfTurn();
            }
          }
          generateNewRender() {
            this.render = new c(
              this.p1entries,
              this.p2entries,
              this.player1.Gameboard.missedLogs,
              this.player2.Gameboard.missedLogs,
              this.playerTurn,
              !1,
              this
            );
          }
          endOfTurn() {
            this.generateNewRender(),
              !1 === this.endOfGame() &&
                (this.switchTurn(),
                'AI' === this.playerTurn && this.makeAIPlay());
          }
          makeAIPlay() {
            const e = this.player1.Gameboard.adjacencyList,
              t = this.player2.gamemode.logic(e);
            this.receiveAttackPos(t);
          }
          endOfGame() {
            let e = !1;
            return this.player1.Gameboard.allSunk() ||
              this.player2.Gameboard.allSunk()
              ? (this.GRender.changeMessage(`${this.playerTurn} have win !`),
                this.callRenderToEnd(),
                (e = !0),
                (this.playerTurn = 'Player 1'),
                e)
              : e;
          }
          callRenderToEnd() {
            this.generateNewRender(), this.render.endRender();
          }
        })();
    })();
})();
