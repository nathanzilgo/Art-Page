var arrayImg = ["Louis_Janmot_-_Poème_de_l'âme_6_-_Le_Toit_paternel.jpg", "512px-Guido_Reni_-_St_Matthew_and_the_Angel_-_WGA19308.jpg", "512px-Michelangelo_Caravaggio_060.jpg" , "512px-Millais-Blind_Girl.jpg", "512px-St_cecilia_guido_reni.jpg"]
        
var i = 0;
        
function getImg(){
    return arrayImg[i];
}
    
window.onclick=backgroundcolor(i);

        function backgroundcolor(i){
            var colors = ["yellow", "blue", "red" , "white", "black"];
            document.getElementsById("backgr").style.backgroundColor = colors[i];
            i += 1;
            if(i == 4){
                i = 0;
            }
            return i;
        }
        
        function play_chopin(){
            var waltz = new Audio('Valzer07.mp3');
            waltz.play();
        }
        function stop(){
            HTMLAudioElement.stop();
        }
        function proxImg(){
            if(i < arrayImg.length - 1){
                i += 1;
            }else{
                i = 0;
            }
            document.getElementById("imagem").src = arrayImg[i]; 
        }
        function imgAnt(){
            if(i > 0){
                i -= 1;
            }else{
                i = arrayImg.length - 1;
            }
            document.getElementById("imagem").src = arrayImg[i];
        }