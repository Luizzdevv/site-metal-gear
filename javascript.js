document.querySelectorAll('.boss').forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.dataset.nome;
    const historia = card.dataset.historia;
    document.getElementById('boss-nome').textContent = nome;
    document.getElementById('boss-historia').textContent = historia;
    document.getElementById('modal').classList.remove('hidden');
  });
});

function fecharModal() {
  document.getElementById('modal').classList.add('hidden');
}