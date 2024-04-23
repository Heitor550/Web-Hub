// Definição da data de término (formato: 'Ano-Mês-Dia Horas:Minutos:Segundos')
const endDate = new Date('2030-12-31T23:59:59').getTime();

// Função para atualizar o contador a cada segundo
setInterval(function () {
	// Atualiza a data e hora atuais
	const now = new Date().getTime();

	// Calcula a diferença entre a data de término e a data atual
	const timeRemaining = endDate - now;

	// Calcula dias, horas, minutos e segundos restantes
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	// Exibe o contador no elemento HTML
	document.getElementById('countdown').innerHTML = `
        <div>
            <span>${days}</span> dias
        </div>
        <div>
            <span>${hours}</span> horas
        </div>
        <div>
            <span>${minutes}</span> minutos
        </div>
        <div>
            <span>${seconds}</span> segundos
        `;
}, 1000);
