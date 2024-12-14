import { Position, Piece } from '../types/chess';

export const isValidMove = (
  from: Position,
  to: Position,
  board: (Piece | null)[][],
  currentPlayer: 'white' | 'black'
): boolean => {
  const piece = board[from.row][from.col];
  const targetPiece = board[to.row][to.col];

  if (!piece || piece.color !== currentPlayer) {
    return false;
  }

  if (targetPiece && targetPiece.color === currentPlayer) {
    return false;
  }

  const validMoves = getValidMoves(from, piece, board);
  return validMoves.some(move => move.row === to.row && move.col === to.col);
};

export const getValidMoves = (
  position: Position,
  piece: Piece,
  board: (Piece | null)[][]
): Position[] => {
  // This is a simplified version. In a real chess game, you'd need to implement
  // specific movement rules for each piece type and check for check/checkmate
  const moves: Position[] = [];
  
  // Basic pawn movement
  if (piece.type === 'pawn') {
    const direction = piece.color === 'white' ? -1 : 1;
    const newRow = position.row + direction;
    
    if (newRow >= 0 && newRow < 8 && !board[newRow][position.col]) {
      moves.push({ row: newRow, col: position.col });
      
      // Initial two-square move
      if (
        (piece.color === 'white' && position.row === 6) ||
        (piece.color === 'black' && position.row === 1)
      ) {
        const twoSquaresRow = position.row + 2 * direction;
        if (!board[twoSquaresRow][position.col]) {
          moves.push({ row: twoSquaresRow, col: position.col });
        }
      }
    }
  }
  
  return moves;
};