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
            clickUp(val)       
            break;
        case 2:
            clickUp(val)
            break;
        case 3:
            clickUp(val)
            break;
        case 4:
            clickUp(val)
            break;
        case 5:
            clickUp(val)
            break;
        case 6:
            clickUp(val)
            break;
        case 7:
            clickUp(val)
            break;

    }

    function clickUp(val) {
        show(val)
            turn()
            validation()
    }
    function drawcolor(cor1, cor2,id){
        if (turnos == 1) {
            document.getElementById(id).style.background = '#f41215';
            tablero[cor1][cor2] = 3
        } else {
            document.getElementById(id).style.background = '#0f11f4';
            tablero[cor1][cor2] = -3
        }
    }

    function calHeight(val){
        c1 = tablero[0][val-1]
        c2 = tablero[1][val-1]
        c3 = tablero[2][val-1]
        c4 = tablero[3][val-1]
        c5 = tablero[4][val-1]
        c6 = tablero[5][val-1]
        alturaencontrada = false;
        let i = 0;
        let col = val - 1
        while(i < 6){
            switch (i) {
                case 0:
                    if (c1 == 0 && c2 !== 0) {
                        drawcolor(i,col,val)
                        alturaencontrada = true; 
                                   
                     }
                    break;
                case 1:
                    if (c1 === 0 && c2 === 0 && c3 !== 0) {
                        drawcolor(i,col,val)
                        alturaencontrada = true;
                     }
                    break;
                case 2:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 !== 0) {
                        drawcolor(i,col,val)
                        alturaencontrada = true;
                     }
                        break;
                case 3:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 !== 0) {
                        drawcolor(i,col,val)
                        alturaencontrada = true;
                    }
                        break;
                case 4:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 !== 0) {
                        drawcolor(i,col,val)
                        alturaencontrada = true;  
                    }  
                        break;
                case 5:
                    if (c1 === 0 && c2 === 0 && c3 === 0 && c4 === 0 && c5 === 0 && c6 == 0) {
                        drawcolor(i,col,val)
                        alturaencontrada = true;
                    }  
                        break;
                default:
                    break;
            }
            i++
            val += 7                      
        }        
    }
    function show(val) {
        switch (val) {
            case 1:
                calHeight(val)
                break;
            case 2:
                calHeight(val)
                break;
            case 3:
                calHeight(val)
                break;
            case 4:
                calHeight(val)
                break;
            case 5:
                calHeight(val)
                break;
            case 6:
                calHeight(val)
                break;
            case 7:
                calHeight(val)
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

    function ganador(){
        let name = '';
        turnos === 1 ? name = 'azul': name = 'rojo'
        alert('El ganador es '+ name)
        history.go('/')
    }
    function validation(){
        let suma = turnos === 1 ? -12 : 12
        console.log(suma);
        
        
    //tablero
    c1 = tablero[0][0]; c21 = tablero[0][1]; c31 = tablero[0][2]; c41 = tablero[0][3]; c51 = tablero[0][4]; c61 = tablero[0][5]; c71 = tablero[0][6];
    c2 = tablero[1][0]; c22 = tablero[1][1]; c32 = tablero[1][2]; c42 = tablero[1][3]; c52 = tablero[1][4]; c62 = tablero[1][5]; c72 = tablero[1][6];
    c3 = tablero[2][0]; c23 = tablero[2][1]; c33 = tablero[2][2]; c43 = tablero[2][3]; c53 = tablero[2][4]; c63 = tablero[2][5]; c73 = tablero[2][6];
    c4 = tablero[3][0]; c24 = tablero[3][1]; c34 = tablero[3][2]; c44 = tablero[3][3]; c54 = tablero[3][4]; c64 = tablero[3][5]; c74 = tablero[3][6];
    c5 = tablero[4][0]; c25 = tablero[4][1]; c35 = tablero[4][2]; c45 = tablero[4][3]; c55 = tablero[4][4]; c65 = tablero[4][5]; c75 = tablero[4][6];
    c6 = tablero[5][0]; c26 = tablero[5][1]; c36 = tablero[5][2]; c46 = tablero[5][3]; c56 = tablero[5][4]; c66 = tablero[5][5]; c76 = tablero[5][6];
   
    d1 = c3 + c24 + c35 + c46; 
    d2 = c2 + c23 + c34 + c45; 
    d3 = c23 + c34 + c45 + c56; 
    d4 = c1 + c22 + c33 + c44;
    d5 = c22 + c33 + c44 + c55;
    d6 = c33 + c44 + c55 + c66;
    d8 = c21 + c32 + c43 + c54;
    d9 = c32 + c43 + c54 + c65;
    d10 = c43 + c54 + c65+ c76;
    d11 = c31 +c42 +c53 + c64;
    d12 = c42 +c53 + c64 +c75;
    d13 = c41 + c52 + c63 + c74;
    if(d1 == suma || d2 == suma || d3 == suma || d4 == suma || d5 == suma || d6== suma || d8== suma ||d9 ==suma|| d10 == suma || d11 == suma|| d12 == suma || d13 == suma ){
        ganador()
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
        if(h11 == suma || h12 == suma || h13 == suma || h14 == suma){
            ganador()
        }
        if(h21 == suma || h22 == suma || h23 == suma || h24 == suma){
            ganador() 
        }
        if(h31 == suma || h32 == suma || h33 == suma || h34 == suma){
            ganador()
        }
        if(h41 == suma || h42 == suma || h43 == suma || h44 == suma){
            ganador()
        }
        if(h51 == suma || h52 == suma || h53 == suma || h54 == suma){
            ganador()
        }
        if(h61 == suma || h62 == suma || h63 == suma || h64 == suma){
            ganador()
        }
         // resultados vertical
    r11 = c1 + c2 + c3 + c4;  r21 = c21 + c22 + c23 + c24; r31 = c31 + c32 + c33 + c34; r41 = c41 + c42 + c43 + c44;
    r12 = c2 + c3 + c4 + c5;  r22 = c22 + c23 + c24 + c25; r32 = c32 + c33 + c34 + c35; r42 = c42 + c43 + c44 + c45;
    r13 = c3 + c4 + c5 + c6;  r23 = c23 + c24 + c25 + c26; r33 = c33 + c34 + c35 + c36; r43 = c43 + c44 + c45 + c46;
    r51 = c51 + c52 + c53 + c54;  r61 = c61 + c62 + c63 + c64;  r71 = c71 + c72 + c73 + c74;
    r52 = c52 + c53 + c54 + c55;  r62 = c62 + c63 + c64 + c65;  r72 = c72 + c73 + c74 + c75;
    r53 = c53 + c54 + c55 + c56;  r63 = c63 + c64 + c65 + c66;  r73 = c73 + c74 + c75 + c76;
        // Vertical
        console.log(r11,r12,r13);
        
        if( r11 == suma || r12 == suma || r13 == suma){
            console.log("entro");
            
            ganador()
            
        }  if( r21 == suma || r22 == suma || r23 == suma){
            ganador()       
        }
        if( r31 == suma || r32 == suma || r33 == suma){
            ganador()    
        }   
        if( r41 == suma || r42 == suma || r43 == suma){
            ganador()    
        }
        if( r51 == suma || r52 == suma || r53 == suma){
            ganador()    
        }
        if( r61 == suma || r62 == suma || r63 == suma){
            ganador()    
        }
        if( r71 == suma || r72 == suma || r73 == suma){
            ganador()    
        }
    }
}