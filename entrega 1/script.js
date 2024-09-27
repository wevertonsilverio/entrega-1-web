document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const plate = document.getElementById('plate').value;
    const owner = document.getElementById('owner').value;
    const apartment = document.getElementById('apartment').value;
    const block = document.getElementById('block').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const slot = document.getElementById('slot').value;

    
    console.log(`Placa: ${plate}, Proprietário: ${owner}, Apartamento: ${apartment}, Bloco: ${block}, Modelo: ${model}, Cor: ${color}, Vaga: ${slot}`);

   
    alert('Cadastro realizado com sucesso!');

    
    this.reset();
});