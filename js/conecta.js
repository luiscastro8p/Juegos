let tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
let turnos = 1;

function fichas(val) {
    switch (val) {
        case 1:
            show(val)
            turn()
            validation()       
            break;
        case 2:
            show(val)
            turn()
            validation()
            break;
        case 3:
            show(val)
            turn()
            validation()
            break;
        case 4:
            show(val)
            turn()
            validation()
            break;
        case 5:
            show(val)
            turn()
            validation()
            break;
        case 6:
            show(val)
            turn()
            validation()
            break;
        case 7:
            show(val)
            turn()
            validation()
            break;

    }
    function show(val) {
        switch (val) {
            case 1:
                c1 = tablero[0][0]
                c2 = tablero[1][0]
                c3 = tablero[2][0]
                c4 = tablero[3][0]
                c5 = tablero[4][0]
                c6 = tablero[5][0]
                if (c1 == 0 && c2 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("1").style.background = '#f41215';
                        tablero[0][0] = 3
                    } else {
                        document.getElementById("1").style.background = '#0f11f4';
                        tablero[0][0] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("8").style.background = '#f41215';
                        tablero[1][0] = 3
                    } else {
                        document.getElementById("8").style.background = '#0f11f4';
                        tablero[1][0] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("15").style.background = '#f41215';
                        tablero[2][0] = 3
                    } else {
                        document.getElementById("15").style.background = '#0f11f4';
                        tablero[2][0] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                    console.log("entro");
                    if (turnos == 1) {
                        document.getElementById("22").style.background = '#f41215';
                        tablero[3][0] = 3
                    } else {
                        document.getElementById("22").style.background = '#0f11f4';
                        tablero[3][0] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {

                    console.log(turnos);

                    if (turnos == 1) {
                        document.getElementById("29").style.background = '#f41215';
                        tablero[4][0] = 3
                    } else {
                        document.getElementById("29").style.background = '#0f11f4';
                        tablero[4][0] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                    console.log(tablero);
                    if (turnos == 1) {
                        document.getElementById("36").style.background = '#f41215';
                        tablero[5][0] = 3
                    } else {
                        document.getElementById("36").style.background = '#0f11f4';
                        tablero[5][0] = -3
                    }
                }
                break;
            case 2:
                c1 = tablero[0][1]
                c2 = tablero[1][1]
                c3 = tablero[2][1]
                c4 = tablero[3][1]
                c5 = tablero[4][1]
                c6 = tablero[5][1]

                if (c1 == 0 && c2 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("2").style.background = '#f41215';
                        tablero[0][1] = 3
                    } else {
                        document.getElementById("2").style.background = '#0f11f4';
                        tablero[0][1] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("9").style.background = '#f41215';
                        tablero[1][1] = 3
                    } else {
                        document.getElementById("9").style.background = '#0f11f4';
                        tablero[1][1] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("16").style.background = '#f41215';
                        tablero[2][1] = 3
                    } else {
                        document.getElementById("16").style.background = '#0f11f4';
                        tablero[2][1] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                    console.log("entro");
                    if (turnos == 1) {
                        document.getElementById("23").style.background = '#f41215';
                        tablero[3][1] = 3
                    } else {
                        document.getElementById("23").style.background = '#0f11f4';
                        tablero[3][1] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                    console.log("entro");
                    if (turnos == 1) {
                        document.getElementById("30").style.background = '#f41215';
                        tablero[4][1] = 3
                    } else {
                        document.getElementById("30").style.background = '#0f11f4';
                        tablero[4][1] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                    console.log(tablero);
                    if (turnos == 1) {
                        document.getElementById("37").style.background = '#f41215';
                        tablero[5][1] = 3
                    } else {
                        document.getElementById("37").style.background = '#0f11f4';
                        tablero[5][1] = -3
                    }
                }
                break;
            case 3:
                c1 = tablero[0][2]
                c2 = tablero[1][2]
                c3 = tablero[2][2]
                c4 = tablero[3][2]
                c5 = tablero[4][2]
                c6 = tablero[5][2]

                if (c1 == 0 && c2 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("3").style.background = '#f41215';
                        tablero[0][2] = 3
                    } else {
                        document.getElementById("3").style.background = '#0f11f4';
                        tablero[0][2] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("10").style.background = '#f41215';
                        tablero[1][2] = 3
                    } else {
                        document.getElementById("10").style.background = '#0f11f4';
                        tablero[1][2] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("17").style.background = '#f41215';
                        tablero[2][2] = 3
                    } else {
                        document.getElementById("17").style.background = '#0f11f4';
                        tablero[2][2] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                    console.log("entro");
                    if (turnos == 1) {
                        document.getElementById("24").style.background = '#f41215';
                        tablero[3][2] = 3
                    } else {
                        document.getElementById("24").style.background = '#0f11f4';
                        tablero[3][2] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                    console.log("entro");
                    if (turnos == 1) {
                        document.getElementById("31").style.background = '#f41215';
                        tablero[4][2] = 3
                    } else {
                        document.getElementById("31").style.background = '#0f11f4';
                        tablero[4][2] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                    console.log(tablero);
                    if (turnos == 1) {
                        document.getElementById("38").style.background = '#f41215';
                        tablero[5][2] = 3
                    } else {
                        document.getElementById("38").style.background = '#0f11f4';
                        tablero[5][2] = -3
                    }
                }
                break;
            case 4:
                c1 = tablero[0][3]
                c2 = tablero[1][3]
                c3 = tablero[2][3]
                c4 = tablero[3][3]
                c5 = tablero[4][3]
                c6 = tablero[5][3]

                if (c1 == 0 && c2 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("4").style.background = '#f41215';
                        tablero[0][3] = 3
                    } else {
                        document.getElementById("4").style.background = '#0f11f4';
                        tablero[0][3] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("11").style.background = '#f41215';
                        tablero[1][3] = 3
                    } else {
                        document.getElementById("11").style.background = '#0f11f4';
                        tablero[1][3] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("18").style.background = '#f41215';
                        tablero[2][3] = 3
                    } else {
                        document.getElementById("18").style.background = '#0f11f4';
                        tablero[2][3] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("25").style.background = '#f41215';
                        tablero[3][3] = 3
                    } else {
                        document.getElementById("25").style.background = '#0f11f4';
                        tablero[3][3] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("32").style.background = '#f41215';
                        tablero[4][3] = 3
                    } else {
                        document.getElementById("32").style.background = '#0f11f4';
                        tablero[4][3] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                    if (turnos == 1) {
                        document.getElementById("39").style.background = '#f41215';
                        tablero[5][3] = 3
                    } else {
                        document.getElementById("39").style.background = '#0f11f4';
                        tablero[5][3] = -3
                    }
                }
                break;
            case 5:
                c1 = tablero[0][4]
                c2 = tablero[1][4]
                c3 = tablero[2][4]
                c4 = tablero[3][4]
                c5 = tablero[4][4]
                c6 = tablero[5][4]

                if (c1 == 0 && c2 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("5").style.background = '#f41215';
                        tablero[0][4] = 3
                    } else {
                        document.getElementById("5").style.background = '#0f11f4';
                        tablero[0][4] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("12").style.background = '#f41215';
                        tablero[1][4] = 3
                    } else {
                        document.getElementById("12").style.background = '#0f11f4';
                        tablero[1][4] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("19").style.background = '#f41215';
                        tablero[2][4] = 3
                    } else {
                        document.getElementById("19").style.background = '#0f11f4';
                        tablero[2][4] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("26").style.background = '#f41215';
                        tablero[3][4] = 3
                    } else {
                        document.getElementById("26").style.background = '#0f11f4';
                        tablero[3][4] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("33").style.background = '#f41215';
                        tablero[4][4] = 3
                    } else {
                        document.getElementById("33").style.background = '#0f11f4';
                        tablero[4][4] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                    if (turnos == 1) {
                        document.getElementById("40").style.background = '#f41215';
                        tablero[5][4] = 3
                    } else {
                        document.getElementById("40").style.background = '#0f11f4';
                        tablero[5][4] = -3
                    }
                }
                break;
            case 6:
                c1 = tablero[0][5]
                c2 = tablero[1][5]
                c3 = tablero[2][5]
                c4 = tablero[3][5]
                c5 = tablero[4][5]
                c6 = tablero[5][5]

                if (c1 == 0 && c2 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("6").style.background = '#f41215';
                        tablero[0][5] = 3
                    } else {
                        document.getElementById("6").style.background = '#0f11f4';
                        tablero[0][5] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("13").style.background = '#f41215';
                        tablero[1][5] = 3
                    } else {
                        document.getElementById("13").style.background = '#0f11f4';
                        tablero[1][5] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("20").style.background = '#f41215';
                        tablero[2][5] = 3
                    } else {
                        document.getElementById("20").style.background = '#0f11f4';
                        tablero[2][5] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("27").style.background = '#f41215';
                        tablero[3][5] = 3
                    } else {
                        document.getElementById("27").style.background = '#0f11f4';
                        tablero[3][5] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("34").style.background = '#f41215';
                        tablero[4][5] = 3
                    } else {
                        document.getElementById("34").style.background = '#0f11f4';
                        tablero[4][5] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                    if (turnos == 1) {
                        document.getElementById("41").style.background = '#f41215';
                        tablero[5][5] = 3
                    } else {
                        document.getElementById("41").style.background = '#0f11f4';
                        tablero[5][5] = -3
                    }
                }
                break;
            case 7:
                c1 = tablero[0][6]
                c2 = tablero[1][6]
                c3 = tablero[2][6]
                c4 = tablero[3][6]
                c5 = tablero[4][6]
                c6 = tablero[5][6]

                if (c1 == 0 && c2 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("7").style.background = '#f41215';
                        tablero[0][6] = 3
                    } else {
                        document.getElementById("7").style.background = '#0f11f4';
                        tablero[0][6] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("14").style.background = '#f41215';
                        tablero[1][6] = 3
                    } else {
                        document.getElementById("14").style.background = '#0f11f4';
                        tablero[1][6] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("21").style.background = '#f41215';
                        tablero[2][6] = 3
                    } else {
                        document.getElementById("21").style.background = '#0f11f4';
                        tablero[2][6] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("28").style.background = '#f41215';
                        tablero[3][6] = 3
                    } else {
                        document.getElementById("28").style.background = '#0f11f4';
                        tablero[3][6] = -3
                    }
                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                    if (turnos == 1) {
                        document.getElementById("35").style.background = '#f41215';
                        tablero[4][6] = 3
                    } else {
                        document.getElementById("35").style.background = '#0f11f4';
                        tablero[4][6] = -3
                    }

                }
                if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                    if (turnos == 1) {
                        document.getElementById("42").style.background = '#f41215';
                        tablero[5][6] = 3
                    } else {
                        document.getElementById("42").style.background = '#0f11f4';
                        tablero[5][6] = -3
                    }
                }
                break;
        }
    }
    function turn() {
        if (turnos == 1) {
            turnos = 2;
        } else {
            turnos = 1
        }
    }
    function validation(){
    //tablero
    c1 = tablero[0][0]; c21 = tablero[0][1]; c31 = tablero[0][2]; c41 = tablero[0][3]; c51 = tablero[0][4]; c61 = tablero[0][5]; c71 = tablero[0][6];
    c2 = tablero[1][0]; c22 = tablero[1][1]; c32 = tablero[1][2]; c42 = tablero[1][3]; c52 = tablero[1][4]; c62 = tablero[1][5]; c72 = tablero[1][6];
    c3 = tablero[2][0]; c23 = tablero[2][1]; c33 = tablero[2][2]; c43 = tablero[2][3]; c53 = tablero[2][4]; c63 = tablero[2][5]; c73 = tablero[2][6];
    c4 = tablero[3][0]; c24 = tablero[3][1]; c34 = tablero[3][2]; c44 = tablero[3][3]; c54 = tablero[3][4]; c64 = tablero[3][5]; c74 = tablero[3][6];
    c5 = tablero[4][0]; c25 = tablero[4][1]; c35 = tablero[4][2]; c45 = tablero[4][3]; c55 = tablero[4][4]; c65 = tablero[4][5]; c75 = tablero[4][6];
    c6 = tablero[5][0]; c26 = tablero[5][1]; c36 = tablero[5][2]; c46 = tablero[5][3]; c56 = tablero[5][4]; c66 = tablero[5][5]; c76 = tablero[5][6];
   
    d1 = c3 + c24 + c35 + c46; d4 = c1+ c22 + c33 + c44;d8=c21 + c32 + c43 + c54;
    d2 = c2 + c23 + c34 + c45; d5 = c22 + c33 + c44 + c55;d9=c32 + c43 + c54 + c65;
    d3 = c23 + c34 + c45 + c56; d6 = c33 + c44 + c55 + c66;d10= c43 + c54 + c65+ c76;
    if(d1 == 12 || d2 == 12 || d3 == 12 || d4 == 12 || d5 == 12 || d6== 12){
        alert('Ganó el equipo rojo')
        history.go('/') 
    }
    if(d1 == -12 || d2 == -12 || d3 == -12 || d4 == -12 || d5 == -12  || d6 == -12){
        alert('Ganó el equipo azúl')
        history.go('/') 
    }


    // resultados horizontal
    h11 = c1 + c21 + c31 + c41; h21 = c2 + c22+ c32 + c42;h31 = c3 + c23+ c33 + c43;h41 = c4 + c24+ c34 + c44;h51 = c5 + c25+ c35 + c45;
    h12 = c21 + c31 + c41 + c51; h22 = c22 + c32 + c42 + c52;h32 = c23+ c33 + c43 +c53;h42 = c24+ c34 + c44 + c54;h52 = c25+ c35 + c45 + c55;
    h13 = c31 + c41 + c51 + c61; h23 = c32 + c42 + c52; + c62;h33 = c33 + c43 + c53 + c63;h43 = c34 + c44 + c54 + c64;h53 = c35 + c45 + c55 + c65;
    h14 =  c41 + c51 + c61 + c71; h24 = c42 + c52; + c62 + c72;h34 = c43 + c53 + c63+ c73;h44 = c44 + c54 + c64 + c74;h54 = c45 + c55 + c65 + c75;
    h61 = c6 + c26 + c36 + c46;
    h62 = c26 + c36 + c46 + c56;
    h63 = c36 + c46 + c56 + c66;
    h64 = c46 + c56 + c66 + c76;

        //horizontal
        if(h11 == 12 || h12 == 12 || h13 == 12 || h14 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if(h11 == -12 || h12 == -12 || h13 == -12 || h14 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if(h21 == 12 || h22 == 12 || h23 == 12 || h24 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if(h21 == -12 || h24 == -12 || h23 == -12 || h24 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if(h31 == 12 || h32 == 12 || h33 == 12 || h34 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if(h31 == -12 || h32 == -12 || h33 == -12 || h34 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if(h41 == 12 || h42 == 12 || h43 == 12 || h44 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if(h41 == -12 || h42 == -12 || h43 == -12 || h44 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if(h51 == 12 || h52 == 12 || h53 == 12 || h54 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if(h51 == -12 || h52 == -12 || h53 == -12 || h54 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if(h61 == 12 || h62 == 12 || h63 == 12 || h64 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if(h61 == -12 || h62 == -12 || h63 == -12 || h64 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }

         // resultados vertical
    r11 = c1 + c2 + c3 + c4;  r21 = c21 + c22 + c23 + c24; r31 = c31 + c32 + c33 + c34; r41 = c41 + c42 + c43 + c44;
    r12 = c2 + c3 + c4 + c5;  r22 = c22 + c23 + c24 + c25; r32 = c32 + c33 + c34 + c35; r42 = c42 + c43 + c44 + c45;
    r13 = c3 + c4 + c5 + c6;  r23 = c23 + c24 + c25 + c26; r33 = c33 + c34 + c35 + c36; r43 = c43 + c44 + c45 + c46;
    r51 = c51 + c52 + c53 + c54;  r61 = c61 + c62 + c63 + c64;  r71 = c71 + c72 + c73 + c74;
    r52 = c52 + c53 + c54 + c55;  r62 = c62 + c63 + c64 + c65;  r72 = c72 + c73 + c74 + c75;
    r53 = c53 + c54 + c55 + c56;  r63 = c63 + c64 + c65 + c66;  r73 = c73 + c74 + c75 + c76;
        // Vertical
        if( r11 == 12 || r12 == 12 || r13 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if( r11 == -12 || r12 == -12 || r13 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if( r21 == 12 || r22 == 12 || r23 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if( r21 == -12 || r22 == -12 || r23 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if( r31 == 12 || r32 == 12 || r33 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if( r31 == -12 || r32 == -12 || r33 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if( r41 == 12 || r42 == 12 || r43 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if( r41 == -12 || r42 == -12 || r43 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if( r51 == 12 || r52 == 12 || r53 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if( r51 == -12 || r52 == -12 || r53 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }
        if( r61 == 12 || r62 == 12 || r63 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if( r61 == -12 || r62 == -12 || r63 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }        
        if( r71 == 12 || r72 == 12 || r73 == 12){
            alert('Ganó el equipo rojo')
            history.go('/') 
        }
        if( r71 == -12 || r72 == -12 || r73 == -12){
            alert('Ganó el equipo azul')
            history.go('/') 
        }    
       
        
        
        
        
        
        
                
                
                
        
                
                
                
                
                
        
        
        
        
        
        
        
        
        
      
    }
    



}