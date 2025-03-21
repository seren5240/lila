import { noPieceOn, whitePawnOnAnyOf } from '../assert';
import { arrow, assetUrl, pieceImg, toLevel } from '../util';
import type { StageNoID } from './list';

const stage: StageNoID = {
  key: 'pawn',
  title: i18n.learn.thePawn,
  subtitle: i18n.learn.itMovesForwardOnly,
  image: assetUrl + 'images/learn/pieces/P.svg',
  intro: i18n.learn.pawnIntro,
  illustration: pieceImg('pawn'),
  levels: [
    {
      goal: i18n.learn.pawnsMoveOneSquareOnly,
      fen: '8/8/8/P7/8/8/8/8 w - -',
      apples: 'f3',
      nbMoves: 4,
      shapes: [arrow('a5a6'), arrow('a6a7'), arrow('a7a8'), arrow('a8f3')],
      explainPromotion: true,
    },
    {
      goal: i18n.learn.mostOfTheTimePromotingToAQueenIsBest,
      fen: '8/8/8/5P2/8/8/8/8 w - -',
      apples: 'b6 c4 d7 e5 a8',
      nbMoves: 8,
    },
    {
      goal: i18n.learn.pawnsMoveForward,
      fen: '8/8/8/8/8/4P3/8/8 w - -',
      apples: 'c6 d5 d7',
      nbMoves: 4,
      shapes: [arrow('e3e4'), arrow('e4d5'), arrow('d5c6'), arrow('c6d7')],
      failure: noPieceOn('e3 e4 c6 d5 d7'),
    },
    {
      goal: i18n.learn.captureThenPromote,
      fen: '8/8/8/8/8/1P6/8/8 w - -',
      apples: 'b4 b6 c4 c6 c7 d6',
      nbMoves: 8,
    },
    {
      goal: i18n.learn.captureThenPromote,
      fen: '8/8/8/8/8/3P4/8/8 w - -',
      apples: 'c4 b5 b6 d5 d7 e6 c8',
      failure: whitePawnOnAnyOf('b5 d4 d6 c7'),
      nbMoves: 8,
    },
    {
      goal: i18n.learn.useAllThePawns,
      fen: '8/8/8/8/8/P1PP3P/8/8 w - -',
      apples: 'b5 c5 d4 e5 g4',
      nbMoves: 7,
    },
    {
      goal: i18n.learn.aPawnOnTheSecondRank,
      fen: '8/8/8/8/8/8/4P3/8 w - -',
      apples: 'd6',
      nbMoves: 3,
      shapes: [arrow('e2e4')],
      failure: whitePawnOnAnyOf('e3'),
      cssClass: 'highlight-2nd-rank',
    },
    {
      goal: i18n.learn.grabAllTheStarsNoNeedToPromote,
      fen: '8/8/8/8/8/8/2PPPP2/8 w - -',
      apples: 'c5 d5 e5 f5 d3 e4',
      nbMoves: 9,
    },
  ].map(toLevel),
  complete: i18n.learn.pawnComplete,
};
export default stage;
