let mat = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
let turn = 1
var arry = []

function entro(val) {
    let boton = document.getElementById(val)
    switch (val) {
        case 1:
            if (boton.innerText === '') {
                mat[0][0] = turn
                console.log(turn);
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                turnos()
                arry.push(1)
                win()
            }
            break;
        case 2:
            if (boton.innerText === '') {
                mat[0][1] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                turnos()
                arry.push(2)

                win()
            }

            break;
        case 3:
            if (boton.innerText === '') {
                mat[0][2] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                arry.push(3)
                turnos()
                win()
            }

            break;
        case 4:
            if (boton.innerText === '') {
                mat[1][0] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                arry.push(4)
                turnos()
                win()
            }

            break;
        case 5:
            if (boton.innerText === '') {
                mat[1][1] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                turnos()
                arry.push(5)
                win()
            }

            break;
        case 6:
            if (boton.innerText === '') {
                mat[1][2] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                turnos()
                arry.push(6)
                win()
            }

            break;
        case 7:
            if (boton.innerText === '') {
                mat[2][0] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                turnos()
                arry.push(7)
                win()
            }
            break;
        case 8:
            if (boton.innerText === '') {
                mat[2][1] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                turnos()
                arry.push(8)
                win()
            }
            break;
        case 9:
            if (boton.innerText === '') {
                mat[2][2] = turn
                if (turn == 1) {
                    boton.innerText = 'X'
                } else {
                    boton.innerText = 'O'
                }
                turnos()
                arry.push(9)
                win()
            }

            break;
        default:
            break;
    }

    function turnos() {
        if (turn == 1) {
            turn = -1
        } else {
            turn = 1
        }
    }
    function win() {
        let r1 = mat[0][0] + mat[0][1] + mat[0][2]
        let r2 = mat[1][0] + mat[1][1] + mat[1][2]
        let r3 = mat[2][0] + mat[2][1] + mat[2][2]
        let r4 = mat[0][0] + mat[1][0] + mat[2][0]
        let r5 = mat[0][1] + mat[1][1] + mat[2][1]
        let r6 = mat[0][2] + mat[1][2] + mat[2][2]
        let r7 = mat[0][0] + mat[1][1] + mat[2][2]
        let r8 = mat[0][2] + mat[1][1] + mat[2][0]
        if (r1 === 3 || r2 === 3 || r3 === 3 || r4 === 3 || r5 === 3 || r6 === 3 || r7 === 3 || r8 === 3) {
            alert('Ganaron las X')
            history.go('/')
        }
        if (r1 === -3 || r2 === -3 || r3 === -3 || r4 === -3 || r5 === -3 || r6 === -3 || r7 === -3 || r8 === -3) {
            alert('Ganaron las O')
            history.go('/')
        }
        if (arry.length == 9) {
            alert('empate')
        }


    }
}