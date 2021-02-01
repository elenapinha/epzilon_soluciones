//(function() {

// Objetos con propiedades de formulario
var propFormulario = {
    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements,

}


// Objeto con Métodos de formulario

var metFormulario = {

    inicio: function() {
        for (var i = 0; i < propFormulario.elementos.length; i++) {

            if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'); {
                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);

            }
        }
        propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
    },

    focusInput: function() {
        this.parentElement.children[1].className = 'label active';
    },

    blurInput: function() {
        if (this.value == '') {
            this.parentElement.children[1].className = 'label';
        }
    },
    validarInputs: function(e) {
        for (var i = 0; i < propFormulario.elementos.length; i++) {

            if (propFormulario.elementos[i].value == '') {
                e.preventDefault();

            }

        }

    }


}

metFormulario.inicio();










//}())