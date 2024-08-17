<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #chessboard {
            display: grid;
            grid-template-columns: repeat(8, 60px);
            grid-template-rows: repeat(8, 60px);
            gap: 0;
            border: 2px solid #333;
            margin-top: 20px;
        }

        .cell {
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
        }

        .cell:nth-child(odd) {
            background-color: #f0d9b5;
        }

        .cell:nth-child(even) {
            background-color: #b58863;
        }

        .white-piece, .black-piece {
            width: 50px;
            height: 50px;
            cursor: pointer;
        }

        .captured-pieces {
            margin-top: 20px;
        }

        #game-status {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Chess Game</h1>
    <div id="game-area">
        <div class="captured-pieces" id="white-captured">
            <h3>White Captured</h3>
        </div>
        <div id="chessboard"></div>
        <div class="captured-pieces" id="black-captured">
            <h3>Black Captured</h3>
        </div>
    </div>
    <button onclick="startGame()">Start Game</button>
    <div id="game-status"></div>
    <script>
        const chessboard = document.getElementById('chessboard');
        const whiteCaptured = document.getElementById('white-captured');
        const blackCaptured = document.getElementById('black-captured');
        const gameStatus = document.getElementById('game-status');

        const initialBoard = [
            ["black-rook", "black-knight", "black-bishop", "black-queen", "black-king", "black-bishop", "black-knight", "black-rook"],
            ["black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn"],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn"],
            ["white-rook", "white-knight", "white-bishop", "white-queen", "white-king", "white-bishop", "white-knight", "white-rook"]
        ];

        let currentPlayer = 'white';
        let selectedPiece = null;
        let selectedCell = null;

        function startGame() {
            gameStatus.innerText = "";
            createBoard();
        }

        function createBoard() {
            chessboard.innerHTML = ''; // Tahtayı temizle ve yeniden oluştur

            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.setAttribute('data-row', row);
                    cell.setAttribute('data-col', col);

                    const piece = initialBoard[row][col];
                    if (piece) {
                        const pieceElement = document.createElement('img');
                        pieceElement.src = `/images/${piece}.png`;
                        pieceElement.classList.add(piece.includes('white') ? 'white-piece' : 'black-piece');
                        pieceElement.setAttribute('data-piece', piece);
                        cell.appendChild(pieceElement);
                    }

                    cell.addEventListener('click', () => onCellClick(cell));
                    chessboard.appendChild(cell);
                }
            }
        }

        function onCellClick(cell) {
            const pieceElement = cell.querySelector('img');

            if (selectedPiece && cell !== selectedCell) {
                movePiece(selectedCell, cell);
                selectedPiece = null;
                selectedCell = null;
            } else if (pieceElement && pieceElement.classList.contains(`${currentPlayer}-piece`)) {
                selectedPiece = pieceElement;
                selectedCell = cell;
            }
        }

        function movePiece(startCell, endCell) {
            const piece = selectedPiece.getAttribute('data-piece');
            const targetPiece = endCell.querySelector('img');

            const startRow = parseInt(startCell.getAttribute('data-row'));
            const startCol = parseInt(startCell.getAttribute('data-col'));
            const endRow = parseInt(endCell.getAttribute('data-row'));
            const endCol = parseInt(endCell.getAttribute('data-col'));

            if (isValidMove(startRow, startCol, endRow, endCol, piece, targetPiece)) {
                if (targetPiece) {
                    capturePiece(targetPiece);
                }

                endCell.appendChild(selectedPiece);
                startCell.innerHTML = '';

                if (isKingInCheck()) {
                    alert("Check!");
                }

                switchPlayer();
                checkForWin();
            }
        }

        function isValidMove(startRow, startCol, endRow, endCol, piece, targetPiece) {
            if (piece.includes('pawn')) return isValidPawnMove(startRow, startCol, endRow, endCol, piece, targetPiece);
            if (piece.includes('rook')) return isValidRookMove(startRow, startCol, endRow, endCol);
            if (piece.includes('knight')) return isValidKnightMove(startRow, startCol, endRow, endCol);
            if (piece.includes('bishop')) return isValidBishopMove(startRow, startCol, endRow, endCol);
            if (piece.includes('queen')) return isValidQueenMove(startRow, startCol, endRow, endCol);
            if (piece.includes('king')) return isValidKingMove(startRow, startCol, endRow, endCol);

            return false;
        }

        function isValidPawnMove(startRow, startCol, endRow, endCol, piece, targetPiece) {
            const direction = piece.includes('white') ? -1 : 1;
            const startRowForPawn = piece.includes('white') ? 6 : 1;

            if (startCol === endCol) {
                if (startRow + direction === endRow && !targetPiece) return true;
                if (startRow === startRowForPawn && startRow + 2 * direction === endRow && !targetPiece) return true;
            }

            if (Math.abs(startCol - endCol) === 1 && startRow + direction === endRow && targetPiece) {
                return true;
            }

            return false;
        }

        function isValidRookMove(startRow, startCol, endRow, endCol) {
            if (startRow !== endRow && startCol !== endCol) return false;

            if (startRow === endRow) {
                const step = startCol < endCol ? 1 : -1;
                for (let col = startCol + step; col !== endCol; col += step) {
                    if (document.querySelector(`[data-row="${startRow}"][data-col="${col}"]`).innerHTML !== '') return false;
                }
            } else {
                const step = startRow < endRow ? 1 : -1;
                for (let row = startRow + step; row !== endRow; row += step) {
                    if (document.querySelector(`[data-row="${row}"][data-col="${startCol}"]`).innerHTML !== '') return false;
                }
            }

            return true;
        }

        function isValidKnightMove(startRow, startCol, endRow, endCol) {
            const rowDiff = Math.abs(startRow - endRow);
            const colDiff = Math.abs(startCol - endCol);
            return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
        }

        function isValidBishopMove(startRow, startCol, endRow, endCol) {
            if (Math.abs(startRow - endRow) !== Math.abs(startCol - endCol)) return false;

            const rowStep = startRow < endRow ? 1 : -1;
            const colStep = startCol < endCol ? 1 : -1;
            let row = startRow + rowStep;
            let col = startCol + colStep;

            while (row !== endRow && col !== endCol) {
                if (document.querySelector(`[data-row="${row}"][data-col="${col}"]`).innerHTML !== '') return false;
                row += rowStep;
                col += colStep;
            }

            return true;
        }

        function isValidQueenMove(startRow, startCol, endRow, endCol) {
            return isValidRookMove(startRow, startCol, endRow, endCol) || isValidBishopMove(startRow, startCol, endRow, endCol);
        }

        function isValidKingMove(startRow, startCol, endRow, endCol) {
            const rowDiff = Math.abs(startRow - endRow);
            const colDiff = Math.abs(startCol - endCol);

            // Rok (Castling) hamlesi
            if (rowDiff === 0 && colDiff === 2) {
                if (startCol < endCol) {
                    // Kısa Rok (Kingside)
                    const rookCell = document.querySelector(`[data-row="${startRow}"][data-col="7"]`);
                    const rookPiece = rookCell.querySelector('img');
                    if (rookPiece && rookPiece.getAttribute('data-piece') === `${currentPlayer}-rook`) {
                        // Arada taş olmamalı
                        const betweenCell = document.querySelector(`[data-row="${startRow}"][data-col="${startCol + 1}"]`);
                        if (betweenCell.innerHTML === '') {
                            // Rok yapılabilir
                            movePiece(rookCell, document.querySelector(`[data-row="${startRow}"][data-col="${startCol + 1}"]`));
                            return true;
                        }
                    }
                } else {
                    // Uzun Rok (Queenside)
                    const rookCell = document.querySelector(`[data-row="${startRow}"][data-col="0"]`);
                    const rookPiece = rookCell.querySelector('img');
                    if (rookPiece && rookPiece.getAttribute('data-piece') === `${currentPlayer}-rook`) {
                        // Arada taş olmamalı
                        const betweenCell1 = document.querySelector(`[data-row="${startRow}"][data-col="${startCol - 1}"]`);
                        const betweenCell2 = document.querySelector(`[data-row="${startRow}"][data-col="${startCol - 2}"]`);
                        if (betweenCell1.innerHTML === '' && betweenCell2.innerHTML === '') {
                            // Rok yapılabilir
                            movePiece(rookCell, document.querySelector(`[data-row="${startRow}"][data-col="${startCol - 1}"]`));
                            return true;
                        }
                    }
                }
            }

            return rowDiff <= 1 && colDiff <= 1;
        }

        function isKingInCheck() {
            const kingCell = document.querySelector(`[data-piece="${currentPlayer}-king"]`);
            const kingRow = parseInt(kingCell.getAttribute('data-row'));
            const kingCol = parseInt(kingCell.getAttribute('data-col'));

            const opponent = currentPlayer === 'white' ? 'black' : 'white';
            const opponentPieces = document.querySelectorAll(`img[data-piece^="${opponent}"]`);

            for (const piece of opponentPieces) {
                const startRow = parseInt(piece.parentElement.getAttribute('data-row'));
                const startCol = parseInt(piece.parentElement.getAttribute('data-col'));
                if (isValidMove(startRow, startCol, kingRow, kingCol, piece.getAttribute('data-piece'), null)) {
                    return true;
                }
            }

            return false;
        }

        function capturePiece(pieceElement) {
            const piece = pieceElement.getAttribute('data-piece');
            if (piece.includes('white')) {
                whiteCaptured.appendChild(pieceElement.cloneNode(true));
            } else {
                blackCaptured.appendChild(pieceElement.cloneNode(true));
            }
        }

        function switchPlayer() {
            currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
            updateGameStatus();
        }

        function updateGameStatus() {
            gameStatus.innerText = `${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}'s Turn`;
        }

        function checkForWin() {
            const whiteKing = document.querySelector('[data-piece="white-king"]');
            const blackKing = document.querySelector('[data-piece="black-king"]');

            if (!whiteKing) {
                gameStatus.innerText = "Black wins!";
                endGame();
            } else if (!blackKing) {
                gameStatus.innerText = "White wins!";
                endGame();
            }
        }

        function endGame() {
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.replaceWith(cell.cloneNode(true)); // Tüm click eventlerini temizler
            });
        }

        createBoard();
        updateGameStatus();
    </script>
</body>
</html>
