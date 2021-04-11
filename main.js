var canvas=new fabric.Canvas("myCanvas");
player_x=100;
player_y=100;
block_image_width=200;
block_image_height=200;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }
    );
}
function new_image(get_image)
{
 fabric.Image.fromURL(get_image,function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
 }
 );    
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(key_pressed=='38'){
        console.log("Up");
        Up();
    }
    if(key_pressed=='40'){
        console.log("down");
        Down();
    }
    if(key_pressed=='37'){
        console.log("left");
        Left();
    }
    if(key_pressed=='39'){
        console.log("right");
        Right();
    }
    if(key_pressed=='70'){
        new_image("ironman_face.png");
        console.log("f")
    }
    if(key_pressed=='66'){
        new_image("spiderman_body.png");
        console.log("b");
    }
    if(key_pressed=='76'){
        new_image("hulk_legs.png");
        console.log("l");
    }
    if(key_pressed=='82'){
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if(key_pressed=='72'){
        new_image("spiderman_left_hand.png");
        console.log("h");
    }

}
function Up(){
    if(player_y>=0){
        player_y=player_y-10;
        console.log("block_image_height= "+block_image_height);
        console.log("Player x= "+player_x+" Player y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Down(){
    if(player_y<=500){
        player_y=player_y+10;
        console.log("block_image_height= "+block_image_height);
        console.log("Player x= "+player_x+" Player y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Left(){
    if(player_x>=0){
        player_x=player_x-10;
        console.log("block_image_width= "+block_image_width);
        console.log("Player x= "+player_x+" player y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Right(){
    if(player_x<=850){
        player_x=player_x+10;
        console.log("Block_image_width= "+block_image_width);
        console.log("Player x= "+player_x+" Player y= "+player_y);
        canvas.remove(player_object);
        player_update();

    }   
}
    

