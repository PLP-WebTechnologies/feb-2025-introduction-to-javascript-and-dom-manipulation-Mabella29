
document.addEventListener('DOMContentLoaded', function() {
    const textChangerBtn = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    
    textChangerBtn.addEventListener('click', function() {
        changeableText.textContent = "updated text";
    });
    
    
    const styleChangerBtn = document.getElementById('style-changer');
    const styleDemo = document.getElementById('style-demo');
    let isStyled = false;
    
    styleChangerBtn.addEventListener('click', function() {
        if (!isStyled) {
            styleDemo.style.backgroundColor = 'aqua';
            styleDemo.style.width = '300px';
            styleDemo.style.height = '150px';
            styleDemo.style.fontWeight = 'bold';
            styleDemo.textContent = 'Styles have been changed';
        } else {
            styleDemo.style = ''; 
            styleDemo.textContent = 'This box will change color and size.';
        }
        isStyled = !isStyled;
    });
    
    const toggleElementBtn = document.getElementById('toggle-element');
    const elementContainer = document.getElementById('element-container');
    let newElementExists = false;
    let newElement = null;
    
    toggleElementBtn.addEventListener('click', function() {
        if (!newElementExists) {
            newElement = document.createElement('p');
            newElement.textContent = 'New element added';
            newElement.style.color = 'green';
            elementContainer.appendChild(newElement);
            toggleElementBtn.textContent = 'Remove Element';
        } else {
            elementContainer.removeChild(newElement);
            toggleElementBtn.textContent = 'Add Element';
        }
        newElementExists = !newElementExists;
    });
    
    const mainHeading = document.getElementById('main-heading');
    mainHeading.addEventListener('mouseover', function() {
        this.style.color = 'blue';
    });
    mainHeading.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});