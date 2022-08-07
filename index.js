// Function Definitions
function move(element){
    element.style.position = 'fixed';
 
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px';
        element.style.bottom = bottom + 'px';
    };
    return {
        to: moveToCoordinates
    };
};

function newImage(url){
    let image = document.createElement('img');
    image.src = url;
    document.body.append(image);
    return image;
}


function newItem(url, inventory){
    let item = newImage(url);
    item.addEventListener('click', () => {
        item.remove();
        let inventoryItem = document.createElement('img');
        inventoryItem.src = url;
        inventory.append(inventoryItem);
    })
    return item;
};


function newInventory(){
    let inventory = document.createElement('div');
    inventory.style.width = '100%';
    inventory.style.height = '100px';
    inventory.style.display = 'flex';
    inventory.style.flexDirection = 'row';
    inventory.style.alignItems = 'center';
    inventory.style.justifyContent = 'space-evenly';
    inventory.style.border = '2px solid black';
    inventory.style.backgroundColor = 'brown';
    document.body.append(inventory);

    // Add Items internally to prevent global access
    move(newItem('assets/sword.png',inventory)).to(500, 555);
    move(newItem('assets/shield.png',inventory)).to(165, 335);
    move(newItem('assets/staff.png',inventory)).to(600, 250);

    return inventory;
};

move(newInventory()).to(0,0);
move(newImage('assets/green-character.gif')).to(100,250);
move(newImage('assets/green-character.gif')).to(100, 250);
move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 590);